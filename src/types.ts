type Users = User[];
type User = {
  name: string
  active: boolean
  'first-name': string
  'last-name': string
  'display-name': string
  email: string
  key?: string
  attributes?: Attributes
  'created-date'?: string
  'updated-date'?: string
}

type Groups = Group[];
type Group = {
  name: string
  active?: boolean
  description?: string
  attributes?: Attributes
}

type Attributes = {
  [key: string]: string
}

type Token = {
  token: string
  user: { name: string } 
  'created-date': string
  'expiry-date': string
}

type Config = {
  domain: string
  secure: false
  name: string
}

type Memberships = {
  [groupname: string]: Membership
}

type Membership = {
  users: string[]
  groups: string[]
}

interface PaginatedRequest {
  expand?: boolean | string[]
  maxResults?: number
  startIndex?: number
}

interface GetGroupRequest {
  name: string
  expand?: boolean
}

interface AddGroupRequest {
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

interface UpdateUserAttributesRequest {
  name: string
  attributes: Attributes
}

interface RemoveGroupAttributeRequest {
  name: string
  attributename: string
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

interface removeGroupFromUserRequest {
  name: string
  username: string
}

interface GetUserRequestWithKey {
  key: string
  expand?: boolean
}

interface GetUserRequestWithUsername {
  name: string
  expand?: boolean 
}

interface AuthenticateUserRequest {
  name: string
  password: string
}

type GetUserRequest = GetUserRequestWithKey | GetUserRequestWithUsername

interface AddUserRequest extends User {
  password: string
}

interface UpdateUserRequest {
  name: string
  active?: boolean
  'first-name'?: string
  'last-name'?: string
  'display-name'?: string
  email?: string
}

interface RemoveUserRequest {
  name: string
}

interface GetUserAttributesRequest {
  name: string
}

interface UpdateUserAttributesRequest {
  name: string,
  attributes: Attributes
}

interface RemoveUserAttributeRequest {
  name: string,
  attributename: string
}

interface GetUserGroups extends PaginatedRequest {
  name: string
  nested?: boolean
  expand?: boolean
}

interface UpdateUserPasswordRequest {
  name: string
  password: string
}

interface RemoveUserPasswordRequest {
  name: string
}

interface RenameUserRequest {
  name: string
  newname: string
}

interface DeleteUserTokenRequest {
  name: string
  exclude?: string
}

interface InvalidateUserTokenRequest {
  token: string
}

interface ValidateTokenRequest {
  token: string
}

interface GetSessionRequest {
  token: string
}

interface SearchUsersRequest extends PaginatedRequest {
  restriction?: string
  expand?: boolean | string[] 
}

interface SearchGroupsRequest extends PaginatedRequest {
  restriction?: string
  expand?: boolean | string[]
}

declare module 'node-xml-stream'