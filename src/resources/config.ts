import { ResourceClient } from './base';

export type Config = {
  domain: string
  secure: false
  name: string
}

export class ConfigClient extends ResourceClient {

  /**
   * @api {GET} /config config.get
   * @apiName config.get
   * @apiGroup Config
   * 
   * @apiDescription Returns the cookie configuration for the application. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/cookie-getConfig>[API DOCS]</a>
   * 
   * @apiExample {javascript} Async/await
   *  const config = await crowd.config.get();
   * @apiSuccess (Config Response) {Object} response Object housing properties below
   * @apiSuccess (Config Response) {String} response.domain Domain of Crowd server
   * @apiSuccess (Config Response) {Boolean} response.secure
   * @apiSuccess (Config Response) {String} response.name Cookie name
   * @apiSuccessExample {Object} ConfigResponseExample
   *  {
   *    domain: '.atlassian.com' ,
   *    secure: false,
   *    name: 'dev_crowd.token_key'
   *  }
   */
  public async get(): Promise<Config> {
    return this.request({
      url: 'config/cookie'
    });
  }
}