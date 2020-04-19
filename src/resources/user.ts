import { ResourceClient } from './base';
import { convertResponse, convertAttrToList } from '../shared/utilities';
import { EntityType, Method, QueryTypes } from '../shared/enums';

import { Groups, Attributes, PaginatedRequest } from '..';

export type Users = User[];
export type User = {
  name: string
  active?: boolean
  firstname?: string
  lastname?: string
  displayname?: string
  email?: string
  key?: string
  password?: string
  attributes?: Attributes
  createdDate?: number 
  updatedDate?: number 
}

export interface AuthenticateUserRequest {
  name: string
  password: string
}

export interface GetUserRequestWithKey {
  key: string
  expand?: boolean
}

export interface GetUserRequestWithName {
  name: string
  expand?: boolean 
}

export type GetUserRequest = GetUserRequestWithKey | GetUserRequestWithName

export interface CreateUserRequest {
  name: string
  active: boolean
  firstname: string
  lastname: string
  displayname: string
  email: string
  password: string
}

export interface UpdateUserRequest {
  name: string
  active?: boolean
  firstname?: string
  lastname?: string
  displayname?: string
  email?: string
}

export interface RemoveUserRequest {
  name: string
}

export interface GetUserAttributesRequest {
  name: string
}

export interface SetUserAttributesRequest {
  name: string,
  attributes: Attributes
}

export interface RemoveUserAttributeRequest {
  name: string,
  attribute: string
}

export interface GetUserGroupsRequest extends PaginatedRequest {
  name: string
  nested?: boolean
  expand?: boolean | string[]
}

export interface AddUserGroupRequest {
  name: string
  groupname: string
}

export interface RemoveUserGroupRequest {
  name: string
  groupname: string
}

export interface UpdateUserPasswordRequest {
  name: string
  password: string
}

export interface RemoveUserPasswordRequest {
  name: string
}

export interface RenameUserRequest {
  name: string
  newname: string
}

export interface SearchUsersRequest extends PaginatedRequest {
  restriction?: string
  expand?: boolean | string[] 
}

export class UserClient extends ResourceClient {

  /**
   *  @apiDefine UserResponse
   *  
   *  @apiSuccess (User Response) {User}        response              Object that houses below properties
   *  @apiSuccess (User Response) {String}      response.name         Username
   *  @apiSuccess (User Response) {Boolean}     response.active       Whether user is active
   *  @apiSuccess (User Response) {String}      response.firstname    User first name
   *  @apiSuccess (User Response) {String}      response.lastname     User last name 
   *  @apiSuccess (User Response) {String}      response.displayname  User display name 
   *  @apiSuccess (User Response) {String}      response.email        User email
   *  @apiSuccess (User Response) {String}      response.key          User key
   *  @apiSuccess (User Response) {Attributes}  response.attributes   Attributes object, may be empty
   */

  /**
   *  @api {GET} /authentication user.authenticate
   *  @apiName user.authenticate
   *  @apiGroup User
   *  
   *  @apiDescription Authenticates a user. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/authentication-authenticateUser>[API DOCS]</a>
   *  
   *  @apiExample {javascript} Async/await
   *    const user = await crowd.user.authenticate(AuthenticationRequest)
   *  
   *  @apiUse UserResponse 
   *  
   *  @apiParam {Object} request Object housing below properties
   *  @apiParam {String} request.name User name
   *  @apiParam {String} request.password User password
   *  @apiParamExample {Object} AuthenticationRequest
   *    {
   *      name: 'aemma',
   *      password: '<password>'
   *    }
   * 
   *  @apiSuccessExample {Object} UserResponseExample 
   *    {
   *      name: 'aemma',
   *      active: true,
   *      firstname: 'Abigail',
   *      lastname: 'Emma',
   *      displayname: 'Abigail Emma',
   *      email: 'aemma@test.com',
   *      key: '<key>',
   *      attributes: {
   *        invalidPasswordAttempts: '0',
   *        lastActive: '1586482147886',
   *        lastAuthenticated: '1586482147882',
   *        passwordLastChanged: '1586223686282',
   *        requiresPasswordChange: 'false'
   *      },
   *      createdDate: 1586223686277,
   *      updatedDate: 1586482147883
   *    }
   */
  @convertResponse(EntityType.USER)
  public async authenticate(req: AuthenticateUserRequest): Promise<User> {
    return this.request({
      method: Method.POST,
      params: { username: req.name },
      data: { value: req.password },
      url: 'authentication'
    });
  }

  /**
   *  @api {GET} /user user.get
   *  @apiName user.get
   *  @apiGroup User
   *  
   *  @apiDescription Retrieves user from Crowd. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/user-getUser>[API DOCS]</a>
   *  
   *  @apiExample {javascript} Async/await
   *    const user = await crowd.user.get(GetUserRequest)
   *  @apiParamExample {Object} GetUserRequest
   *    {
   *      name: 'aemma',
   *      expand: true
   *    }
   *  
   *  @apiUse UserResponse 
   *  
   *  @apiParam {Object} request Object housing below properties
   *  @apiParam {String} request.name User name
   *  @apiParam {Boolean} [request.expand=false] Expand attributes of user
   *  
   *  @apiSuccessExample {Object} UserResponseExample 
   *    {
   *      name: 'aemma',
   *      active: true,
   *      firstname: 'Abigail',
   *      lastname: 'Emma',
   *      displayname: 'Abigail Emma',
   *      email: 'aemma@test.com',
   *      key: '<key>',
   *      attributes: {
   *        invalidPasswordAttempts: '0',
   *        lastActive: '1586482147886',
   *        lastAuthenticated: '1586482147882',
   *        passwordLastChanged: '1586223686282',
   *        requiresPasswordChange: 'false'
   *      },
   *      createdDate: 1586223686277,
   *      updatedDate: 1586482147883
   *    }
   */
  @convertResponse(EntityType.USER)
  public async get(req: GetUserRequest): Promise<User> {
    const username = (req as any).name;
    const key = (req as any).key;

    const params = {
      expand: req.expand ? 'attributes' : undefined,
      username,
      key
    };

    return this.request({
      params: params,
      url: 'user'
    });
  }
  
  /**
   *  @api {POST} /user user.create
   *  @apiName user.create
   *  @apiGroup User
   *  
   *  @apiDescription Creates a user. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/user-addUser>[API DOCS]</a>
   *  
   *  @apiExample {javascript} Async/await
   *    const user = await crowd.user.create(CreateUserRequest)
   *  @apiParamExample {Object} CreateUserRequest
   *    {
   *      active: true,
   *      name: 'emason-d42445',
   *      password: '<password>',
   *      firstname: 'Emma',
   *      lastname: 'Mason',
   *      displayname: 'Emma Mason',
   *      email: 'emason-d42445@test.com'
   *    }
   *  
   *  @apiUse UserResponse 
   *  
   *  @apiParam {Object} request Object housing below properties
   *  @apiParam {String} request.name User name
   *  @apiParam {Boolean} [request.expand=false] Expand attributes of user
   *  
   *  @apiSuccessExample {Object} UserResponseExample 
   *    {
   *      name: 'emason-d42445',
   *      active: true,
   *      firstname: 'Emma',
   *      lastname: 'Mason',
   *      displayname: 'Emma Mason',
   *      email: 'emason-d42445@test.com',
   *      key: '<key>',
   *      attributes: {
   *        invalidPasswordAttempts: '0',
   *        passwordLastChanged: '1586619725091',
   *        requiresPasswordChange: 'false'
   *      },
   *      createdDate: 1586619725088,
   *      updatedDate: 1586619725088
   *    }
   */
  @convertResponse(EntityType.USER)
  public async create(req: CreateUserRequest): Promise<User> {
    const data: any = {
      name: req.name,
      password: { value: req.password },
      active: req.active,
      'first-name': req.firstname,
      'last-name': req.lastname,
      'display-name': req.displayname,
      email: req.email
    }

    return this.request({
      data: data,
      method: Method.POST,
      url: 'user'
    });
  }

  /**
   *  @api {PUT} /user user.update
   *  @apiName user.update
   *  @apiGroup User
   *  
   *  @apiDescription Updates a user. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/user-updateUser>[API DOCS]</a>
   *  
   *  @apiExample {javascript} Async/await
   *    const user = await crowd.user.update(UpdateUserRequest)
   *  
   *  @apiParam {Object}  request                 Object housing properties below
   *  @apiParam {String}  request.name            User name
   *  @apiParam {Boolean} [request.active]        Whether user is active
   *  @apiParam {String}  [request.firstname]     User first name
   *  @apiParam {String}  [request.lastname]      User last name
   *  @apiParam {String}  [request.displayname]   User display name
   *  @apiParam {String}  [request.email]         User email
   *  @apiParamExample {Object} UpdateUserRequest 
   *    {
   *      name: 'aemma',
   *      active: true,
   *      firstname: 'Douglas',
   *      lastname: 'Dolittle',
   *      displayname: 'Douglas Dolittle',
   *      email: 'ddolittle@test.com'
   *    }
   */
  public async update(req: UpdateUserRequest): Promise<void> {
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

  /**
   *  @api {DELETE} /user user.remove
   *  @apiName user.remove
   *  @apiGroup User
   *  
   *  @apiDescription Removes a user. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/user-removeUser>[API DOCS]</a>
   *  
   *  @apiExample {javascript} Async/await
   *    await crowd.user.remove(CreateUserRequest)
   *  
   *  @apiParam {Object} request Object housing properties below
   *  @apiParam {String} request.name User name
   *  @apiParamExample {Object} CreateUserRequest 
   *    {
   *      name: 'aemma',
   *    }
   */
  public async remove(req: RemoveUserRequest): Promise<void> {
    return this.request({
      method: Method.DELETE,
      params: { username: req.name },
      url: 'user'
    });
  }
  
  /**
   *  @api {GET} /user/attribute user.getAttributes
   *  @apiName user.getAttributes
   *  @apiGroup User
   *  
   *  @apiDescription Gets a user's attributes. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/user-getUserAttributes>[API DOCS]</a>
   *  
   *  @apiExample {javascript} Async/await
   *    const attributes = await crowd.user.getAttributes(GetAttributesRequest)
   *  
   *  @apiParam {Object} request Object housing properties below
   *  @apiParam {String} request.name User name
   *  @apiParamExample {Object} GetAttributesRequest
   *    {
   *      name: 'aemma',
   *    }
   *  
   *  @apiSuccess (Attributes Response) {Attributes} response Attributes object in the form { [key: string]: string }
   *  @apiSuccessExample {Object} AttributesResponse
   *    {
   *      attr1: 'test1',
   *      attr2: 'test2
   *    }
   */
  @convertResponse(EntityType.ATTRIBUTES)
  public async getAttributes(req: GetUserAttributesRequest): Promise<Attributes> {
    return this.request({
      params: { username: req.name },
      url: 'user/attribute'
    });
  }

  /**
   *  @api {POST} /user/attribute user.setAttributes
   *  @apiName user.setAttributes
   *  @apiGroup User
   *  
   *  @apiDescription Sets a user's attributes. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/user-storeUserAttributes>[API DOCS]</a>
   *  
   *  @apiExample {javascript} Async/await
   *    await crowd.user.setAttributes(SetAttributesRequest)
   *  
   *  @apiParam {Object} request Object housing properties below
   *  @apiParam {String} request.name User name
   *  @apiParam {Attributes} request.attributes Object of type { [key: string]: string }
   *  @apiParamExample {Object} SetAttributesRequest
   *    {
   *      name: 'aemma',
   *      attributes: {
   *        attr1: 'test1',
   *        attr2: 'test2' 
   *      }
   *    }
   */
  public async setAttributes(req: SetUserAttributesRequest): Promise<void> {
    return this.request({
      data: {
        attributes: convertAttrToList(req.attributes)
      },
      method: Method.POST,
      params: { username: req.name },
      url: 'user/attribute'
    });
  }

  /**
   *  @api {DELETE} /user/attribute user.removeAttribute
   *  @apiName user.removeAttribute
   *  @apiGroup User
   *  
   *  @apiDescription Remove a user attribute. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/user-removeUserAttribute>[API DOCS]</a>
   *  
   *  @apiExample {javascript} Async/await
   *    await crowd.user.deleteAttribute(RemoveAttributeRequest)
   *  
   *  @apiParam {Object} request Object housing properties below
   *  @apiParam {String} request.name User name
   *  @apiParam {String} request.attribute Attribute to remove
   *  @apiParamExample {Object} RemoveAttributeRequest 
   *    {
   *      name: 'aemma',
   *      attribute: 'attr1'
   *    }
   */
  public async removeAttribute(req: RemoveUserAttributeRequest): Promise<void> {
    return this.request({
      method: 'DELETE',
      params: {
        attributename: req.attribute,
        username: req.name 
      },
      url: 'user/attribute'
    });
  }

  /**
   *  @api {GET} /user/group/[direct|nested] user.getGroups
   *  @apiName user.getGroups
   *  @apiGroup User
   *  
   *  @apiDescription Gets user's groups. Paginates until all results retrieved automatically. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/user-getDirectGroups>[API DOCS]</a>
   *  
   *  @apiExample {javascript} Async/await
   *    const users = await crowd.user.getGroups(GetGroupsRequest)
   *  
   *  @apiParam {Object} request Object housing properties below
   *  @apiParam {String} request.name User name
   *  @apiParam {Boolean} [request.expand=false] Expand groups 
   *  @apiParam {Boolean} [request.nested=false] Bring back nested groups, brings back direct by default
   *  @apiParam {Number} [request.maxResults=groups.length] Limits the max results brought back
   *  @apiParam {Number} [request.startIndex=0] Starting index of query
   *  @apiParamExample {Object} GetGroupsRequest
   *    {
   *      name: 'aemma',
   *      expand: true,
   *      nested: true
   *    }
   *  
   *  @apiSuccess (Users Response) {Groups[]} Returns a list of groups
   *  @apiSuccessExample {Object[]} GroupsResponse 
   *    [
   *      {
   *        name: 'hartebeest-cohort-95210146b41b9c375A',
   *        active: true,
   *        attributes: {}
   *      },
   *      {
   *        name: 'koala-team-c29b0dd79bc188fbcA',
   *        active: true,
   *        attributes: {}
   *      }
   *    ]
   */
  @convertResponse(EntityType.GROUP)
  public async getGroups(req: GetUserGroupsRequest): Promise<Groups> {
    return this.makePaginatedRequest({
      params: {
        expand: this._createExpandParam(req.expand),
        username: req.name
      },
      url: `user/group/${req.nested ? 'nested' : 'direct'}`,
      queryType: QueryTypes.GROUPS
    });
  }

  /**
   *  @api {POST} /user/group/direct user.addGroup
   *  @apiName user.addGroup
   *  @apiGroup User 
   * 
   *  @apiDescription Adds a user to group. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-addUserToGroup>[API DOCS]</a>
   *  
   *  @apiExample {javascript} Async/await
   *    await crowd.user.addGroup(AddGroupRequest)
   * 
   *  @apiParam {Object} request Object housing properties below
   *  @apiParam {String} request.name User name
   *  @apiParam {String} request.groupname Group name
   *  @apiParamExample {Object} AddGroupRequest
   *    {
   *      name: 'aemma',
   *      groupname: 'hartebeest-cohort-95210146b41b9c375A'
   *    }
   */
  public async addGroup(req: AddUserGroupRequest): Promise<void> {
    return this.request({
      method: Method.POST,
      params: { username: req.name },
      data: { name: req.groupname },
      url: 'user/group/direct'
    });
  }

  /**
   *  @api {DELETE} /user/group/direct user.removeGroup
   *  @apiName user.removeGroup
   *  @apiGroup User
   * 
   *  @apiDescription Removes user from a group. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-removeUserFromGroup>[API DOCS]</a>
   *  
   *  @apiExample {javascript} Async/await
   *    await crowd.user.removeGroup(RemoveGroupRequest)
   * 
   *  @apiParam {Object} request Object housing properties below
   *  @apiParam {String} request.name User name
   *  @apiParam {String} request.groupname Group name
   *  @apiParamExample {Object} RemoveGroupRequest
   *    {
   *      name: 'aemma',
   *      groupname: 'hartebeest-cohort-95210146b41b9c375A'
   *    }
   */
  public async removeGroup(req: RemoveUserGroupRequest): Promise<void> {
    return this.request({
      method: Method.DELETE,
      params: { 
        groupname: req.groupname,
        username: req.name
      },
      url: 'user/group/direct'
    });
  }

  /**
   *  @api {PUT} /user/password user.updatePassword
   *  @apiName user.updatePassword
   *  @apiGroup User 
   * 
   *  @apiDescription Updates user password. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-updateUserPassword>[API DOCS]</a>
   *  
   *  @apiExample {javascript} Async/await
   *    await crowd.user.updatePassword(UpdatePasswordRequest)
   * 
   *  @apiParam {Object} request Object housing properties below
   *  @apiParam {String} request.name User name
   *  @apiParam {String} request.password New password
   *  @apiParamExample {Object} UpdatePasswordRequest
   *    {
   *      name: 'aemma',
   *      password: 'newpassword'
   *    }
   */
  public async updatePassword(req: UpdateUserPasswordRequest): Promise<void> {
    return this.request({
      data: { value: req.password },
      method: Method.PUT,
      params: { username: req.name },
      url: 'user/password'
    });
  }

  /**
   *  @api {DELETE} /user/password user.removePassword
   *  @apiName user.removePassword
   *  @apiGroup User 
   * 
   *  @apiDescription Removes user password. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-deleteUserPassword>[API DOCS]</a>
   *  
   *  @apiExample {javascript} Async/await
   *    await crowd.user.removePassword(RemovePasswordRequest)
   * 
   *  @apiParam {Object} request Object housing properties below
   *  @apiParam {String} request.name User name
   *  @apiParam {String} request.password New password
   *  @apiParamExample {Object} RemovePasswordRequest 
   *    {
   *      name: 'aemma',
   *    }
   */
  public async removePassword(req: RemoveUserPasswordRequest): Promise<void> {
    return this.request({
      method: Method.DELETE,
      params: { username: req.name },
      url: 'user/password'
    });
  }

  /**
   *  @api {PUT} /user/rename user.rename
   *  @apiName user.rename
   *  @apiGroup User 
   * 
   *  @apiDescription Renames a user. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-updateUserPassword>[API DOCS]</a>
   *  
   *  @apiExample {javascript} Async/await
   *    await crowd.user.rename(RenameRequest)
   * 
   *  @apiParam {Object} request          Object housing properties below
   *  @apiParam {String} request.name     Current username
   *  @apiParam {String} request.newname  New username
   *  @apiParamExample {Object} RenameRequest
   *    {
   *      name: 'aemma',
   *      newname: 'ddolittle'
   *    }
   * 
   *  @apiUse UserResponse
   * 
   *  @apiSuccessExample {Object} UserResponseExample 
   *    {
   *      name: 'ddolittle',
   *      active: true,
   *      firstname: 'Douglas',
   *      lastname: 'Dolittle',
   *      displayname: 'Douglas Dolittle',
   *      email: 'ddolittle@test.com',
   *      key: '<key>',
   *      attributes: {},
   *      createdDate: 1586619725088,
   *      updatedDate: 1586619725088
   *    }
   */
  @convertResponse(EntityType.USER)
  public async rename(req: RenameUserRequest): Promise<User> {
    return this.request({
      data: { 'new-name': req.newname },
      params: { username: req.name },
      url: 'user/rename',
      method: Method.POST
    });
  }

  /**
   *  @api {GET} /search user.search
   *  @apiName user.search
   *  @apiGroup User
   *  
   *  @apiDescription Search for users based on CQL expression. Paginates until all results retrieved automatically. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/search-searchByCql>[API DOCS]</a>
   *  
   *  @apiExample {javascript} Async/await
   *    const users = await crowd.user.search(SearchRequest)
   *  
   *  @apiParam {Object}  request                           Object housing properties below
   *  @apiParam {Boolean} [request.expand]                  Expand users
   *  @apiParam {String}  [request.restriction]             CQL restriction expression
   *  @apiParam {Number}  [request.maxResults=users.length] Limits the max results brought back
   *  @apiParam {Number}  [request.startIndex=0]            Starting index of query
   *  @apiParamExample {Object} SearchRequest
   *    {
   *      restriction: 'active=false',
   *      expand: true,
   *    }
   *  
   *  @apiSuccess (Users Response) {User[]} Returns a list of users
   *  @apiSuccessExample {Object[]} UsersResponse
   *    [
   *      {
   *        name: 'sisabella',
   *        active: true,
   *        firstname: 'Sophia',
   *        lastname: 'Isabella',
   *        displayname: 'Sophia Isabella',
   *        email: 'sisabella@test.com',
   *        key: '<key>',
   *        attributes: {
   *          invalidPasswordAttempts: '0',
   *          passwordLastChanged: '1586132914494',
   *          requiresPasswordChange: 'false'
   *        },
   *        createdDate: 1586132914491,
   *        updatedDate: 1586132914491
   *      },
   *      {
   *        name: 'solivia',
   *        active: true,
   *        firstname: 'Sophia',
   *        lastname: 'Olivia',
   *        displayname: 'Sophia Olivia',
   *        email: 'solivia@test.com',
   *        key: '<key>',
   *        attributes: {
   *          invalidPasswordAttempts: '0',
   *          lastActive: '1586312382390',
   *          lastAuthenticated: '1586312382388',
   *          passwordLastChanged: '1586312349888',
   *          requiresPasswordChange: 'false'
   *        },
   *        createdDate: 1586221772684,
   *        updatedDate: 1586312349887
   *      }
   *    ]]
   */
  @convertResponse(EntityType.USER)
  public async search(req: SearchUsersRequest = {}): Promise<Users> {
    return this.makePaginatedRequest({
      params: {
        restriction: req.restriction,
        maxResults: req.maxResults,
        startIndex: req.startIndex,
        expand: this._createExpandParam(req.expand),
        'entity-type': EntityType.USER
      },
      url: 'search',
      queryType: QueryTypes.USERS
    });
  }

  /**
   *  @api {GET} /search user.list
   *  @apiName user.list
   *  @apiGroup User
   *  
   *  @apiDescription Search alias. List all users, full expansion by default. Paginates until all results retrieved automatically. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/user-searchByCql>[API DOCS]</a>
   *  
   *  @apiExample {javascript} Async/await
   *    const users = await crowd.user.list()
   *  
   *  @apiParam {Object} request Object housing properties below
   *  @apiParam {Boolean} [request.expand=true] Expand users
   *  
   *  @apiSuccess (Users Response) {User[]} response Returns a list of users
   *  @apiSuccessExample {User[]} UsersResponse 
   *    [
   *      {
   *        name: 'sisabella',
   *        active: true,
   *        firstname: 'Sophia',
   *        lastname: 'Isabella',
   *        displayname: 'Sophia Isabella',
   *        email: 'sisabella@test.com',
   *        key: '<key>',
   *        attributes: {
   *          invalidPasswordAttempts: '0',
   *          passwordLastChanged: '1586132914494',
   *          requiresPasswordChange: 'false'
   *        },
   *        createdDate: 1586132914491,
   *        updatedDate: 1586132914491
   *      },
   *      {
   *        name: 'solivia',
   *        active: true,
   *        firstname: 'Sophia',
   *        lastname: 'Olivia',
   *        displayname: 'Sophia Olivia',
   *        email: 'solivia@test.com',
   *        key: '<key>',
   *        attributes: {
   *          invalidPasswordAttempts: '0',
   *          lastActive: '1586312382390',
   *          lastAuthenticated: '1586312382388',
   *          passwordLastChanged: '1586312349888',
   *          requiresPasswordChange: 'false'
   *        },
   *        createdDate: 1586221772684,
   *        updatedDate: 1586312349887
   *      }
   *    ]
   */
  public async list(req: { expand?: boolean | string[]} = { expand: true }): Promise<Users> {
    return this.search(req);
  }
}