import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
import debug from 'debug';
import pRetry from 'p-retry';
import pQueue from 'p-queue';

interface ApiConfig extends AxiosRequestConfig {
  concurrency?: number,
  retries?: number
}

export class Api {
  public instance: AxiosInstance;
  public queue: pQueue;
  public retries: number;

  constructor(apiConfig: ApiConfig) {
    const { concurrency = 5, retries = 0, ...config } = apiConfig;

    this.instance = axios.create(config);
    this.queue = new pQueue({ concurrency });
    this.retries = retries;
  }

  public async request(params: AxiosRequestConfig) {
    const run = () => pRetry(() => this.instance.request(params), { 
      retries: this.retries
    });

    const { data } = await this.queue.add(() => run());

    return data;
  }
}