import { ResourceClient } from './base';
import { convertResponse, convertValidationFactors } from '../shared/utilities';
import { EntityType, Method } from '../shared/enums';

import { User } from '..';

export type Session = {
  token: string
  user: User
  createdDate: number 
  expiryDate: number 
}

export type ValidationFactors = {
  [key: string]: string
}

export interface AuthenticateUserSessionRequest {
  name: string
  password: string
  validationFactors?: ValidationFactors
  validate?: boolean
  duration?: number
  expand?: boolean
}

export interface RemoveAllSessionsRequest {
  name: string
  exclude?: string
}

export interface GetTokenRequest {
  name: string
  password: string
  validate?: boolean
  duration?: string
}

export interface InvalidateTokenRequest {
  token: string
}

export interface ValidateTokenRequest {
  token: string
  validationFactors: ValidationFactors
}

export interface GetSessionRequest {
  token: string
  expand?: boolean
}
export class SessionClient extends ResourceClient {
  /**
   *  @apiDefine SessionResponse
   *  
   *  @apiSuccess (Session Response) {Object} response Response object
   *  @apiSuccess (Session Response) {String} response.token Token string
   *  @apiSuccess (Session Response) {Number} response.created-date Token creation timestamp
   *  @apiSuccess (Session Response) {Number} response.expiry-date Token expiration timestamp
   *  @apiSuccess (Session Response) {User} response.user [Expandable] User object
   * 
   */

  /**
   *  @api {POST} /session session.create
   *  @apiName session.create
   *  @apiGroup Session
   * 
   *  @apiDescription Allows you to create session token for user. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/session-authenticateUser>[API DOCS]</a>
   *  
   *  @apiExample {javascript} Async/await
   *    const session = await crowd.session.create(CreateSessionRequest)
   *  @apiParamExample {Object} CreateSessionRequest
   *    {
   *      name: 'testuser',
   *      password: 'testpassword',
   *      validationFactors: {
   *        remote_address: '127.0.0.1'
   *      }
   *    }
   * 
   *  @apiUse SessionResponse
   * 
   *  @apiParam {Object} request Object housing below properties
   *  @apiParam {String} request.name User name 
   *  @apiParam {String} request.password User password
   *  @apiParam {Object} [request.validationFactors] Factors to validate application user against
   *  @apiParam {Boolean} [request.validate] Whether to validate user password
   *  @apiParam {Number} [request.duration] The duration in seconds that token is valid
   *  @apiParam {Boolean} [request.expand=false] Expands user object in response
   *  
   *  @apiSuccessExample {Object} SessionResponseExample
   *   {
   *     token: '<token_string>',
   *     user: {
   *       name: 'aemma',
   *       active: true,
   *       firstName: 'Abigail',
   *       lastName: 'Emma',
   *       displayName: 'Abigail Emma',
   *       email: 'aemma@test.com',
   *       key: '<key_string>',
   *       attributes: {},
   *       createdDate: 1586223686277,
   *       updatedDate: 1586482147883
   *     },
   *     'created-date': 1586475704136,
   *     'expiry-date': 1586510947886
   *   }
   */
  @convertResponse(EntityType.SESSION)
  public async create(req: AuthenticateUserSessionRequest): Promise<Session> {
    const data: any = {
      username: req.name,
      password: req.password
    };

    if (req.validationFactors) {
      data['validation-factors'] = convertValidationFactors(req.validationFactors);
    }

    return this.request({
      data: data,
      params: {
        expand: req.expand ? 'user' : undefined,
        'validate-password': req.validate,
        duration: req.duration
      },
      method: Method.POST,
      url: 'session'
    })
  }

  /**
   *  @api {DELETE} /session session.removeAll
   *  @apiName session.removeAll
   *  @apiGroup Session
   *  
   *  @apiDescription Remove all session tokens associated with user, unless exclusion given. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/session-invalidateToken>[API DOCS]</a>
   *   
   *  @apiExample {javascript} Async/await
   *   const session = await crowd.session.removeAll(RemoveAlTokenRequest)
   *  @apiParamExample {Object} RemoveAllTokensRequest
   *    {
   *      name: 'testuser'
   *    }
   *  
   *  @apiParam {Object} request [Required] Object housing below properties
   *  @apiParam {String} request.name [Required] Username
   *  @apiParam {String} [request.exclude] Excluded token string
   */
  public async removeAll(req: RemoveAllSessionsRequest): Promise<void> {
    return this.request({
      params: {
        exclude: req.exclude,
        username: req.name 
      },
      method: Method.DELETE,
      url: 'session'
    });
  }

  /**
   *  @api {DELETE} /session/{token} session.remove
   *  @apiName session.remove
   *  @apiGroup Session
   *  
   *  @apiDescription Remove all a session token associated with user. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/session-deleteTokensForUser>[API DOCS]</a>
   *   
   *  @apiExample {javascript} Async/await
   *   const session = await crowd.session.remove(RemoveTokenRequest)
   *  @apiParamExample {Object} RemoveTokenRequest
   *    {
   *      token: '<some_token_string>'
   *    }
   *  
   *  @apiParam {Object} request Object housing below properties
   *  @apiParam {String} request.token Token string
   */
  public async remove(req: InvalidateTokenRequest) {
    return this.request({
      method: Method.DELETE,
      url: `session/${req.token}`,
    });
  }

  /**
   *  @api {POST} /session/{token} session.validate
   *  @apiName session.validate
   *  @apiGroup Session
   *  
   *  @apiDescription Validates a user token. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/session-validateToken>[API DOCS]</a>
   * 
   *  <span style="color: red;">NOTE: This method is not working currently</span>
   *   
   *  @apiExample {javascript} Async/await
   *   const session = await crowd.session.remove(ValidateSessionRequest)
   *  @apiParamExample {Object} ValidateSessionRequest
   *    {
   *      name: '<token_string>',
   *      validationFactors: {
   *        remote_address: '127.0.0.1'
   *      }
   *    }
   *  
   *  @apiParam {Object} request Object housing below properties
   *  @apiParam {String} request.token Token string
   *  @apiParam {Object} [request.validationFactors] Factors to validate user token against
   */
  @convertResponse(EntityType.SESSION)
  public async validate(req: ValidateTokenRequest): Promise<Session> {
    
    return this.request({
      method: Method.POST,
      headers: { 'Content-Type': 'application/xml'},
      url: `session/${req.token}`
    });
  }

  /**
   *  @api {GET} /session/{token} session.get
   *  @apiName session.get
   *  @apiGroup Session
   *  
   *  @apiDescription Gets a user session. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/session-getSession>[API DOCS]</a>
   *  
   *  Return values listed with [Depends] are dependent on whether you include the expand attribute in request object
   *   
   *  @apiExample {javascript} Async/await
   *   const session = await crowd.session.get(GetUserSessionRequest)
   *  @apiParamExample {Object} GetUserSessionRequest 
   *    {
   *      token: '<token_string>',
   *      expand: true
   *    }
   *  
   *  @apiUse SessionResponse
   * 
   *  @apiParam {Object} request Object housing below properties
   *  @apiParam {String} request.token Token of user
   *  @apiParam {Boolean} [request.expand=false] Expands user object
   *  
   *  @apiSuccessExample {Object} SessionResponseExample
   *   {
   *     token: '<token_string>',
   *     user: {
   *       name: 'aemma',
   *       active: true,
   *       firstName: 'Abigail',
   *       lastName: 'Emma',
   *       displayName: 'Abigail Emma',
   *       email: 'aemma@test.com',
   *       key: '<key_string>',
   *       attributes: {}
   *     },
   *     createdDate: 1586475704136,
   *     expiryDate: 1586510947886
   *   }
   */
  @convertResponse(EntityType.SESSION)
  public async get(req: GetSessionRequest): Promise<Session> {
    return this.request({
      params: { expand: req.expand ? 'user' : undefined },
      url: `session/${req.token}`
    });
  }
}