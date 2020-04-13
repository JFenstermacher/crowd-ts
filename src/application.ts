import { ConfigClient, GroupClient, SessionClient, UserClient, } from './resources';
import axios, { AxiosInstance, AxiosRequestConfig }  from 'axios';
import pQueue from 'p-queue';

export interface CrowdConfig extends AxiosRequestConfig {
  concurrency?: number,
  debug?: boolean
}

export type Attributes = {
  [key: string]: string
}

export interface PaginatedRequest {
  expand?: boolean | string[]
  maxResults?: number
  startIndex?: number
}

export class CrowdApplication {
  public instance: AxiosInstance;
  public queue: pQueue;

  public config: ConfigClient;
  public group: GroupClient;
  public session: SessionClient;
  public user: UserClient;

  constructor(apiConfig: CrowdConfig) {
    const { baseURL = '', concurrency, debug = false, ...config } = apiConfig;

    this.queue = new pQueue(concurrency ? { concurrency } : {});
    this.instance = axios.create({
      baseURL: this._getBaseUrl(baseURL),
      ...config
    });

    this.config = new ConfigClient(this);
    this.group = new GroupClient(this);
    this.session = new SessionClient(this);
    this.user = new UserClient(this);
  }

  public async request(params: AxiosRequestConfig) {
    const { data } = await this.queue.add(() => this.instance.request(params) );

    return data;
  }

  private _getBaseUrl(url: string) {
    return `${url.match(/^(https|http):\/\//) ? url : `https://${url}`}/rest/usermanagement/1`;
  }
}