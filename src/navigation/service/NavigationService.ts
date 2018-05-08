import * as request from 'request';
import {RequestResponse} from 'request';

class NavigationService {
  public static findOne(): Promise<Array<NavigationEntry>> {
    return new Promise((resolve: (value?: PromiseLike<Array<NavigationEntry>> | Array<NavigationEntry>) => void, reject: (reason?: any) => void): void => {
      const options = {
        url: 'https://www.breuninger.com/globale-navigation/a46d4f96fcdcc16c771751d197bea92f/',
        json: true
      };
      request(options, (error: Error, response: RequestResponse, body: Array<NavigationEntry>): void => {
        if (error !== null || response.statusCode !== 200) {
          reject();
          return;
        }
        resolve(body);
      });
    });
  }
}

export default NavigationService;
