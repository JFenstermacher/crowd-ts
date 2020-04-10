type Session = {
  token: string
  user: User
  'created-date': number 
  'expiry-date': number 
}

type ValidationFactors = {
  [key: string]: string
}

interface AuthenticateUserSessionRequest {
  name: string
  password: string
  validationFactors?: ValidationFactors
  validate?: boolean
  duration?: number
  expand?: boolean
}

interface RemoveAllSessionsRequest {
  name: string
  exclude?: string
}

interface GetTokenRequest {
  name: string
  password: string
  validate?: boolean
  duration?: string
}

interface InvalidateTokenRequest {
  token: string
}

interface ValidateTokenRequest {
  token: string
  validationFactors: ValidationFactors
}

interface GetSessionRequest {
  token: string
  expand?: boolean
}