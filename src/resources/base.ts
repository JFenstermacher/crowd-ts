import { AxiosRequestConfig } from 'axios';
import { CrowdApplication } from '..';

export class ResourceClient {
  protected api: CrowdApplication;

  constructor(api: CrowdApplication) {
    this.api = api;
  }

  protected async makePaginatedRequest<T>(req: AxiosRequestConfig & { queryType: string }): Promise<T[]> {
    const RESPONSE_MAX = 1000; // 1000 is max that can be queried

    const { queryType, ...requestParams } = req;
    const { maxResults, startIndex = 0, ...params } = requestParams.params;

    const total = maxResults ? maxResults : Number.MAX_SAFE_INTEGER;

    const results: T[] = [];

    params['max-results'] = Math.min(total, RESPONSE_MAX);
    params['start-index'] = startIndex;
    requestParams.params = params;

    while (results.length < total) {
      const { [queryType]: response } = await this.request(requestParams);

      results.push(...response);

      if (response.length < 1000) break;

      requestParams.params['start-index'] += response.length;
    }

    return results.slice(0, total);
  }

  protected _createExpandParam(expand?: boolean | string[]): string | undefined {
    const allowed = ['user', 'group', 'attributes'];

    let retval;

    if (Array.isArray(expand)) {
      for (const e of expand) {
        if (!allowed.includes(e)) {
          throw new Error(`Allowed expansion attributes are: ${allowed}`);
        }
      }

      retval = expand.join(',');
    } else if (expand) retval = allowed.join(',');

    return retval;
  }

  protected request(params: AxiosRequestConfig) {
    return this.api.request(params);
  }
}