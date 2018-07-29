import * as alexa from 'alexa-app';

import AmazonLaunchIntentHandler from './common/handler/AmazonLaunchIntentHandler';
import AmazonIntent from './common/domain/AmazonIntent';
import AmazonCancelIntentHandler from './common/handler/AmazonCancelIntentHandler';
import AmazonStopIntentHandler from './common/handler/AmazonStopIntentHandler';

import Step1Intent from './step1/domain/Step1Intent';
import Step1IntentHandler from './step1/handler/Step1IntentHandler';

import Step2Intent from './step2/domain/Step2Intent';
import Step2IntentHandler from './step2/handler/Step2IntentHandler';

import Step3Intent from './step3/domain/Step3Intent';
import Step3IntentHandler from './step3/handler/Step3IntentHandler';

import Step4Intent from './step4/domain/Step4Intent';
import Step4IntentHandler from './step4/handler/Step4IntentHandler';

import Step5Intent from './step5/domain/Step5Intent';
import Step5IntentHandler from './step5/handler/Step5IntentHandler';

import Step6Intent from './step6/domain/Step6Intent';
import Step6IntentHandler from './step6/handler/Step6IntentHandler';

import Step7Intent from './step7/domain/Step7Intent';
import Step7IntentHandler from './step7/handler/Step7IntentHandler';

import Step8Intent from './step8/domain/Step8Intent';
import Step8IntentHandler from './step8/handler/Step8IntentHandler';

import NavigationIntent from './navigation/domain/NavigationIntent';
import NavigationIntentHandler from './navigation/handler/NavigationIntentHandler';

import SizeIntentHandler from './size/handler/SizeIntentHandler';
import SizeIntent from './size/domain/SizeIntent';

import ErrorHandler from './common/handler/ErrorHandler';

import getAmazonHelpIntentHandler from './common/handler/AmazonHelpIntentHandler';

const app = new alexa.app('breuninger');

app.launch(AmazonLaunchIntentHandler);

app.intent('AMAZON.CancelIntent', AmazonIntent, AmazonCancelIntentHandler);

app.intent('AMAZON.StopIntent', AmazonIntent, AmazonStopIntentHandler);
app.intent('AMAZON.NavigateHomeIntent', AmazonIntent, AmazonStopIntentHandler);

app.intent('AMAZON.NextIntent', AmazonIntent, AmazonStopIntentHandler);
app.intent('AMAZON.PreviousIntent', AmazonIntent, AmazonStopIntentHandler);
app.intent('AMAZON.ScrollUpIntent', AmazonIntent, AmazonStopIntentHandler);
app.intent('AMAZON.ScrollRightIntent', AmazonIntent, AmazonStopIntentHandler);
app.intent('AMAZON.ScrollDownIntent', AmazonIntent, AmazonStopIntentHandler);
app.intent('AMAZON.ScrollLeftIntent', AmazonIntent, AmazonStopIntentHandler);
app.intent('AMAZON.PageUpIntent', AmazonIntent, AmazonStopIntentHandler);
app.intent('AMAZON.PageDownIntent', AmazonIntent, AmazonStopIntentHandler);
app.intent('AMAZON.NavigateSettingsIntent', AmazonIntent, AmazonStopIntentHandler);
app.intent('AMAZON.MoreIntent', AmazonIntent, AmazonStopIntentHandler);

app.intent('StepOneIntent', Step1Intent, Step1IntentHandler);
app.intent('StepTwoIntent', Step2Intent, Step2IntentHandler);
app.intent('StepThreeIntent', Step3Intent, Step3IntentHandler);
app.intent('StepFourIntent', Step4Intent, Step4IntentHandler);
app.intent('StepFiveIntent', Step5Intent, Step5IntentHandler);
app.intent('StepSixIntent', Step6Intent, Step6IntentHandler);
app.intent('StepSevenIntent', Step7Intent, Step7IntentHandler);
app.intent('StepEightIntent', Step8Intent, Step8IntentHandler);

app.intent('NavigationIntent', NavigationIntent, NavigationIntentHandler);
app.intent('SizeIntent', SizeIntent, SizeIntentHandler);

app.sessionEnded(AmazonStopIntentHandler);

app.error = ErrorHandler;

app.messages.NO_INTENT_FOUND = 'Bei dieser Frage kann ich Ihnen leider nicht weiterhelfen.';

app.intent('AMAZON.HelpIntent', AmazonIntent, getAmazonHelpIntentHandler(app.intents));

export default app;
