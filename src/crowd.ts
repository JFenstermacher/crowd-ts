import { Api } from './api';
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

interface GetUserRequest {
  username?: string,
  key?: string
  attributes?: boolean 
}

interface AddUserRequest extends User {
  password: string
}

export class CrowdApplication extends Api {

  public async getUser(req: GetUserRequest): Promise<User> {
    const { username, key, attributes = false } = req;

    if (!username && !key) throw new Error("Provide either [username,key]");

    const params = {
      expand: attributes ? 'attributes' : undefined,
      key,
      username
    };

    const { attributes: attrs, expand, link, password, ...user } = await this.request({
      params: params,
      url: 'rest/usermanagement/1/user'
    });
    
    if (attrs.attributes.length) user.attributes = this.convertAttrs(attrs);

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
      url: 'rest/usermanagement/1/user'
    });
  }

  public async updateUser(req: User) {
    const { name: username } = req;

    return this.request({
      data: req,
      method: 'PUT',
      params: { username },
      url: 'rest/usermanagement/1/user'
    })
  }

  public async removeUser(req: { username: string }) {
    const { username } = req;

    return this.request({
      method: 'DELETE',
      params: { username },
      url: 'rest/usermanagement/1/user'
    });
  }

  public async getUserAttribues(req: { username: string }) {
    const { username } = req;

    const { attributes } = await this.request({
      params: { username },
      url: 'rest/usermanagement/1/user/attribute'
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
      url: 'rest/usermanagement/1/user/attribute'
    })
  }

  public async deleteUserAttributes(req: { username: string, attributeNames: string[] }) {
    const { username, attributeNames } = req;

    const deleteAttr = async (attributeName: string) => this.request({
      method: 'DELETE',
      params: { username, attributeName },
      url: 'rest/usermanagement/1/user/attribute'
    })

    return await Promise.all(attributeNames.map( name => deleteAttr(name) ));
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