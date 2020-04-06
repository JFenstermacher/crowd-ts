import { AxiosRequestConfig } from 'axios';
import * as Parser from 'node-xml-stream';
import { Api, ApiConfig, Method } from './api';
import { convertResponse, convertAttrToList } from './utilities';

enum EntityType {
  ATTRIBUTES = 'attributes',
  GROUP = 'group',
  USER = 'user'
}

enum QueryTypes {
  GROUPS = 'groups',
  USERS = 'users'
}

export class CrowdApplication extends Api {

  constructor(config: ApiConfig) {
    super({
      ...config,
      baseURL: `${config.baseURL}/rest/usermanagement/1`
    });
  }

  /**
   * 
   * @param req 
   * @param req.username 
   */
  @convertResponse(EntityType.USER)
  public async authenticateUser(req: AuthenticateUserRequest): Promise<User> {
    const { name: username, password } = req;

    return this.request({
      method: Method.POST,
      params: { username },
      data: { value: password },
      url: 'authentication'
    });
  }

  public async getConfig(): Promise<Config> {
    return this.request({
      url: 'config/cookie'
    });
  }

  /**
   * 
   * @param {GetGroupRequest} req 
   */
  @convertResponse(EntityType.GROUP)
  public async getGroup(req: GetGroupRequest): Promise<Group> {
    const { name, expand = false } = req;

    return this.request({
      params: {
        groupname: name,
        expand: expand ? 'attributes' : undefined,
      },
      url: 'group'
    });
  }

  @convertResponse(EntityType.GROUP)
  public async addGroup(req: AddGroupRequest): Promise<Group> {
    return this.request({
      data: {
        ...req,
        type: "GROUP"
      },
      method: Method.POST,
      url: 'group'
    });
  }

  public async removeGroup(req: RemoveGroupRequest): Promise<void> {
    return this.request({
      method: Method.DELETE,
      params: { groupname: req.name },
      url: 'group'
    });
  }

  @convertResponse(EntityType.GROUP)
  public async updateGroup(req: UpdateGroupRequest): Promise<Group> {
    const { name, ...data } = req;

    return this.request({
      method: Method.PUT,
      data: {
        ...data,
        name,
        type: 'GROUP'
      },
      params: { groupname: name },
      url: 'group'
    });
  }

  @convertResponse(EntityType.ATTRIBUTES)
  public async getGroupAttributes(req: GetGroupAttributesRequest): Promise<Attributes> {
    return this.request({
      params: { groupname: req.name },
      url: 'group/attribute'
    });
  }

  public async updateGroupAttributes(req: UpdateUserAttributesRequest): Promise<void> {
    const { name: groupname, attributes } = req;
    const data = { attributes: convertAttrToList(attributes) };

    return this.request({
      data,
      method: Method.POST,
      params: { groupname },
      url: 'group/attribute'
    });
  }

  public async removeGroupAttribute(req: RemoveGroupAttributeRequest): Promise<void> {
    const { name: groupname, attributename } = req;
    return this.request({
      method: Method.DELETE,
      params: { 
        attributename,
        groupname
      },
      url: 'group/attribute'
    });
  }

  @convertResponse(EntityType.GROUP)
  public async getGroupChildren(req: GetGroupChildrenRequest): Promise<Groups> {
    let { name, expand, nested = false, ...params } = req;

    return this.makePaginatedRequest({
      queryType: QueryTypes.GROUPS,
      params: {
        ...params,
        groupname: name,
        expand: this._createExpandParam(expand)
      },
      url: `group/child-group/${nested ? 'nested' : 'direct'}`,
    });
  }

  public async addGroupChild(req: AddGroupChildRequest): Promise<void> {
    const { name: groupname, childname } = req;

    return this.request({
      data: { name: childname },
      params: { groupname },
      url: 'group/child-group/direct',
      method: Method.POST,
    });
  }

  public async removeGroupChild(req: RemoveGroupChildRequest): Promise<void> {
    const { name: groupname, childname } = req;

    return this.request({
      params: { 
        'child-groupname': childname,
        groupname
      },
      url: 'group/child-group/direct',
      method: Method.DELETE
    });
  }

  @convertResponse(EntityType.GROUP)
  public async getGroupParents (req: GetGroupParentsRequest): Promise<Groups> {
    const { name, expand, nested = false, ...params } = req; 

    return this.makePaginatedRequest({
      queryType: QueryTypes.GROUPS,
      params: {
        ...params,
        groupname: name,
        expand: this._createExpandParam(expand),
      },
      url: `group/parent-group/${nested ? 'nested': 'direct'}`
    });
  }

  public async addParentGroup(req: AddGroupParentRequest): Promise<void> {
    const { name: groupname, parentname: name } = req;
    return this.request({
      data: { name },
      params: { groupname },
      url: 'group/parent-group/direct',
      method: Method.POST
    });
  }

  @convertResponse(EntityType.USER)
  public async getGroupUsers(req: GetGroupUsersRequest): Promise<Users> {
    let { name, expand, nested = false, ...params } = req;

    return this.makePaginatedRequest({
      queryType: QueryTypes.USERS,
      params: {
        ...params,
        groupname: name,
        expand: this._createExpandParam(expand)
      },
      url: `group/user/${nested ? 'nested': 'direct'}`
    });
  }

  public async addGroupToUser(req: AddUserToGroupRequest) {
    const { name: groupname, username } = req;

    return this.request({
      data: { name: username },
      params: {
        groupname,
      },
      url: 'group/user/direct',
      method: Method.POST
    });
  }

  public async removeGroupFromUser(req: removeGroupFromUserRequest): Promise<void> {
    const { name: groupname, username } = req;

    return this.request({
      params: {
        groupname,
        username
      },
      url: 'group/user/direct',
      method: Method.DELETE
    });
  }

  public async getAllMemberships(): Promise<Memberships> {
    const parser = new Parser();

    const memberships: Memberships = {};

    const stream = await this.request({
      url: 'group/membership',
      responseType: 'stream'
    });

    stream.pipe(parser);

    let currMem;
    let curr: Membership = { users: [], groups: [] };

    parser.on('opentag', (name: string, attr: any) => {
      switch(name) {
        case 'membership': {
          currMem = attr.group;
          curr = {
            users: [],
            groups: []
          }
          memberships[currMem] = curr;
          break;
        }
        case 'user': {
          const { name } = attr as { name: string }
          const cleaned = name.split(' ').shift() as string;
          curr.users.push(cleaned);
          break;
        }
        case 'group': {
          const { name } = attr as { name: string }
          const cleaned = name.split(' ').shift() as string;
          curr.groups.push(cleaned);
          break;
        }
      }
    });

    return new Promise( (resolve) => {
      parser.on('finish', () => {
        resolve(memberships);
      })
    });
  }

  @convertResponse(EntityType.USER)
  public async getUser(req: GetUserRequest): Promise<User> {
    const { expand = false } = req;
    const username = (req as any).name;
    const key = (req as any).key;

    const params = {
      expand: expand ? 'attributes' : undefined,
      key,
      username
    };

    return this.request({
      params: params,
      url: 'user'
    });
  }
  
  @convertResponse(EntityType.USER)
  public async addUser(req: AddUserRequest): Promise<User> {
    const data: any = {
      name: req.name,
      password: { value: req.password },
      active: req.active,
      'first-name': req['first-name'],
      'last-name': req['last-name'],
      'display-name': req['display-name'],
      email: req.email
    }

    return this.request({
      data: data,
      method: Method.POST,
      url: 'user'
    });
  }

  public async updateUser(req: UpdateUserRequest): Promise<void> {
    return this.request({
      data: req,
      method: Method.PUT,
      params: { username: req.name },
      url: 'user'
    })
  }

  public async removeUser(req: RemoveUserRequest): Promise<void> {
    return this.request({
      method: Method.DELETE,
      params: { username: req.name },
      url: 'user'
    });
  }
  
  @convertResponse(EntityType.ATTRIBUTES)
  public async getUserAttribues(req: GetUserAttributesRequest): Promise<Attributes> {
    return this.request({
      params: { username: req.name },
      url: 'user/attribute'
    });
  }

  public async updateUserAttributes(req: UpdateUserAttributesRequest): Promise<void> {
    const { name: username, attributes } = req;

    const data = { attributes: convertAttrToList(attributes) };

    return this.request({
      data,
      method: Method.POST,
      params: { username },
      url: 'user/attribute'
    });
  }

  public async removeUserAttribute(req: RemoveUserAttributeRequest): Promise<void> {
    const { name: username, attributename } = req;
    return this.request({
      method: 'DELETE',
      params: {
        attributename,
        username
      },
      url: 'user/attribute'
    });
  }

  @convertResponse(EntityType.GROUP)
  public async getUserGroups(req: GetUserGroups): Promise<Groups> {
    const { name: username, nested = false, expand = false } = req;

    return this.makePaginatedRequest({
      params: {
        expand: this._createExpandParam(expand),
        username
      },
      url: `user/group/${nested ? 'nested' : 'direct'}`,
      queryType: QueryTypes.GROUPS
    });
  }

  public async updateUserPassword(req: UpdateUserPasswordRequest): Promise<void> {
    const { name: username, password } = req;

    return this.request({
      data: { value: password },
      method: Method.PUT,
      params: { username },
      url: 'user/password'
    });
  }

  public async removeUserPassword(req: RemoveUserPasswordRequest): Promise<void> {
    return this.request({
      method: Method.DELETE,
      params: { username: req.name },
      url: 'user/password'
    });
  }

  @convertResponse(EntityType.USER)
  public async renameUser(req: RenameUserRequest): Promise<User> {
    const { name: username, newname } = req;

    return this.request({
      data: { 'new-name': newname },
      params: { username },
      url: 'user/rename',
      method: Method.POST
    });
  }

  @convertResponse(EntityType.USER)
  public async searchUsers(req: SearchUsersRequest = {}): Promise<Users> {
    const { expand, ...params } = req;

    return this.makePaginatedRequest({
      params: {
        ...params,
        expand: this._createExpandParam(expand),
        'entity-type': EntityType.USER
      },
      url: 'search',
      queryType: QueryTypes.USERS
    });
  }

  @convertResponse(EntityType.GROUP)
  public async searchGroups(req: SearchGroupsRequest = {}): Promise<Groups> {
    const { expand, ...params } = req;

    return this.makePaginatedRequest({
      params: {
        ...params,
        expand: this._createExpandParam(expand),
        'entity-type': EntityType.GROUP
      },
      url: 'search',
      queryType: QueryTypes.GROUPS
    });
  }
  
  private async makePaginatedRequest<T>(req: AxiosRequestConfig & { queryType: string }): Promise<T[]> {
    const { queryType, ...requestParams } = req;
    const { maxResults = 1000, startIndex = 0, ...params } = requestParams.params;

    const total = maxResults < 1000 ? maxResults : Number.MAX_SAFE_INTEGER;

    const results: T[] = [];

    params['max-results'] = maxResults;
    params['start-index'] = startIndex;
    requestParams.params = params;

    while (results.length < total) {
      const { [queryType]: response } = await this.request(requestParams);

      results.push(...response);

      if (response.length < Math.min(maxResults, 1000)) break;

      requestParams.params['start-index'] += response.length;
    }

    return results;
  }

  private _createExpandParam(expand?: boolean | string[]): string | undefined {
    expand = expand ? expand : [];

    const param = Array.isArray(expand) ? expand.join(',') : 'user,group,attributes';

    return param.length ? param: undefined;
  }
}