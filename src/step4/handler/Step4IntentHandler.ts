import {request, RequestHandler, response} from 'alexa-app';

function Step4IntentHandler(this: RequestHandler, alexaRequest: request, alexaResponse: response): void {
  alexaResponse.say(`Cool, wir freuen uns auf dich!`)
    .reprompt('Was kann ich für dich tun?')
    .shouldEndSession(true);
}

export default Step4IntentHandler;
