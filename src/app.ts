import * as alexa from 'alexa-app';

import AmazonLaunchIntentHandler from './common/handler/AmazonLaunchIntentHandler';
import AmazonIntent from './common/domain/AmazonIntent';
import AmazonCancelIntentHandler from './common/handler/AmazonCancelIntentHandler';
import AmazonHelpIntentHandler from './common/handler/AmazonHelpIntentHandler';
import AmazonStopIntentHandler from './common/handler/AmazonStopIntentHandler';

import TrendIntent from './trend/domain/TrendIntent';
import TrendIntentHandler from './trend/handler/TrendIntentHandler';

import ProductIntent from './product/domain/ProductIntent';
import ProductIntentHandler from './product/handler/ProductIntentHandler';

import EventIntent from './event/domain/EventIntent';
import EventIntentHandler from './event/handler/EventIntentHandler';

import NavigationIntent from './navigation/domain/NavigationIntent';
import NavigationIntentHandler from './navigation/handler/NavigationIntentHandler';

import InformationIntent from './information/domain/InformationIntent';
import InformationIntentHandler from './information/handler/InformationIntentHandler';

import ErrorHandler from './common/handler/ErrorHandler';

const app = new alexa.app('breuninger');

app.launch(AmazonLaunchIntentHandler);

app.intent('AMAZON.CancelIntent', AmazonIntent, AmazonCancelIntentHandler);

app.intent('AMAZON.HelpIntent', AmazonIntent, AmazonHelpIntentHandler);

app.intent('AMAZON.StopIntent', AmazonIntent, AmazonStopIntentHandler);
app.intent('AMAZON.NavigateHomeIntent', AmazonIntent, AmazonStopIntentHandler);

// 1 Step
app.intent('TrendIntent', TrendIntent, TrendIntentHandler);

// 2 Step
app.intent('ProductIntent', ProductIntent, ProductIntentHandler);

// 3 Step
app.intent('EventIntent', EventIntent, EventIntentHandler);

// 4 Step
app.intent('NavigationIntent', NavigationIntent, NavigationIntentHandler);

app.intent('InformationIntent', InformationIntent, InformationIntentHandler);


app.sessionEnded(AmazonStopIntentHandler);

app.error = ErrorHandler;

app.messages.NO_INTENT_FOUND = 'Diese Anfrage kann ich leider nicht beantworten.';

export default app;
