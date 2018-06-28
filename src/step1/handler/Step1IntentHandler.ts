import {request, RequestHandler, response} from 'alexa-app';

function Step1IntentHandler(this: RequestHandler, alexaRequest: request, alexaResponse: response): void {
  // TODO BACKGROUND SCHÖNER
  // TODO NAME DER FARBE ANZEIGEN
  // TODO MAYBE CARD
  alexaResponse.directive({
    type: 'Display.RenderTemplate',
    template: {
      type: 'BodyTemplate1',
      token: 'product_image',
      backButton: 'HIDDEN',
      title: '',
      backgroundImage: {
        sources: [
          {
            url: 'https://ih0.redbubble.net/image.506376478.4655/flat,2000x2000,075,f.u1.jpg',
            size: 'X_LARGE'
          }
        ]
      }
    }
  });
  alexaResponse.say(`Hey, diesen Sommer ist Meadowlark Trendfarbe. Damit wirst du auf jeden Fall toll aussehen!`)
    .reprompt('Was kann ich für dich tun?')
    .shouldEndSession(false);
}

export default Step1IntentHandler;
