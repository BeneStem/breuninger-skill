import {ErrorHandler, request, response} from 'alexa-app';

function ErrorHandler(this: ErrorHandler, exception: any, alexaRequest: request, alexaResponse: response): void {
  alexaResponse.say('Es gab einen Fehler beim Verarbeiten Deiner Anfrage. Versuche es noch einmal.');
}

export default ErrorHandler;
