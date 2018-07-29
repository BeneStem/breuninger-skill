import * as alexa from 'alexa-app';
import {request, RequestHandler, response} from 'alexa-app';
import {Ssml} from 'ssml-gib';

function getAmazonHelpIntentHandler(intents: { [name: string]: alexa.intent }): RequestHandler {
  const utterances = Object.keys(intents).map((key) => intents[key].utterances[0]).filter((value) => value != undefined);
  return function (this: RequestHandler, alexaRequest: request, alexaResponse: response) {
    alexaResponse.say(`Du kannst mir folgende ${utterances.length} Fragen stellen:`);
    utterances.forEach(utterance => {
      alexaResponse.say(`${Ssml.break({ms: 500})}${utterance}`);
    });
    alexaResponse.shouldEndSession(false);
  };
}

export default getAmazonHelpIntentHandler;
