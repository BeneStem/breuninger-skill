import * as alexa from 'alexa-app';

import AmazonLaunchIntentHandler from './common/handler/AmazonLaunchIntentHandler';
import AmazonIntent from './common/domain/AmazonIntent';
import AmazonCancelIntentHandler from './common/handler/AmazonCancelIntentHandler';
import AmazonHelpIntentHandler from './common/handler/AmazonHelpIntentHandler';
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

// NEW_IMPORT_INSERTED

import ErrorHandler from './common/handler/ErrorHandler';

const app = new alexa.app('breuninger');

app.launch(AmazonLaunchIntentHandler);

app.intent('AMAZON.CancelIntent', AmazonIntent, AmazonCancelIntentHandler);

app.intent('AMAZON.HelpIntent', AmazonIntent, AmazonHelpIntentHandler);

app.intent('AMAZON.StopIntent', AmazonIntent, AmazonStopIntentHandler);
app.intent('AMAZON.NavigateHomeIntent', AmazonIntent, AmazonStopIntentHandler);

app.intent('StepOneIntent', Step1Intent, Step1IntentHandler);
app.intent('StepTwoIntent', Step2Intent, Step2IntentHandler);
app.intent('StepThreeIntent', Step3Intent, Step3IntentHandler);
app.intent('StepFourIntent', Step4Intent, Step4IntentHandler);
app.intent('StepFiveIntent', Step5Intent, Step5IntentHandler);
app.intent('StepSixIntent', Step6Intent, Step6IntentHandler);
app.intent('StepSevenIntent', Step7Intent, Step7IntentHandler);

// NEW_INTENT_INSERTED

app.sessionEnded(AmazonStopIntentHandler);

app.error = ErrorHandler;

app.messages.NO_INTENT_FOUND = 'Diese Anfrage kann ich leider nicht beantworten.';

export default app;

// Oh ja, zu dem Event komme ich. => Freut mich, dann sehen wir uns morgen abend! ==> STOP
// Ich hab von dem XXX-Event gehört, wo finde ich das denn? => KARTEN BILD + ORTSANGABE (VERKÄUFER FAVORIT)
// Produktinformationen an der Kleiderstange erfragen
// Gibts das auch in 38?? => E-Mail wird getriggert =/= Ja, die Größe habe ich gefunden und einen Verkäufer benachrichtigt, dein Teil wird dir gleich gebracht. (VERKÄUFER FAVORIT) ==> STOP

// sie nimmt am event teil und geht in umkleide
// Das will ich haben, Bestell mir das nach Hause. ???
// Selbst entsichern, Selbst bezahlen ???

// Verkäufer Probleme (2)
// wo finde ich das?
// andere größe?
// bib?
// gutschein code vergessen?
// bild von artiel, wo finde ich den?
// wo finde ich diese marke?
// regelmäßiger abstand standard ware wird bestellt => bestell mir das noch mal

// PDF-Statistische Daten (2)

// Potenzial
// Order Stuff at restaurant
// Shuttle buchen
// FAQ / Information
// do sth while doing sth else
// Artikelinformation
// BC Freischaltung
// Delivery Status
// Abrechung, Saldo
// navigations hilfe im online-shop

// 1. Verliebt => Alexa Beispiel Vorführung
// 2. Kundennutzen => Wir haben Verkäufer gefragt: das kam raus, Wir haben Kunden Statistik: das sind die daten, Breuninger Kundengruppen
// 3. Innovationsgrad => Verbindung von Online & Stationär, Barrieren verkleinern, First Mover, Kann noch keiner, Erfolgsstory wie bei BC
// 4. Potenzial => Business Case, Verkäufer können sich konzentrieren, Skalierbarkeit, Weihnachstgeschäft, Kunden-Involvement, UseCase die Verkaufsfördernd sind
// 5. Machbarkeit => Ihr seht ja, wie weit wir schon sind. Einiges gefaked. Plan für Integration aufzeigen!

// TODO Donnerstag
// Implementierung restlicher Intents @Bene, Choi

// Formulierungen final @Julia
// Betonungen & Aussprache final @Julia

// Generalprobe Alexa @Svenja, Julia, Milen?

// MARKENNAME @Julia, Milen
// MARKENICON @Julia, Milen

// Präsentaion @Svenja, Julia, Milen?
// Generalprobe Alles @Svenja, Julia, Milen?
// Zusammenfassungs-Folie @Svenja, Julia, Milen?
