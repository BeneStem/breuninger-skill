import * as request from 'request';
import {RequestResponse} from 'request';

class DealService {
  public static findOne(): Promise<Deal> {
    return new Promise((resolve: (value?: PromiseLike<Deal> | Deal) => void, reject: (reason?: any) => void): void => {
      const options = {
        url: 'https://www.otto.de/p13n-productreco/deals/today',
        json: true
      };
      request(options, (error: Error, response: RequestResponse, body: { deal: Deal }): void => {
        if (error !== null || response.statusCode !== 200) {
          reject();
          return;
        }
        resolve(body.deal);
      });
    });
  }
}

export default DealService;
