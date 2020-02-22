import { Api, ApiConfig } from './api';
import axios from 'axios';
import { AxiosRequestConfig } from 'axios';

type Attributes = {
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

export class CrowdApplication extends Api {

  constructor(config: ApiConfig) {
    super(Object.assign({}, config, { baseURL: `${config.baseURL}/`}));
  }

  public async getGroup(req: { groupname: string, expand?: boolean }) {
    const { groupname, expand = false } = req;

    const { attributes: attrs, expand: e, link, type, ...group } = await this.request({
      params: {
        expand: expand ? 'attributes' : undefined,
        groupname 
      },
      url: 'group'
    })

    if (attrs.attributes.length) group.attributes = this.convertAttrToObj(attrs);

    return group;
  }

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

  public updateGroup = async (req: { name: string, description?: string }) => {
    const { name } = req;

    const response = await this.request({
      data: Object.assign({}, req, { type: 'GROUP' }),
      params: { groupname: name },
      url: 'group'
    });

    const { attributes, expand, link, type, ...group } = response;

    if (attributes.attributes.length) group.attributes = this.convertAttrToObj(attributes);

    return group;
  }

  public getGroupAttributes = async(req: { groupname: string }) => {
    const { attributes } = await this.request({
      params: req,
      url: 'group/attribute'
    })

    return this.convertAttrToObj(attributes);
  }

  public updateGroupAttributes = async (req: { groupname: string, attributes: Attributes }) => {
    const { groupname, attributes } = req;

    const data = { attributes: this.convertAttrToList(attributes) };

    return this.request({
      data,
      method: 'POST',
      params: { groupname },
      url: 'group/attribute'
    });
  }

  public deleteGroupAttribute = async (req: { groupname: string, attributeName: string }) => this.request({
    method: 'DELETE',
    params: req,
    url: 'group/attribute'
  })

  public async getUser(req: GetUserRequest): Promise<User> {
    const { username, key, expand = false } = req;

    if (!username && !key) throw new Error("Provide either [username,key]");

    const params = {
      expand: expand ? 'attributes' : undefined,
      key,
      username
    };

    const { attributes: attrs, expand: e, link, password, ...user } = await this.request({
      params: params,
      url: 'user'
    });
    
    if (attrs.attributes.length) user.attributes = this.convertAttrToObj(attrs);

    return user;
  }
  
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

  public async getUserAttribues(req: { username: string }) {
    const { username } = req;

    const { attributes } = await this.request({
      params: { username },
      url: 'user/attribute'
    });

    return this.convertAttrToObj(attributes);
  }

  public async updateUserAttributes(req: { username: string, attributes: Attributes }) {
    const { username, attributes } = req;

    const data = { attributes: this.convertAttrToList(attributes) };

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

  public async getUserGroups(req: GetUserGroups) {
    const { username, queryType = 'direct', expand = false } = req;

    const response = this.makePaginatedRequest({
      params: {
        expand: expand ? 'group' : undefined,
        username,
      },
      url: `user/group/${queryType}`,
      queryType: 'groups'
    })

    return response;
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

  private convertAttrToObj(attrs: { attributes: { link: any, name: string, values: string[] }[]  }): Attributes {
    const { attributes } = attrs;

    return Object.assign({}, ...attributes.map( attr => ({ [attr.name]: attr.values.join('') })));
  }

  private convertAttrToList(attrs: Attributes): { name: string, values: string[] }[] {
    const retval = [];

    for (const [name, value] of Object.entries(attrs)) {
      retval.push({ name, values: [value] });
    }

    return retval;
  }
}