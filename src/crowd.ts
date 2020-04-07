import { AxiosRequestConfig } from 'axios';
import * as Parser from 'node-xml-stream';
import { Api, ApiConfig, Method } from './api';
import { convertResponse, convertAttrToList } from './utilities';

enum EntityType {
  ATTRIBUTES = 'attributes',
  GROUP = 'group',
  TOKEN = 'token',
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
   * Authenticates user, and returns user
   * 
   * @param {object} req 
   * @param {object} req.name
   * @param {string} req.password
   */
  @convertResponse(EntityType.USER)
  public async authenticateUser(req: AuthenticateUserRequest): Promise<User> {
    return this.request({
      method: Method.POST,
      params: { username: req.name },
      data: { value: req.password },
      url: 'authentication'
    });
  }

  /**
   *  @return {object} {
   *    domain: string
   *    secure: string
   *    name: string
   *  }
   */
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
    return this.request({
      params: {
        groupname: req.name,
        expand: req.expand ? 'attributes' : undefined,
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
    const { name, description } = req;

    const data: any = { name, type: 'GROUP' };

    if (description) data.description = description;

    return this.request({
      data,
      method: Method.PUT,
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
    return this.request({
      data: {
        attributes: convertAttrToList(req.attributes)
      },
      method: Method.POST,
      params: { groupname: req.name },
      url: 'group/attribute'
    });
  }

  public async removeGroupAttribute(req: RemoveGroupAttributeRequest): Promise<void> {
    return this.request({
      method: Method.DELETE,
      params: { 
        attributename: req.attributename,
        groupname: req.name
      },
      url: 'group/attribute'
    });
  }

  @convertResponse(EntityType.GROUP)
  public async getGroupChildren(req: GetGroupChildrenRequest): Promise<Groups> {
    return this.makePaginatedRequest({
      queryType: QueryTypes.GROUPS,
      params: {
        maxResults: req.maxResults,
        startIndex: req.startIndex,
        groupname: req.name,
        expand: this._createExpandParam(req.expand)
      },
      url: `group/child-group/${req.nested ? 'nested' : 'direct'}`,
    });
  }

  public async addGroupChild(req: AddGroupChildRequest): Promise<void> {
    return this.request({
      data: { name: req.childname },
      params: { groupname: req.name },
      url: 'group/child-group/direct',
      method: Method.POST,
    });
  }

  public async removeGroupChild(req: RemoveGroupChildRequest): Promise<void> {
    return this.request({
      params: { 
        'child-groupname': req.childname,
        groupname: req.name
      },
      url: 'group/child-group/direct',
      method: Method.DELETE
    });
  }

  @convertResponse(EntityType.GROUP)
  public async getGroupParents (req: GetGroupParentsRequest): Promise<Groups> {
    return this.makePaginatedRequest({
      queryType: QueryTypes.GROUPS,
      params: {
        maxResults: req.maxResults,
        startIndex: req.startIndex,
        groupname: req.name,
        expand: this._createExpandParam(req.expand),
      },
      url: `group/parent-group/${req.nested ? 'nested': 'direct'}`
    });
  }

  public async addParentGroup(req: AddGroupParentRequest): Promise<void> {
    return this.request({
      data: { name: req.parentname },
      params: { groupname: req.name },
      url: 'group/parent-group/direct',
      method: Method.POST
    });
  }

  @convertResponse(EntityType.USER)
  public async getGroupUsers(req: GetGroupUsersRequest): Promise<Users> {
    return this.makePaginatedRequest({
      queryType: QueryTypes.USERS,
      params: {
        maxResults: req.maxResults,
        startIndex: req.startIndex,
        groupname: req.name,
        expand: this._createExpandParam(req.expand)
      },
      url: `group/user/${req.nested ? 'nested': 'direct'}`
    });
  }

  public async addGroupToUser(req: AddUserToGroupRequest) {
    return this.request({
      data: { name: req.username },
      params: {
        groupname: req.name,
      },
      url: 'group/user/direct',
      method: Method.POST
    });
  }

  public async removeGroupFromUser(req: removeGroupFromUserRequest): Promise<void> {
    return this.request({
      params: {
        groupname: req.name,
        username: req.username
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
    const username = (req as any).name;
    const key = (req as any).key;

    const params = {
      expand: req.expand ? 'attributes' : undefined,
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
    const updatables = ['name', 'active', 'first-name', 'last-name', 'display-name', 'email'];

    const data = updatables.reduce( (retval: any, curr: string) => {
      const attr = (req as any)[curr];

      if (attr) retval[curr] = attr;
      return retval;
    }, {});
    
    return this.request({
      data: data,
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
    return this.request({
      data: {
        attributes: convertAttrToList(req.attributes)
      },
      method: Method.POST,
      params: { username: req.name },
      url: 'user/attribute'
    });
  }

  public async removeUserAttribute(req: RemoveUserAttributeRequest): Promise<void> {
    return this.request({
      method: 'DELETE',
      params: {
        attributename: req.name,
        username: req.name 
      },
      url: 'user/attribute'
    });
  }

  @convertResponse(EntityType.GROUP)
  public async getUserGroups(req: GetUserGroups): Promise<Groups> {
    return this.makePaginatedRequest({
      params: {
        expand: this._createExpandParam(req.expand),
        username: req.name
      },
      url: `user/group/${req.nested ? 'nested' : 'direct'}`,
      queryType: QueryTypes.GROUPS
    });
  }

  public async updateUserPassword(req: UpdateUserPasswordRequest): Promise<void> {
    return this.request({
      data: { value: req.password },
      method: Method.PUT,
      params: { username: req.name },
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
    return this.request({
      data: { 'new-name': req.newname },
      params: { username: req.name },
      url: 'user/rename',
      method: Method.POST
    });
  }

  @convertResponse(EntityType.USER)
  public async searchUsers(req: SearchUsersRequest = {}): Promise<Users> {
    return this.makePaginatedRequest({
      params: {
        maxResults: req.maxResults,
        startIndex: req.startIndex,
        expand: this._createExpandParam(req.expand),
        'entity-type': EntityType.USER
      },
      url: 'search',
      queryType: QueryTypes.USERS
    });
  }

  @convertResponse(EntityType.GROUP)
  public async searchGroups(req: SearchGroupsRequest = {}): Promise<Groups> {
    return this.makePaginatedRequest({
      params: {
        maxResults: req.maxResults,
        startIndex: req.startIndex,
        expand: this._createExpandParam(req.expand),
        'entity-type': EntityType.GROUP
      },
      url: 'search',
      queryType: QueryTypes.GROUPS
    });
  }

  @convertResponse(EntityType.TOKEN)
  public async getToken(req: any): Promise<any> {
    return this.request({
      data: {
        username: req.name,
        password: req.password
      },
      params: {
        'validate-password': req.validate,
        duration: req.duration
      },
      method: Method.POST,
      url: 'session'
    })
  }

  public async deleteToken(req: DeleteTokenRequest): Promise<any> {
    return this.request({
      params: {
        exclude: req.exclude,
        username: req.name 
      },
      method: Method.DELETE,
      url: 'session'
    });
  }

  public async invalidateToken(req: InvalidateUserTokenRequest) {
    return this.request({
      method: Method.DELETE,
      url: `session/${req.token}`
    });
  }

  @convertResponse('token')
  public async validateToken(req: ValidateTokenRequest) {
    return this.request({
      method: Method.POST,
      url: `session/${req.token}`
    });
  }

  @convertResponse('token')
  public async getSession(req: GetSessionRequest) {
    return this.request({
      url: `session/${req.token}`
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