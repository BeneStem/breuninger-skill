import {request, RequestHandler, response} from 'alexa-app';

function InformationIntentHandler(this: RequestHandler, alexaRequest: request, alexaResponse: response): void {
  alexaResponse.directive({
    type: 'Display.RenderTemplate',
    template: {
      type: 'BodyTemplate3',
      token: 'product_image',
      backButton: 'HIDDEN',
      title: 'Title',
      image: {
        sources: [
          {
            url: 'https://cms.brnstc.de/product_images/1122x1536/18/06/100058378317000_0.jpg',
            size: 'X_LARGE'
          }
        ]
      },
      textContent: {
        primaryText: {
          type: 'RichText',
          text: '<b>Text1. Text1. Text1.</b> Text1. Text1. Text1. Text1. Text1. Text1. Text1. Text1. Text1. Text1. Text1. Text1.'
        }
      }
    }
  });
  alexaResponse.say(`Informationen`)
    .reprompt('Was kann ich für dich tun?')
    .shouldEndSession(false);
}

export default InformationIntentHandler;
