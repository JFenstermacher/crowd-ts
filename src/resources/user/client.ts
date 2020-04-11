import { ResourceClient } from '../base';
import { convertResponse, convertAttrToList } from '../../shared/utilities';
import { EntityType, Method, QueryTypes } from '../../shared/enums';

export class UserClient extends ResourceClient {

  /**
   *  @apiDefine UserResponse
   *  
   *  @apiSuccess (User Response) {User}    response              Object that houses below properties
   *  @apiSuccess (User Response) {String}  response.name         Username
   *  @apiSuccess (User Response) {Boolean} response.active       Whether user is active
   *  @apiSuccess (User Response) {String}  response.first-name   User first name
   *  @apiSuccess (User Response) {String}  response.last-name    User last name 
   *  @apiSuccess (User Response) {String}  response.display-name User display name 
   *  @apiSuccess (User Response) {String}  response.email        User email
   *  @apiSuccess (User Response) {String}  response.key          User key
   *  @apiSuccess (User Response) {Object}  response.attributes   Empty object
   */

   /**
   * Authenticates user, and returns user
   * 
   * @param {object} req 
   * @param {string} req.name
   * @param {string} req.password
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
   *      'first-name': 'Abigail',
   *      'last-name': 'Emma',
   *      'display-name': 'Abigail Emma',
   *      email: 'aemma@test.com',
   *      key: '<key>',
   *      attributes: {
   *        invalidPasswordAttempts: '0',
   *        lastActive: '1586482147886',
   *        lastAuthenticated: '1586482147882',
   *        passwordLastChanged: '1586223686282',
   *        requiresPasswordChange: 'false'
   *      },
   *      'created-date': 1586223686277,
   *      'updated-date': 1586482147883
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
   * Creates a user, all attributr
   * 
   * @param {object} req 
   * @param {string} req.name
   * @param {boolean} req.active
   * @param {string} req['first-name']
   * @param {string} req['last-name']
   * @param {string} req.email
   * @param {string} password
   */
  @convertResponse(EntityType.USER)
  public async create(req: CreateUserRequest): Promise<User> {
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

  /**
   * Updates a user
   * 
   * @param {object} req
   * @param {string} req.name
   * @param {boolean} req.active
   * @param {string} req['first-name']
   * @param {string} req['last-name']
   * @param {string} req.email
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
   * Removes a user 
   * 
   * @param req 
   * @param req.name
   */
  public async remove(req: RemoveUserRequest): Promise<void> {
    return this.request({
      method: Method.DELETE,
      params: { username: req.name },
      url: 'user'
    });
  }
  
  /**
   * Request a users attributes 
   * 
   * @param {object} req
   * @param {string} req.name
   */
  @convertResponse(EntityType.ATTRIBUTES)
  public async getAttributes(req: GetUserAttributesRequest): Promise<Attributes> {
    return this.request({
      params: { username: req.name },
      url: 'user/attribute'
    });
  }

  /**
   * Takes attributes as { [key: string]: string } object, and sets user attributes
   * 
   * @param {object} req 
   * @param {string} req.name
   * @param {object} req.attributes
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
   * Removes a users attribute
   * 
   * @param {object} req 
   * @param {string} req.name
   * @param {string} req.attribute
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
   * Get user groups
   * 
   * @param {object} req
   * @param {string} req.name
   * @param {string} req.nested
   * @param {boolean|string} req.expand
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
   * Adds group to user
   * 
   * @param {object} req
   * @param {string} req.name
   * @param {string} req.groupname
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
   * Remove group from user
   * 
   * @param {object} req 
   * @param {string} req.name
   * @param {string} req.groupname
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
   * Updates a user password
   * 
   * @param {object} req
   * @param {string} req.name
   * @param {string} req.password
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
   * Remove user password
   * 
   * @param {object} req 
   * @param {string} req.name
   */
  public async removePassword(req: RemoveUserPasswordRequest): Promise<void> {
    return this.request({
      method: Method.DELETE,
      params: { username: req.name },
      url: 'user/password'
    });
  }

  /**
   * Rename a user 
   * 
   * @param {object} req
   * @param {string} req.name
   * @param {string} req.newname
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
   * Search for users
   * 
   * @param {object} req
   * @param {string} req.restriction CQL restriction string
   * @param {string|boolean[]} req.expand
   * @param {number} req.maxResults
   * @param {number} req.startIndex
   */
  @convertResponse(EntityType.USER)
  public async search(req: SearchUsersRequest = {}): Promise<Users> {
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

  /**
   * An alias for search without the additional parameters
   * 
   * @param {object} req 
   * @param {boolean|string[]} req.expand
   */
  public async list(req: { expand?: boolean | string[]} = {}): Promise<Users> {
    return this.search(req);
  }
}