import {request, RequestHandler, response} from 'alexa-app';

function AmazonHelpIntentHandler(this: RequestHandler, alexaRequest: request, alexaResponse: response): void {
  alexaResponse.say('Quack, Quack! Die Ente hat gesprochen')
    .shouldEndSession(false);
}

export default AmazonHelpIntentHandler;
