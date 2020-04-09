import { ResourceClient } from '../base';
import { convertResponse, convertValidationFactors } from '../../shared/utilities';
import { EntityType, Method } from '../../shared/enums';

export class SessionClient extends ResourceClient {
  /**
   * Creates a user session
   * 
   * @param {object} req 
   * @param
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
        'validate-password': req.validate,
        duration: req.duration
      },
      method: Method.POST,
      url: 'session'
    })
  }

  /**
   * Removes all session tokens associated with user
   * 
   * @param {object} req 
   * @param {string} req.name Username
   * @param {string} req.exclude Exclude a token from being removed
   */
  public async removeAll(req: RemoveAllSessionsRequest) {
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
   * Invalidate/remove a single token 
   * 
   * @param {object} req 
   * @param {string} req.token
   */
  public async remove(req: InvalidateTokenRequest) {
    return this.request({
      method: Method.DELETE,
      url: `session/${req.token}`,
    });
  }

  /**
   * Validates a current token based on validation factors
   * 
   * NOTE: This endpoint is broken, not sure how to fix right now.
   * @param {object} req
   * @param {string} req.token
   * @param {object} req.validationFactors Takes a { [key: string]: string } object
   */
  // @convertResponse(EntityType.SESSION)
  // public async validate(req: ValidateTokenRequest): Promise<Session> {
    
  //   return this.request({
  //     method: Method.POST,
  //     headers: { 'Content-Type': 'application/xml'},
  //     url: `session/${req.token}`
  //   });
  // }

  /**
   * Get a user associated with current session
   * 
   * @param {object} req 
   * @param {string} req.token
   */
  @convertResponse(EntityType.SESSION)
  public async get(req: GetSessionRequest): Promise<Session> {
    return this.request({
      url: `session/${req.token}`
    });
  }
}