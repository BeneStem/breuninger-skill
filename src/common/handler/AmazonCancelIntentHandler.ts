import {request, RequestHandler, response} from 'alexa-app';

function AmazonCancelIntentHandler(this: RequestHandler, alexaRequest: request, alexaResponse: response): void {
  alexaResponse.say('Quack, Quack! Die Ente hat gesprochen');
}

export default AmazonCancelIntentHandler;
