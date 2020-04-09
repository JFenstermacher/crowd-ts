type Groups = Group[];
type Group = {
  name: string
  active?: boolean
  description?: string
  attributes?: Attributes
}

type Memberships = {
  [groupname: string]: Membership
}

type Membership = {
  users: string[]
  groups: string[]
}

interface GetGroupRequest {
  name: string
  expand?: boolean
}

interface CreateGroupRequest {
  name: string
  active?: boolean
  description?: string
}

interface UpdateGroupRequest {
  name: string
  active?: boolean
  description?: string
}

interface RemoveGroupRequest {
  name: string
}

interface GetGroupAttributesRequest {
  name: string
}

interface SetGroupAttributesRequest {
  name: string
  attributes: Attributes
}

interface RemoveGroupAttributeRequest {
  name: string
  attribute: string
}

interface GetGroupChildrenRequest extends PaginatedRequest {
  name: string
  nested?: boolean
}

interface AddGroupChildRequest {
  name: string
  childname: string
}

interface RemoveGroupChildRequest {
  name: string
  childname: string
}

interface GetGroupParentsRequest extends PaginatedRequest {
  name: string
  nested?: boolean
}

interface AddGroupParentRequest {
  name: string
  parentname: string
}

interface GetGroupUsersRequest extends PaginatedRequest {
  name: string
  username?: string
  nested?: boolean
}

interface AddUserToGroupRequest {
  name: string
  username: string
}

interface RemoveGroupFromUserRequest {
  name: string
  username: string
}

interface SearchGroupsRequest extends PaginatedRequest {
  restriction?: string
  expand?: boolean | string[]
}