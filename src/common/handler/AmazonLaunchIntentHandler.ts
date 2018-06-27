import {request, response} from 'alexa-app';
import {Ssml} from 'ssml-gib';

function AmazonLaunchIntentHandler(alexaRequest: request, alexaResponse: response) {
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
            url: 'http://dmt1ij82bkw8z.cloudfront.net/Breuninger-Background.jpg',
            size: 'X_LARGE'
          }
        ]
      },
      textContent: {
        primaryText: {
          type: 'RichText',
          text: '<div align="center"><img src="http://dmt1ij82bkw8z.cloudfront.net/Breuninger-Logo.png" width="600" height="166" alt="Breuninger" /></div>'
        }
      }
    }
  });
  alexaResponse.say(`${Ssml.emphasis('Willkommen', 'strong')} bei Breuninger, wie kann ich Dir helfen?`)
    .reprompt('Kann ich etwas für dich tun?')
    .shouldEndSession(false);
}

export default AmazonLaunchIntentHandler;
