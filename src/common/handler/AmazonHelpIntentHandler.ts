import {request, RequestHandler, response} from 'alexa-app';

function AmazonHelpIntentHandler(this: RequestHandler, alexaRequest: request, alexaResponse: response): void {
  alexaResponse.say('Ich kann Ihnen leider nicht helfen')
    .shouldEndSession(false);
}

export default AmazonHelpIntentHandler;
