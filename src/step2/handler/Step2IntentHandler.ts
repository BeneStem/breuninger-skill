import {request, RequestHandler, response} from 'alexa-app';

function Step2IntentHandler(this: RequestHandler, alexaRequest: request, alexaResponse: response): void {
  // TODO MAYBE CARD
  alexaResponse.directive({
    type: 'Display.RenderTemplate',
    template: {
      type: 'BodyTemplate3',
      token: 'product_image',
      backButton: 'HIDDEN',
      title: 'Hosenanzug von Ganni',
      backgroundImage: {
        sources: [
          {
            url: 'https://dmt1ij82bkw8z.cloudfront.net/Breuninger-Step2-Background.png',
            size: 'X_LARGE'
          }
        ]
      },
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
          text: 'Zeitlos, klassisch und dennoch ausgefallen präsentiert sich dieser exklusive Hosenanzug von Ganni. Kombinieren Sie ihn mit einer Seidenbluse und nudefarbenen Pumps, um auf jedem Event zu glänzen.'
        }
      }
    }
  });
  alexaResponse.say(`Wir haben grade einen ganz exquisiten, gelben Hosenanzug von Ganni erhalten. Wär der was für Sie?`)
    .reprompt('Kann ich Ihnen eine Alternative empfehlen?')
    .shouldEndSession(false);
}

export default Step2IntentHandler;
