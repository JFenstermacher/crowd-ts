type Users = User[];
type User = {
  name: string
  active?: boolean
  firstName?: string
  lastName?: string
  displayName?: string
  email?: string
  key?: string
  password?: string
  attributes?: Attributes
  createdDate?: string
  updatedDate?: string
}

interface AuthenticateUserRequest {
  name: string
  password: string
}

interface GetUserRequestWithKey {
  key: string
  expand?: boolean
}

interface GetUserRequestWithName {
  name: string
  expand?: boolean 
}

type GetUserRequest = GetUserRequestWithKey | GetUserRequestWithName

interface CreateUserRequest {
  name: string
  active: boolean
  firstName: string
  lastName: string
  displayName: string
  email: string
  password: string
}

interface UpdateUserRequest {
  name: string
  active?: boolean
  firstName?: string
  lastName?: string
  displayName?: string
  email?: string
}

interface RemoveUserRequest {
  name: string
}

interface GetUserAttributesRequest {
  name: string
}

interface SetUserAttributesRequest {
  name: string,
  attributes: Attributes
}

interface RemoveUserAttributeRequest {
  name: string,
  attribute: string
}

interface GetUserGroupsRequest extends PaginatedRequest {
  name: string
  nested?: boolean
  expand?: boolean | string[]
}

interface AddUserGroupRequest {
  name: string
  groupname: string
}

interface RemoveUserGroupRequest {
  name: string
  groupname: string
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
  newName: string
}

interface SearchUsersRequest extends PaginatedRequest {
  restriction?: string
  expand?: boolean | string[] 
}