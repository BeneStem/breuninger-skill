import {request, RequestHandler, response} from 'alexa-app';

function Step4IntentHandler(this: RequestHandler, alexaRequest: request, alexaResponse: response): void {
  alexaResponse.say(`Sehr schön, wir freuen uns auf Ihren Besuch!`)
    .shouldEndSession(true);
}

export default Step4IntentHandler;
