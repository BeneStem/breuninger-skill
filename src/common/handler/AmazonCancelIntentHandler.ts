import {request, RequestHandler, response} from 'alexa-app';

function AmazonCancelIntentHandler(this: RequestHandler, alexaRequest: request, alexaResponse: response): void {
  alexaResponse.say('Auf wiedersehen, bis zum nächsten mal!');
}

export default AmazonCancelIntentHandler;
