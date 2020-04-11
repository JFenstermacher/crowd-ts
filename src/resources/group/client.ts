import * as Parser from 'node-xml-stream';
import { ResourceClient } from '../base';
import { convertResponse, convertAttrToList } from '../../shared/utilities';
import { EntityType, Method, QueryTypes } from '../../shared/enums';

export class GroupClient extends ResourceClient {
  /**
   *  @apiDefine GroupResponse
   * 
   *  @apiSuccess (Group Response) {Object} response Response object
   *  @apiSuccess (Group Response) {String} response.name Group name
   *  @apiSuccess (Group Response) {Boolean} response.active Whether group is active
   *  @apiSuccess (Group Response) {String} response.description Group description
   *  @apiSuccess (Group Response) {Attributes} response.attributes Group attributes object
   * 
   */

  /**
   *  @api {GET} /group group.get
   *  @apiName group.get
   *  @apiGroup Group
   *  
   *  @apiDescription Retrieves group from Crowd. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-getGroup>[API DOCS]</a>
   *  
   *  @apiExample {javascript} Async/await
   *    const group = await crowd.group.get(GetGroupRequest)
   *  @apiParamExample {Object} GetGroupRequest
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
   *  @apiName create
   *  @apiGroup Group
   *  
   *  @apiDescription Creates a group. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-addGroup>[API DOCS]</a>
   *  
   *  @apiExample {javascript} Async/await
   *    const group = await crowd.group.create(CreateGroupRequest)
   *  
   *  @apiParam {Object} request Object housing below properties
   *  @apiParam {String} request.name Group name
   *  @apiParam {Boolean} [request.active] Whether group is active
   *  @apiParam {String} [request.description] Group description
   *  @apiParamExample {Object} CreateGroupRequest 
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
   *  @api {DELETE} /group group.remove
   *  @apiName group.remove
   *  @apiGroup Group
   *  
   *  @apiDescription Removes a group. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-removeGroup>[API DOCS]</a>
   *  
   *  @apiExample {javascript} Async/await
   *    await crowd.group.remove(CreateGroupRequest)
   *  
   *  @apiParam {Object} request Object housing properties below
   *  @apiParam {String} request.name Group name
   *  @apiParamExample {Object} CreateGroupRequest 
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
   *  @api {PUT} /group group.update
   *  @apiName group.update
   *  @apiGroup Group
   *  
   *  @apiDescription Updates a group. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-updateGroup>[API DOCS]</a>
   *  
   *  @apiExample {javascript} Async/await
   *    const group = await crowd.group.create(UpdateGroupRequest)
   *  
   *  @apiUse GroupResponse 
   *  
   *  @apiParam {Object} request Object housing properties below
   *  @apiParam {String} request.name Group name
   *  @apiParamExample {Object} UpdateGroupRequest 
   *    {
   *      name: 'alpaca-squad-91c4418262ebb7559A',
   *      active: true,
   *      description: 'some description',
   *    }
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
  public async update(req: UpdateGroupRequest): Promise<Group> {
    const { name, active, description } = req;

    const data: any = { name, type: 'GROUP' };

    if (active) data.active = active;
    if (description) data.description = description;

    return this.request({
      data,
      method: Method.PUT,
      params: { groupname: name },
      url: 'group'
    });
  }

  /**
   *  @api {GET} /group/attribute group.getAttributes
   *  @apiName group.getAttributes
   *  @apiGroup Group
   *  
   *  @apiDescription Gets a group's attributes. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-getGroupAttributes>[API DOCS]</a>
   *  
   *  @apiExample {javascript} Async/await
   *    const attributes = await crowd.group.getAttributes(GetAttributesRequest)
   *  
   *  @apiParam {Object} request Object housing properties below
   *  @apiParam {String} request.name Group name
   *  @apiParamExample {Object} GetAttributesRequest
   *    {
   *      name: 'alpaca-squad-91c4418262ebb7559A',
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
  public async getAttributes(req: GetGroupAttributesRequest): Promise<Attributes> {
    return this.request({
      params: { groupname: req.name },
      url: 'group/attribute'
    });
  }

  /**
   *  @api {POST} /group/attribute group.setAttributes
   *  @apiName group.setAttributes
   *  @apiGroup Group
   *  
   *  @apiDescription Sets a group's attributes. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-storeGroupAttributes>[API DOCS]</a>
   *  
   *  @apiExample {javascript} Async/await
   *    await crowd.group.setAttributes(SetAttributesRequest)
   *  
   *  @apiParam {Object} request Object housing properties below
   *  @apiParam {String} request.name Group name
   *  @apiParam {Attributes} request.attributes Object of type { [key: string]: string }
   *  @apiParamExample {Object} SetAttributesRequest
   *    {
   *      name: 'alpaca-squad-91c4418262ebb7559A',
   *      attributes: {
   *        attr1: 'test1',
   *        attr2: 'test2' 
   *      }
   *    }
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
   *  @api {DELETE} /group/attribute group.removeAttribute
   *  @apiName group.removeAttribute
   *  @apiGroup Group
   *  
   *  @apiDescription Remove a group attribute. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-deleteGroupAttribute>[API DOCS]</a>
   *  
   *  @apiExample {javascript} Async/await
   *    await crowd.group.deleteAttribute(DeleteAttributesRequest)
   *  
   *  @apiParam {Object} request Object housing properties below
   *  @apiParam {String} request.name Group name
   *  @apiParam {String} request.attribute Attribute to remove
   *  @apiParamExample {Object} DeleteAttributesRequest 
   *    {
   *      name: 'alpaca-squad-91c4418262ebb7559A',
   *      attribute: 'attr1'
   *    }
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
   *  @api {GET} /group/child-group/[direct|nested] group.getChildren
   *  @apiName group.getChildren
   *  @apiGroup Group
   *  
   *  @apiDescription Gets the child groups of a group. Paginates until all results retrieved automatically. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-getDirectChildrenOfGroup>[API DOCS]</a>
   *  
   *  @apiExample {javascript} Async/await
   *    const groups = await crowd.group.getChildren(GetChildrenRequest)
   *  
   *  @apiParam {Object} request Object housing properties below
   *  @apiParam {String} request.name Group name
   *  @apiParam {Boolean} [request.expand] Expand groups
   *  @apiParam {Boolean} [request.nested=false] Bring back nested groups, brings back direct by default
   *  @apiParam {Number} [request.maxResults=groups.length] Limits the max results brought back
   *  @apiParam {Number} [request.startIndex=0] Starting index of query
   *  @apiParamExample {Object} GetChildrenRequest
   *    {
   *      name: 'alpaca-squad-91c4418262ebb7559A',
   *      expand: true,
   *      nested: true
   *    }
   *  
   *  @apiSuccess (Groups Response) {Groups[]} Returns a list of groups
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
   *  @api {POST} /group/child-group/direct group.addChild
   *  @apiName group.addChild
   *  @apiGroup Group
   *  
   *  @apiDescription Adds a child group to a group. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-addDirectChildGroupMembership>[API DOCS]</a>
   *  
   *  @apiExample {javascript} Async/await
   *    await crowd.group.addChild(AddChildRequest)
   *  
   *  @apiParam {Object} request Object housing properties below
   *  @apiParam {String} request.name Group name
   *  @apiParam {String} request.childname Name of child group
   *  @apiParamExample {Object} AddChildRequest
   *    {
   *      name: 'alpaca-squad-91c4418262ebb7559A',
   *      childname: 'hartebeest-cohort-95210146b41b9c375A'
   *    }
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
   *  @api {DELETE} /group/child-group/direct group.removeChild
   *  @apiName group.removeChild
   *  @apiGroup Group
   * 
   *  @apiDescription Removes a child group from a group. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-removeDirectChildGroupMembership>[API DOCS]</a>
   *  
   *  @apiExample {javascript} Async/await
   *    await crowd.group.removeChild(RemoveChildRequest)
   * 
   *  @apiParam {Object} request Object housing properties below
   *  @apiParam {String} request.name Group name
   *  @apiParam {String} request.childname Name of child group
   *  @apiParamExample {Object} RemoveChildRequest
   *    {
   *      name: 'alpaca-squad-91c4418262ebb7559A',
   *      childname: 'hartebeest-cohort-95210146b41b9c375A'
   *    }
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
   *  @api {GET} /group/parent-group/[direct|nested] group.getParents
   *  @apiName group.getParents
   *  @apiGroup Group
   * 
   *  @apiDescription Gets the parent groups of a group. Paginates until all results retrieved automatically. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-getDirectParentsOfGroup>[API DOCS]</a>
   *  
   *  @apiExample {javascript} Async/await
   *    const groups = await crowd.group.getParents(GetParentsRequest)
   * 
   *  @apiParam {Object} request Object housing properties below
   *  @apiParam {String} request.name Group name
   *  @apiParam {Boolean} [request.expand] Expand groups
   *  @apiParam {Boolean} [request.nested=false] Bring back nested groups, brings back direct by default
   *  @apiParam {Number} [request.maxResults=groups.length] Limits the max results brought back
   *  @apiParam {Number} [request.startIndex=0] Starting index of query
   *  @apiParamExample {Object} GetParentsRequest
   *    {
   *      name: 'alpaca-squad-91c4418262ebb7559A',
   *      expand: true,
   *      nested: true
   *    }
   *  
   *  @apiSuccess (Groups Response) {Groups[]} Returns a list of groups
   *  @apiSuccessExample {Object[]} GroupsResponse
   *    [
   *      {
   *        name: 'whale-cohort-8208b9e1cd22b2f7aA',
   *        active: true,
   *        attributes: {}
   *      },
   *      {
   *        name: 'skunk-squad-1bab57c561676580fA',
   *        active: true,
   *        attributes: {}
   *      }
   *    ]
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
   *  @api {POST} /group/parent-group/direct group.addParent
   *  @apiName group.addParent
   *  @apiGroup Group
   * 
   *  @apiDescription Adds a parent group to a group. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-addDirectParentGroupMembership>[API DOCS]</a>
   *  
   *  @apiExample {javascript} Async/await
   *    await crowd.group.addParent(AddParentRequest)
   * 
   *  @apiParam {Object} request Object housing properties below
   *  @apiParam {String} request.name Group name
   *  @apiParam {String} request.parentname Name of child group
   *  @apiParamExample {Object} AddParentRequest
   *    {
   *      name: 'hartebeest-cohort-95210146b41b9c375A',
   *      parentname: 'alpaca-squad-91c4418262ebb7559A'
   *    }
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
   *  @api {GET} /group/user/[direct|nested] group.getUsers
   *  @apiName group.getUsers
   *  @apiGroup Group
   *  
   *  @apiDescription Gets group users. Paginates until all results retrieved automatically. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-getDirectMembersOfGroup>[API DOCS]</a>
   *  
   *  @apiExample {javascript} Async/await
   *    const users = await crowd.group.getUsers(GetUsersRequest)
   *  
   *  @apiParam {Object} request Object housing properties below
   *  @apiParam {String} request.name Group name
   *  @apiParam {String} [request.username] Returns specific user if exists
   *  @apiParam {Boolean} [request.expand] Expand users
   *  @apiParam {Boolean} [request.nested=false] Bring back nested users, brings back direct by default
   *  @apiParam {Number} [request.maxResults=groups.length] Limits the max results brought back
   *  @apiParam {Number} [request.startIndex=0] Starting index of query
   *  @apiParamExample {Object} GetUsersRequest
   *    {
   *      name: 'alpaca-squad-91c4418262ebb7559A',
   *      expand: true,
   *      nested: true
   *    }
   *  
   *  @apiSuccess (Users Response) {User|User[]} Returns either a user or list of users, depends on if username was passed
   *  @apiSuccessExample {Object[]} GroupsResponse
   *    [  
   *       {
   *         name: 'aemma',
   *         active: true,
   *         'first-name': 'Abigail',
   *         'last-name': 'Emma',
   *         'display-name': 'Abigail Emma',
   *         email: 'aemma@test.com',
   *         key: '<key>',
   *         attributes: {},
   *         'created-date': 1586223686277,
   *         'updated-date': 1586482147883
   *       },
   *       {
   *         name: 'ajacob',
   *         active: true,
   *         'first-name': 'Alexander',
   *         'last-name': 'Jacob',
   *         'display-name': 'Alexander Jacob',
   *         email: 'ajacob@test.com',
   *         key: '<key>',
   *         attributes: {},
   *         'created-date': 1586132987812,
   *         'updated-date': 1586132987812
   *       }
   *    ] 
   */
  @convertResponse(EntityType.USER)
  public async getUsers(req: GetGroupUsersRequest): Promise<Users> {
    const { username } = req;
    const url = `group/user/${req.nested ? 'nested': 'direct'}`;

    const params = {
      groupname: req.name,
      expand: this._createExpandParam(req.expand),
      username: username ? username : undefined
    };

    return username ? this.request({ params, url }) : this.makePaginatedRequest({
      queryType: QueryTypes.USERS,
      params: {
        maxResults: req.maxResults,
        startIndex: req.startIndex,
        ...params
      },
      url: url
    });
  }

  /**
   *  @api {POST} /group/user/direct group.addUser
   *  @apiName group.addUser
   *  @apiGroup Group
   * 
   *  @apiDescription Adds a user to group. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-addUserAsDirectGroupMember>[API DOCS]</a>
   *  
   *  @apiExample {javascript} Async/await
   *    await crowd.group.addUser(AddUserRequest)
   * 
   *  @apiParam {Object} request Object housing properties below
   *  @apiParam {String} request.name Group name
   *  @apiParam {String} request.username User name
   *  @apiParamExample {Object} AddUserRequest
   *    {
   *      name: 'hartebeest-cohort-95210146b41b9c375A',
   *      username: 'aemma'
   *    }
   */
  public async addUser(req: AddUserToGroupRequest): Promise<void> {
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
   *  @api {DELETE} /group/user/direct group.removeUser
   *  @apiName group.removeUser
   *  @apiGroup Group
   * 
   *  @apiDescription Remove user from group. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-removeDirectGroupMembership>[API DOCS]</a>
   *  
   *  @apiExample {javascript} Async/await
   *    await crowd.group.removeUser(RemoveUserRequest)
   * 
   *  @apiParam {Object} request Object housing properties below
   *  @apiParam {String} request.name Group name
   *  @apiParam {String} request.username User name
   *  @apiParamExample {Object} RemoveUserRequest
   *    {
   *      name: 'alpaca-squad-91c4418262ebb7559A',
   *      username: 'aemma'
   *    }
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
   *  @api {GET} /group/membership group.getMemberships
   *  @apiName group.getMemberships
   *  @apiGroup Group
   * 
   *  @apiDescription Gets all group memberships. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-removeDirectGroupMembership>[API DOCS]</a>
   *  
   *  @apiExample {javascript} Async/await
   *    const memberships = await crowd.group.getMemberships()
   *  
   *  @apiSuccess (Memberships Response) {Memberships} Returns memberships in form { [groupname: string]: { users: string[], groups: string[] } }
   *  @apiSuccessExample {Object} MembershipResponse 
   *    { 
   *      'alpaca-squad-91c4418262ebb7559A': {
   *        users: [
   *          'aemma'
   *        ],
   *        groups: [
   *          'hartebeest-cohort-95210146b41b9c375A',
   *          'koala-team-c29b0dd79bc188fbcA',
   *        ]
   *      },
   *      'gnu-cohort-6fc32ad92454394faA': { 
   *        users: [],
   *        groups: [ 
   *          'alpaca-squad-91c4418262ebb7559A'
   *        ]
   *      }
   *    }
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