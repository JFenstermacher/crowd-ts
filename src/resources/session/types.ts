type Session = {
  token: string
  user: { name: string } 
  'created-date': string
  'expiry-date': string
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
}