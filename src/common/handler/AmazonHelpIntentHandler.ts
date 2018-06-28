import {request, RequestHandler, response} from 'alexa-app';

function AmazonHelpIntentHandler(this: RequestHandler, alexaRequest: request, alexaResponse: response): void {
  alexaResponse.say('Bei dieser Frage kann ich Ihnen leider nicht weiterhelfen.')
    .shouldEndSession(false);
}

export default AmazonHelpIntentHandler;
