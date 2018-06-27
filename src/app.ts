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

// NEW_IMPORT_INSERTED

import ErrorHandler from './common/handler/ErrorHandler';

const app = new alexa.app('breuninger');

app.launch(AmazonLaunchIntentHandler);

app.intent('AMAZON.CancelIntent', AmazonIntent, AmazonCancelIntentHandler);

app.intent('AMAZON.HelpIntent', AmazonIntent, AmazonHelpIntentHandler);

app.intent('AMAZON.StopIntent', AmazonIntent, AmazonStopIntentHandler);
app.intent('AMAZON.NavigateHomeIntent', AmazonIntent, AmazonStopIntentHandler);

// home

// 1 Step
app.intent('TrendIntent', TrendIntent, TrendIntentHandler);

// 2 Step
app.intent('ProductIntent', ProductIntent, ProductIntentHandler);

// 3 Step
app.intent('EventIntent', EventIntent, EventIntentHandler);

// TODO Oh ja, zu dem Event komme ich. => Freut mich, dann sehen wir uns morgen abend! ==> STOP


// in-store

// TODO Ich hab von dem XXX-Event gehört, wo finde ich das denn? => KARTEN BILD + ORTSANGABE (VERKÄUFER FAVORIT)
app.intent('NavigationIntent', NavigationIntent, NavigationIntentHandler);

// sie nimmt am event teil und geht in umkleide

// TODO Gibts das auch in 38?? => E-Mail wird getriggert =/= Ja, die Größe habe ich gefunden und einen Verkäufer benachrichtigt, dein Teil wird dir gleich gebracht. (VERKÄUFER FAVORIT) ==> STOP
app.intent('InformationIntent', InformationIntent, InformationIntentHandler);

// NEW_INTENT_INSERTED
// TODO Das will ich haben, Bestell mir das nach Hause. ???
// TODO Selbst entsichern, Selbst bezahlen ???


app.sessionEnded(AmazonStopIntentHandler);

app.error = ErrorHandler;

app.messages.NO_INTENT_FOUND = 'Diese Anfrage kann ich leider nicht beantworten.';

export default app;

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
// Formulierungen final @Julia
// Implementierung restlicher Intents @Bene, Choi
// Betonungen & Aussprache final @Julia
// Generalprobe Alexa @Svenja, Julia, Milen?
// MARKENNAME @Julia, Milen
// MARKENICON @Julia, Milen
// Präsentaion @Svenja, Julia, Milen?
// Generalprobe Alles @Svenja, Julia, Milen?
// Zusammenfassungs-Folie @Svenja, Julia, Milen?
