import {request, RequestHandler, response} from 'alexa-app';
import {Ssml} from 'ssml-gib';

function Step8IntentHandler(this: RequestHandler, alexaRequest: request, alexaResponse: response): void {
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
            url: 'https://blog.skybet.de/wp-content/uploads/2017/11/FIFA-WM-Pokal.jpg',
            size: 'X_LARGE'
          }
        ]
      },
      // image: {
      //   sources: [
      //     {
      //       url: 'https://dmt1ij82bkw8z.cloudfront.net/Breuninger-Ganni-Hosenanzug.png',
      //       size: 'X_LARGE'
      //     }
      //   ]
      // },
      // textContent: {
      //   primaryText: {
      //     type: 'RichText',
      //     text: 'Obermaterial:<br />98% Baumwolle<br />2% Elasthan<br /><br />Futter:<br />100% Baumwolle'
      //   }
      // }
    }
  });

  alexaResponse.say(`Gern geschehen, ${Ssml.emphasis('ich', 'strong')} habe ${Ssml.emphasis('immer', 'strong')} Zeit für Sie! ${Ssml.break(
    {ms: 300})} Wenn die Jury für mich stimmt!`)
    .shouldEndSession(true);
}

export default Step8IntentHandler;
