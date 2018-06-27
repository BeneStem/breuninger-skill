import {request, RequestHandler, response} from 'alexa-app';

function ProductIntentHandler(this: RequestHandler, alexaRequest: request, alexaResponse: response): void {
  alexaResponse.directive({
    type: 'Display.RenderTemplate',
    template: {
      type: 'BodyTemplate3',
      token: 'product_image',
      backButton: 'HIDDEN',
      title: '',
      image: {
        sources: [
          {
            url: 'https://scontent-frt3-2.cdninstagram.com/vp/c127cf1bc6c8707a4bb8dd7c018b9853/5BCB67F7/t51.2885-15/s1080x1080/e15/fr/33318601_198069757686906_8587457022935433216_n.jpg',
            size: 'X_LARGE'
          }
        ]
      },
      textContent: {
        primaryText: {
          type: 'RichText',
          text: ''
        }
      }
    }
  });
  alexaResponse.say(`Ja, wir haben grade eine ganz neue, exclusive Chino Sakko Kombination von Chanel erhalten. Schau doch mal!`)
    .reprompt('Was kann ich für dich tun?')
    .shouldEndSession(false);
}

export default ProductIntentHandler;
