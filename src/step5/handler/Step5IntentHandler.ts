import {request, RequestHandler, response} from 'alexa-app';

function Step5IntentHandler(this: RequestHandler, alexaRequest: request, alexaResponse: response): void {
  alexaResponse.say(`Das Event findet im 3 OG in der Damenabteilung statt.`)
    .reprompt('Was kann ich für dich tun?')
    .shouldEndSession(false);
}

export default Step5IntentHandler;
