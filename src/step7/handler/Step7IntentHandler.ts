import {request, RequestHandler, response} from 'alexa-app';

function Step7IntentHandler(this: RequestHandler, alexaRequest: request, alexaResponse: response): void {
  alexaResponse.say(`Wir haben die andere Größe im Lager. Ein Verkäufer wird dir den Artikel sofort bringen.`)
    .reprompt('Was kann ich für dich tun?')
    .shouldEndSession(false);
}

export default Step7IntentHandler;
