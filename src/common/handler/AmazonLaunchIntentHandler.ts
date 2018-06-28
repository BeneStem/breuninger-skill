import {request, response} from 'alexa-app';
import {Ssml} from 'ssml-gib';

function AmazonLaunchIntentHandler(alexaRequest: request, alexaResponse: response) {
  alexaResponse.card({
    type: 'Standard',
    title: 'Herzlich Willkommen bei Breuninger',
    text: 'Wie kann ich Ihnen helfen? Stellen Sie mir einfach eine Frage, zum Beispiel zu einem Artikel oder unseren Services.',
    image: {
      smallImageUrl: 'https://dmt1ij82bkw8z.cloudfront.net/Breuninger-Icon.png',
      largeImageUrl: 'https://dmt1ij82bkw8z.cloudfront.net/Breuninger-Icon.png'
    }
  });
  alexaResponse.directive({
    type: 'Display.RenderTemplate',
    template: {
      type: 'BodyTemplate1',
      token: 'breuninger_logo',
      backButton: 'HIDDEN',
      title: '',
      backgroundImage: {
        sources: [
          {
            url: 'https://dmt1ij82bkw8z.cloudfront.net/Breuninger-Background.jpg',
            size: 'X_LARGE'
          }
        ]
      },
      textContent: {
        primaryText: {
          type: 'RichText',
          text: '<div align="center"><img src="https://dmt1ij82bkw8z.cloudfront.net/Breuninger-Logo.png" width="600" height="166" alt="Breuninger" /></div>'
        }
      }
    }
  });
  alexaResponse.say(`Herzlich Willkommen bei ${Ssml.prosody('Breuninger', {rate: 110})}. Wie kann ich Ihnen helfen?`)
    .reprompt('Stellen Sie mir einfach eine Frage, zum Beispiel zu einem Artikel oder unseren Services.')
    .shouldEndSession(false);
}

export default AmazonLaunchIntentHandler;
