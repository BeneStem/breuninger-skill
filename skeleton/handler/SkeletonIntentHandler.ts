import {request, RequestHandler, response} from 'alexa-app';

function SkeletonIntentHandler(this: RequestHandler, alexaRequest: request, alexaResponse: response): void {
  alexaResponse.say(`ResponseSentence`)
    .reprompt('Was kann ich für dich tun?')
    .shouldEndSession(false);
}

export default SkeletonIntentHandler;
