import * as alexa from 'alexa-app';
import {request, response} from 'alexa-app';

import {Ssml} from 'ssml-gib';

import AmazonIntent from './common/domain/AmazonIntent';
import AmazonCancelIntentHandler from './common/handler/AmazonCancelIntentHandler';
import AmazonHelpIntentHandler from './common/handler/AmazonHelpIntentHandler';
import AmazonStopIntentHandler from './common/handler/AmazonStopIntentHandler';

import NavigationIntent from './navigation/domain/NavigationIntent';
import NavigationIntentHandler from './navigation/handler/NavigationIntentHandler';

import ErrorHandler from './common/handler/ErrorHandler';

const app = new alexa.app('breuninger');

app.launch((alexaRequest: request, alexaResponse: response) => {
  alexaResponse.say(`${Ssml.emphasis('Willkommen', 'strong')} bei Breuninger, wie kann ich Dir helfen?`)
    .reprompt('Ich warte')
    .shouldEndSession(false);
});

app.intent('AMAZON.CancelIntent', AmazonIntent, AmazonCancelIntentHandler);

app.intent('AMAZON.HelpIntent', AmazonIntent, AmazonHelpIntentHandler);

app.intent('AMAZON.StopIntent', AmazonIntent, AmazonStopIntentHandler);

app.intent('NavigationIntent', NavigationIntent, NavigationIntentHandler);

app.sessionEnded((alexaRequest: request, alexaResponse: response) => {
  // AlexaResponse.say('Quack, Quack! Die Ente hat gesprochen');
});

app.error = ErrorHandler;

app.messages.NO_INTENT_FOUND = 'Diese Anfrage kann ich leider nicht beantworten.';

export default app;
