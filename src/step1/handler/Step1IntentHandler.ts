import {request, RequestHandler, response} from 'alexa-app';
import {Ssml} from 'ssml-gib';

function Step1IntentHandler(this: RequestHandler, alexaRequest: request, alexaResponse: response): void {
  // TODO MAYBE CARD

  alexaResponse.directive({
    type: 'Display.RenderTemplate',
    template: {
      type: 'BodyTemplate3',
      token: 'product_image',
      backButton: 'HIDDEN',
      title: 'Sommer-Trendfarbe Gelb',
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
            url: 'https://ih0.redbubble.net/image.506376478.4655/flat,2000x2000,075,f.u1.jpg',
            size: 'X_LARGE'
          }
        ]
      },
      textContent: {
        primaryText: {
          type: 'RichText',
          text: 'Die tonangebende Trendfarbe diesen Sommer ist „Meadowlark“, ein kühles Sonnengelb, das ein Garant für Aufmerksamkeit auf jeder Party ist.'
        }
      }
    }
  });

  alexaResponse.say(
    `Ich kann Ihnen die Sommertrendfarbe Gelb empfehlen. Damit werden Sie auf jeder Party ${Ssml.emphasis('strahlen')}!`)
    .reprompt('Kann ich Ihnen weitere Trendempfehlungen geben?')
    .shouldEndSession(false);
}

export default Step1IntentHandler;
