import * as request from 'request';
import {RequestResponse} from 'request';

import ApiError from '../../common/domain/ApiError';

class OrderItemService {
  public static findAll(accessToken: string): Promise<OrderItem[]> {
    return new Promise(
      (resolve: (value?: PromiseLike<OrderItem[]> | OrderItem[]) => void, reject: (reason?: any) => void): void => {
        const options = {
          url: 'https://api-oauth.otto.de/order-tracking',
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        };
        request(options, (error: Error, response: RequestResponse, bodyString: string) => {
          if (error !== null || response.statusCode !== 200) {
            reject();
            return;
          }
          const body: ApiError | OrderItemsHalRepresentation = JSON.parse(bodyString);
          if (ApiError.isAssignableFrom(body)) {
            reject(body);
            return;
          }
          resolve(body._embedded['oi:orderItems']);
        });
      });
  }
}

export default OrderItemService;
