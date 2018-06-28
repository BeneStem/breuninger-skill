import {request, RequestHandler, response} from 'alexa-app';
import {Ssml} from 'ssml-gib';

function Step6IntentHandler(this: RequestHandler, alexaRequest: request, alexaResponse: response): void {
  alexaResponse.directive({
    type: 'Display.RenderTemplate',
    template: {
      type: 'BodyTemplate3',
      token: 'product_image',
      backButton: 'HIDDEN',
      title: 'Ganni Hosenanzug',
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
            url: 'https://dmt1ij82bkw8z.cloudfront.net/Breuninger-Ganni-Hosenanzug.png',
            size: 'X_LARGE'
          }
        ]
      },
      textContent: {
        primaryText: {
          type: 'RichText',
          text: 'Obermaterial:<br />98% Baumwolle<br />2% Elasthan<br /><br />Futter:<br />100% Baumwolle'
        }
      }
    }
  });

  alexaResponse.say(`Ich glaube ${Ssml.prosody('nicht',
    {rate: 110})}, denn der Anzug ist aus Baumwolle und garantiert damit einen hohen Tragekomfort.`)
    .reprompt('Brauchen Sie noch weitere Informationen zum Artikel?')
    .shouldEndSession(false);
}

export default Step6IntentHandler;
