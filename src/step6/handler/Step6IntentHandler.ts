import {request, RequestHandler, response} from 'alexa-app';

function Step6IntentHandler(this: RequestHandler, alexaRequest: request, alexaResponse: response): void {
  alexaResponse.say(`Das Material ist atmungsaktiv und schnell trocknend, du wirst großartig aussehen!`)
    .reprompt('Was kann ich für dich tun?')
    .shouldEndSession(false);
}

export default Step6IntentHandler;
