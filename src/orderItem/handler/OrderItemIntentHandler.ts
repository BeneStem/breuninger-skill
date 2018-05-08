import {request, RequestHandler, response} from 'alexa-app';

import ApiError from '../../common/domain/ApiError';

import OrderItemService from '../service/OrderItemService';

function OrderItemIntentHandler(this: RequestHandler, alexaRequest: request, alexaResponse: response): Promise<void> {
  const accessToken = alexaRequest.getSession().details.user.accessToken;
  if (accessToken === undefined || accessToken === null) {
    alexaResponse.say('Du hast Deinen Skill noch nicht mit Deinem Breuninger Account verbunden.');
    alexaResponse.linkAccount();
    return Promise.resolve();
  }
  return OrderItemService.findAll(accessToken)
    .then((orderItems: OrderItem[]) => {
      const orderItemsCount = orderItems.length;
      if (orderItemsCount > 0) {
        alexaResponse.say(`Du hast insgesamt ${orderItemsCount} Bestellungen.`);
      } else {
        alexaResponse.say('Du hast keine Bestellungen');
      }
    })
    .catch((error: ApiError | null) => {
      if (ApiError.isAssignableFrom(error)) {
        alexaResponse.say('Du hast Deinen Skill noch nicht mit Deinem Breuninger Account verbunden.');
        alexaResponse.linkAccount();
      } else {
        alexaResponse.say('Es gab einen Fehler beim Verarbeiten Deiner Anfrage. Versuche es noch einmal.');
      }
    });
}

export default OrderItemIntentHandler;
