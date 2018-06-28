import {request, RequestHandler, response} from 'alexa-app';

function Step5IntentHandler(this: RequestHandler, alexaRequest: request, alexaResponse: response): void {
  alexaResponse.directive({
    type: 'Display.RenderTemplate',
    template: {
      type: 'BodyTemplate7',
      token: 'product_image',
      backButton: 'HIDDEN',
      title: '',
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
            url: 'https://dmt1ij82bkw8z.cloudfront.net/Breuninger-Step5-Background.png',
            size: 'X_LARGE'
          }
        ]
      }
    }
  });

  alexaResponse.say(`Abendmode finden Sie im dritten Obergeschoss rund um die Galerie. Sie erhalten heute 10% auf dieses Sortiment.`)
    .reprompt('Brauchen Sie eine genaue Wegbeschreibung?')
    .shouldEndSession(false);
}

export default Step5IntentHandler;
