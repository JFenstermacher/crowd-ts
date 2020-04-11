import { ResourceClient } from '../base';

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
   * @apiSuccess (Config Response) {String} domain
   * @apiSuccess (Config Response) {Boolean} secure
   * @apiSuccess (Config Response) {String} name
   */
  public async get(): Promise<Config> {
    return this.request({
      url: 'config/cookie'
    });
  }
}