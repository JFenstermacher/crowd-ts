import { ResourceClient } from '../base';

export class ConfigClient extends ResourceClient {
  public async getConfig(): Promise<Config> {
    return this.request({
      url: 'config/cookie'
    });
  }
}