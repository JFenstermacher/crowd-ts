import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
import pQueue from 'p-queue';

export interface ApiConfig extends AxiosRequestConfig {
  concurrency?: number,
  retries?: number
}

export enum Method {
  GET = 'GET',
  DELETE = 'DELETE',
  POST = 'POST',
  PUT = 'PUT',
}

export class Api {
  public instance: AxiosInstance;
  public queue: pQueue;

  constructor(apiConfig: ApiConfig) {
    const { concurrency = 10, ...config } = apiConfig;

    this.instance = axios.create(config);
    this.queue = new pQueue({ concurrency });
  }

  public async request(params: AxiosRequestConfig) {
    const { data } = await this.queue.add(() => this.instance.request(params) );

    return data;
  }
}