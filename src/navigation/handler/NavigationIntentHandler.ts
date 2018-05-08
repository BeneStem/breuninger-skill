import {request, RequestHandler, response} from 'alexa-app';

import {Ssml} from 'ssml-gib';

import NavigationService from '../service/NavigationService';

function strong(oldPrice: string): string {
  return Ssml.emphasis(oldPrice, 'strong');
}

function NavigationIntentHandler(this: RequestHandler, alexaRequest: request, alexaResponse: response): Promise<void> {
  return NavigationService.findOne()
    .then((navigationEntries: Array<NavigationEntry>) => {
      alexaResponse.say(`Ich habe die Antwort ${strong(navigationEntries[navigationEntries.length - 1].text)} erhalten`);
    });
}

export default NavigationIntentHandler;
