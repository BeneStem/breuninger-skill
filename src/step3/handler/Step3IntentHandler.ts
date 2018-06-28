import {request, RequestHandler, response} from 'alexa-app';
import {Ssml} from 'ssml-gib';

function Step3IntentHandler(this: RequestHandler, alexaRequest: request, alexaResponse: response): void {
  // TODO MAYBE CARD

  alexaResponse.directive({
    type: 'Display.RenderTemplate',
    template: {
      type: 'BodyTemplate7',
      token: 'product_image',
      backButton: 'HIDDEN',
      title: 'Abendmode Sale',
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
            url: 'https://dmt1ij82bkw8z.cloudfront.net/Breuninger-Sale.png',
            size: 'X_LARGE'
          }
        ]
      }
    }
  });

  alexaResponse.say(`Der Anzug ist in Stuttgart noch vorrätig. Kommen Sie morgen vorbei, dann startet unsere Saleaktion. ${Ssml.prosody('Breuninger', {rate: 110})} Card Kunden erhalten zehn Prozent auf Abendmode.`)
    .reprompt('Kann ich Ihnen hierzu noch weitere Informationen geben?')
    .shouldEndSession(false);
}

export default Step3IntentHandler;
