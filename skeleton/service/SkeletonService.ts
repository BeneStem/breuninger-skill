import * as request from 'request';
import {RequestResponse} from 'request';

class SkeletonService {
  public static findOne(): Promise<Array<SkeletonEntry>> {
    return new Promise((resolve: (value?: PromiseLike<Array<SkeletonEntry>> | Array<SkeletonEntry>) => void, reject: (reason?: any) => void): void => {
      const options = {
        url: 'https://www.breuninger.com/globale-navigation/a46d4f96fcdcc16c771751d197bea92f/',
        json: true
      };
      request(options, (error: Error, response: RequestResponse, body: Array<SkeletonEntry>): void => {
        if (error !== null || response.statusCode !== 200) {
          reject();
          return;
        }
        resolve(body);
      });
    });
  }
}

export default SkeletonService;
