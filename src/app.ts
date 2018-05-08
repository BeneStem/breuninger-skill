import * as alexa from 'alexa-app';
import {request, response} from 'alexa-app';

import {Ssml} from 'ssml-gib';

import AmazonIntent from './common/domain/AmazonIntent';
import AmazonCancelIntentHandler from './common/handler/AmazonCancelIntentHandler';
import AmazonHelpIntentHandler from './common/handler/AmazonHelpIntentHandler';
import AmazonStopIntentHandler from './common/handler/AmazonStopIntentHandler';

import DealIntent from './deal/domain/DealIntent';
import DealIntentHandler from './deal/handler/DealIntentHandler';

import OrderItemIntent from './orderItem/domain/OrderItemIntent';
import OrderItemIntentHandler from './orderItem/handler/OrderItemIntentHandler';

import DuckIntent from './common/domain/DuckIntent';
import DuckIntentHandler from './common/handler/DuckIntentHandler';

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

app.intent('DealIntent', DealIntent, DealIntentHandler);

app.intent('OrderItemIntent', OrderItemIntent, OrderItemIntentHandler);

app.intent('DuckIntent', DuckIntent, DuckIntentHandler);

app.sessionEnded((alexaRequest: request, alexaResponse: response) => {
  // AlexaResponse.say('Quack, Quack! Die Ente hat gesprochen');
});

app.error = ErrorHandler;

app.messages.NO_INTENT_FOUND = 'Diese Anfrage kann ich leider nicht beantworten.';

export default app;
