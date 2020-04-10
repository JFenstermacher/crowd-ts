import * as Parser from 'node-xml-stream';
import { ResourceClient } from '../base';
import { convertResponse, convertAttrToList } from '../../shared/utilities';
import { EntityType, Method, QueryTypes } from '../../shared/enums';

export class GroupClient extends ResourceClient {
  /**
   *  @apiDefine SmallestGroupResponse 
   *  
   *  @apiSuccess (Group Response) {Object} response Response object
   *  @apiSuccess (Group Response) {String} response.name Group name
   */

  /**
   * 
   * @apiDefine GroupResponse
   * 
   *  @apiSuccess (Group Response) {Object} response Response object
   *  @apiSuccess (Group Response) {String} response.name Group name
   *  @apiSuccess (Group Response) {Boolean} response.active Whether group is active
   *  @apiSuccess (Group Response) {String} response.description Group description
   *  @apiSuccess (Group Response) {Attributes} response.attributes Group attributes object
   */

  /**
   *  @api {GET} /group group.get
   *  @apiName group.get
   *  @apiGroup Group
   * 
   *  @apiDescription Retrieves group from Crowd. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-getGroup>[API DOCS]</a>
   *  
   *  @apiExample {javascript} Async/await
   *    const session = await crowd.group.get(getGroupRequest)
   *  @apiParamExample {Object} getGroupRequest
   *    {
   *      name: 'alpaca-squad-91c4418262ebb7559A',
   *      expand: true
   *    }
   * 
   *  @apiUse GroupResponse 
   * 
   *  @apiParam {Object} request Object housing below properties
   *  @apiParam {String} request.name Group name
   *  @apiParam {Boolean} [request.expand=false] Expand attributes of group
   *  
   *  @apiSuccessExample {Object} GroupResponseExample 
   *    {
   *      name: 'alpaca-squad-91c4418262ebb7559A',
   *      active: false,
   *      description: 'some description',
   *      attributes: { test: 'test' }
   *    }
   */
  @convertResponse(EntityType.GROUP)
  public async get(req: GetGroupRequest): Promise<Group> {
    return this.request({
      params: {
        groupname: req.name,
        expand: req.expand ? 'attributes' : undefined,
      },
      url: 'group'
    });
  }

  /**
   *  @api {POST} /group group.create
   *  @apiName group.create
   *  @apiGroup Group
   * 
   *  @apiDescription Creates a group. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-addGroup>[API DOCS]</a>
   *  
   *  @apiExample {javascript} Async/await
   *    const session = await crowd.group.create(createGroupRequest)
   * 
   *  @apiParam {Object} request Object housing below properties
   *  @apiParam {String} request.name Group name
   *  @apiParam {Boolean} [request.active] Whether group is active
   *  @apiParam {String} [request.description] Group description
   *  @apiParamExample {Object} createGroupRequest 
   *    {
   *      name: 'alpaca-squad-91c4418262ebb7559A',
   *      active: true,
   *      description: 'some description',
   *      expand: true
   *    }
   * 
   *  @apiUse GroupResponse 
   *  
   *  @apiSuccessExample {Object} GroupResponseExample 
   *    {
   *      name: 'alpaca-squad-91c4418262ebb7559A',
   *      active: false,
   *      description: 'some description',
   *      attributes: {}
   *    }
   */
  @convertResponse(EntityType.GROUP)
  public async create(req: CreateGroupRequest): Promise<Group> {
    return this.request({
      data: {
        ...req,
        type: "GROUP"
      },
      method: Method.POST,
      url: 'group'
    });
  }

  /**
   *  @api {POST} /group group.remove
   *  @apiName group.create
   *  @apiGroup Group
   * 
   *  @apiDescription Removes a group. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-addGroup>[API DOCS]</a>
   *  
   *  @apiExample {javascript} Async/await
   *    const session = await crowd.group.remove(createGroupRequest)
   * 
   *  @apiParam {Object} request Object housing properties below
   *  @apiParam {String} request.name Group name
   *  @apiParamExample {Object} createGroupRequest 
   *    {
   *      name: 'alpaca-squad-91c4418262ebb7559A',
   *    }
   */
  public async remove(req: RemoveGroupRequest): Promise<void> {
    return this.request({
      method: Method.DELETE,
      params: { groupname: req.name },
      url: 'group'
    });
  }

  /**
   *  @api {POST} /group group.create
   *  @apiName group.create
   *  @apiGroup Group
   * 
   *  @apiDescription Creates a group. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-addGroup>[API DOCS]</a>
   *  
   *  @apiExample {javascript} Async/await
   *    const session = await crowd.group.create(createGroupRequest)
   * 
   *  @apiParam {Object} request Object housing properties below
   *  @apiParam {String} request.name Group name
   *  @apiParamExample {Object} createGroupRequest 
   *    {
   *      name: 'alpaca-squad-91c4418262ebb7559A',
   *      active: true,
   *      description: 'some description',
   *      expand: true
   *    }
   */
  @convertResponse(EntityType.GROUP)
  public async update(req: UpdateGroupRequest): Promise<Group> {
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

  /**
   * Get group attributes
   * 
   * @param {object} req
   * @param {string} req.name
   */
  @convertResponse(EntityType.ATTRIBUTES)
  public async getAttributes(req: GetGroupAttributesRequest): Promise<Attributes> {
    return this.request({
      params: { groupname: req.name },
      url: 'group/attribute'
    });
  }

  /**
   * Set group attributes
   * 
   * @param {object} req
   * @param {string} req.name
   * @param {object} req.attributes
   */
  public async setAttributes(req: SetGroupAttributesRequest): Promise<void> {
    return this.request({
      data: {
        attributes: convertAttrToList(req.attributes)
      },
      method: Method.POST,
      params: { groupname: req.name },
      url: 'group/attribute'
    });
  }

  /**
   * Remove group attribute
   * 
   * @param {object} req 
   * @param {string} req.name
   * @param {string} req.attribute
   */
  public async removeAttribute(req: RemoveGroupAttributeRequest): Promise<void> {
    return this.request({
      method: Method.DELETE,
      params: { 
        attributename: req.attribute,
        groupname: req.name
      },
      url: 'group/attribute'
    });
  }

  /**
   * Get group children
   * 
   * @param {object} req
   * @param {string} req.name
   * @param {number} req.maxResults
   * @param {number} req.startIndex
   */
  @convertResponse(EntityType.GROUP)
  public async getChildren(req: GetGroupChildrenRequest): Promise<Groups> {
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

  /**
   * Add group child 
   * 
   * @param {object} req
   * @param {string} req.name
   * @param {string} req.childname
   */
  public async addChild(req: AddGroupChildRequest): Promise<void> {
    return this.request({
      data: { name: req.childname },
      params: { groupname: req.name },
      url: 'group/child-group/direct',
      method: Method.POST,
    });
  }

  /**
   * Remove a child group
   * 
   * @param {object} req
   * @param {string} req.name
   * @param {string} req.childname
   */
  public async removeChild(req: RemoveGroupChildRequest): Promise<void> {
    return this.request({
      params: { 
        'child-groupname': req.childname,
        groupname: req.name
      },
      url: 'group/child-group/direct',
      method: Method.DELETE
    });
  }
  /**
   * Get parent groups
   * 
   * @param {object} req 
   * @param {string} req.name
   * @param {string} req.parentname
   * @param {number} req.maxResults
   * @param {number} req.startIndex
   */
  @convertResponse(EntityType.GROUP)
  public async getParents(req: GetGroupParentsRequest): Promise<Groups> {
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

  /**
   * Add a parent group
   * 
   * @param {object} req 
   * @param {string} req.name
   * @param {string} req.parentname
   */
  public async addParent(req: AddGroupParentRequest): Promise<void> {
    return this.request({
      data: { name: req.parentname },
      params: { groupname: req.name },
      url: 'group/parent-group/direct',
      method: Method.POST
    });
  }

  /**
   * Get users of group
   * 
   * @param {object} req 
   * @param {string} req.name
   * @param {string} req.username
   * @param {boolean} req.nested Return users from nested groups
   */
  @convertResponse(EntityType.USER)
  public async getUsers(req: GetGroupUsersRequest): Promise<Users> {
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

  /**
   * Add user to group
   * 
   * @param {object} req
   * @param {string} req.name
   * @param {string} req.username
   */
  public async addUser(req: AddUserToGroupRequest) {
    return this.request({
      data: { name: req.username },
      params: {
        groupname: req.name,
      },
      url: 'group/user/direct',
      method: Method.POST
    });
  }

  /**
   * Remove user from group
   * 
   * @param {object} req 
   * @param {string} req.name
   * @param {string} req.username
   */
  public async removeUser(req: RemoveGroupFromUserRequest): Promise<void> {
    return this.request({
      params: {
        groupname: req.name,
        username: req.username
      },
      url: 'group/user/direct',
      method: Method.DELETE
    });
  }

  /**
   * Returns all memberships
   */
  public async getMemberships(): Promise<Memberships> {
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

  /**
   * Returns groups based on search restriction 
   * Pass CQL expression to restriciton, if none is passed all will be returned
   * 
   * @param {object} req
   * @param {string} req.restriction
   * @param {boolean|string[]} req.expand
   * @param {number} req.maxResults
   * @param {number} req.startIndex
   */
  @convertResponse(EntityType.GROUP)
  public async search(req: SearchGroupsRequest = {}): Promise<Groups> {
    return this.makePaginatedRequest<Group>({
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

  /**
   * Alias for search without the additional params
   * 
   * @param {object} req 
   * @param {boolean|string[]} req.expand
   */
  public async list(req: { expand?: boolean | string[] } = {}): Promise<Groups> {
    return this.search(req);
  }
}