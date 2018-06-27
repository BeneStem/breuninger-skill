import {request, RequestHandler, response} from 'alexa-app';

function EventIntentHandler(this: RequestHandler, alexaRequest: request, alexaResponse: response): void {
  // TODO BILD
  // TODO BACKGROUND
  // TODO TITLE
  // TODO TEXT UHRZEIT ORT ANSPRECHPARTNER VERKÄUFER
  // TODO MAYBE CARD
  alexaResponse.say(`Was für ein Zufall, ausgerechnet morgen Abend findet ein Chanel Event statt. Komm doch vorbei!`)
    .reprompt('Was kann ich für dich tun?')
    .shouldEndSession(false);
}

export default EventIntentHandler;
