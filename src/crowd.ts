import { Api, ApiConfig } from './api';
import axios from 'axios';
import { AxiosRequestConfig } from 'axios';
import { convertResponse, convertAttrToList } from './utilities';

export type Attributes = {
  [key: string]: string
}

type User = {
  name: string,
  active: boolean,
  'first-name': string,
  'last-name': string,
  'display-name': string,
  email: string,
  key?: string,
  attributes?: Attributes
  'created-date'?: string,
  'updated-date'?: string
}

type Group = {
  name: string,
  active?: boolean,
  description?: string
  attributes?: Attributes
}

interface GetUserRequest {
  username?: string,
  key?: string
  expand?: boolean 
}

interface AddUserRequest extends User {
  password: string
}

interface PaginatedRequest {
  maxResults?: number,
  startIndex?: number
}

interface GetUserGroups extends PaginatedRequest {
  username: string,
  queryType?: 'direct' | 'nested',
  expand?: boolean
}

interface SearchRequest extends PaginatedRequest {
  entityType: 'group' | 'user',
  restriction?: string
  expand?: boolean | string[]
}

interface SearchUsersRequest extends PaginatedRequest {
  restriction?: string,
  expand?: boolean | string[] 
}

interface SearchGroupsRequest extends PaginatedRequest {
  restriction?: string,
  expand?: boolean | string[]
}

export class CrowdApplication extends Api {

  constructor(config: ApiConfig) {
    super(Object.assign({}, config, { baseURL: `${config.baseURL}/rest/usermanagement/1` }));
  }

  @convertResponse('Group')
  public async getGroup(req: { groupname: string, expand?: boolean }) {
    const { groupname, expand = false } = req;

    return this.request({
      params: {
        expand: expand ? 'attributes' : undefined,
        groupname 
      },
      url: 'group'
    });
  }

  @convertResponse('Group')
  public async addGroup(req: { groupname: string, description?: string }) {
    const response = await this.request({
      data: Object.assign({}, req, { type: "GROUP" }),
      method: 'POST',
      url: 'group'
    });

    return response;
  }

  public removeGroup = async(req: { groupname: string }) => this.request({
    method: 'DELETE',
    params: req,
    url: 'group'
  })

  @convertResponse('Group')
  public async updateGroup(req: { name: string, description?: string }) {
    const { name } = req;

    return this.request({
      data: Object.assign({}, req, { type: 'GROUP' }),
      params: { groupname: name },
      url: 'group'
    });
  }

  @convertResponse('Attributes')
  public async getGroupAttributes(req: { groupname: string }) {
    const { attributes } = await this.request({
      params: req,
      url: 'group/attribute'
    })

    return attributes;
  }

  public async updateGroupAttributes(req: { groupname: string, attributes: Attributes }) {
    const { groupname, attributes } = req;

    const data = { attributes: convertAttrToList(attributes) };

    return this.request({
      data,
      method: 'POST',
      params: { groupname },
      url: 'group/attribute'
    });
  }

  public async deleteGroupAttribute(req: { groupname: string, attributeName: string }) {
    return this.request({
      method: 'DELETE',
      params: req,
      url: 'group/attribute'
    })
  }

  @convertResponse('User')
  public async getUser(req: GetUserRequest): Promise<User> {
    const { username, key, expand = false } = req;

    if (!username && !key) throw new Error("Provide either [username,key]");

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
  
  @convertResponse('User')
  public async addUser(req: AddUserRequest) {
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
      method: 'POST',
      url: 'user'
    });
  }

  @convertResponse('User')
  public async updateUser(req: User) {
    const { name: username } = req;

    return this.request({
      data: req,
      method: 'PUT',
      params: { username },
      url: 'user'
    })
  }

  public removeUser = async(req: { username: string }) => {
    return this.request({
      method: 'DELETE',
      params: req,
      url: 'user'
    });
  }
  
  @convertResponse('Attributes')
  public async getUserAttribues(req: { username: string }) {
    const { username } = req;

    const { attributes } = await this.request({
      params: { username },
      url: 'user/attribute'
    });

    return attributes;
  }

  public async updateUserAttributes(req: { username: string, attributes: Attributes }) {
    const { username, attributes } = req;

    const data = { attributes: convertAttrToList(attributes) };

    return this.request({
      data,
      method: 'POST',
      params: { username },
      url: 'user/attribute'
    })
  }

  public async deleteUserAttributes(req: { username: string, attributeName: string }) {
    return this.request({
      method: 'DELETE',
      params: req,
      url: 'user/attribute'
    });
  }

  @convertResponse('Group')
  public async getUserGroups(req: GetUserGroups) {
    const { username, queryType = 'direct', expand = false, ...params } = req;

    return this.makePaginatedRequest({
      params: Object.assign({}, params, {
        expand: expand ? 'group' : undefined,
        username,
      }),
      url: `user/group/${queryType}`,
      queryType: 'groups'
    })
  }

  public async search(req: SearchRequest) {
    const { entityType, ...request } = req;

    return entityType === 'user' ? this.searchUsers(request) : this.searchGroups(request);
  }

  @convertResponse('User')
  private async searchUsers(req: SearchUsersRequest) {
    const { expand = [], ...params } = req;
    
    const expansionParam = typeof expand === 'boolean' ? 'user,attributes' : expand.join(',');

    return this.makePaginatedRequest({
      params: Object.assign({}, params, {
        expand: expansionParam.length ? expansionParam : undefined,
        'entity-type': 'user'
      }),
      url: 'search',
      queryType: 'users'
    })
  }

  @convertResponse('Group')
  private async searchGroups(req: SearchGroupsRequest) {
    const { expand = [], ...params } = req;

    const expansionParam = typeof expand === 'boolean' ? 'group,attributes' : expand.join(',');

    return this.makePaginatedRequest({
      params: Object.assign({}, params, {
        expand: expansionParam.length ? expansionParam : undefined,
        'entity-type': 'group'
      }),
      url: 'search',
      queryType: 'groups'
    })
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

      if (response.length < maxResults) break;

      requestParams.params['start-index'] += maxResults;
    }

    return results;
  }
}