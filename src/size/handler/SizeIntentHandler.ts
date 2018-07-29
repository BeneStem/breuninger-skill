import {request, RequestHandler, response} from 'alexa-app';
// import {Ssml} from 'ssml-gib';
import * as aws from 'aws-sdk';
import {AWSError} from 'aws-sdk/lib/error';
import * as SNS from 'aws-sdk/clients/sns';

function SizeIntentHandler(this: RequestHandler, alexaRequest: request, alexaResponse: response): Promise<void> {
  return new Promise((resolve, reject) => {
    const sns = new aws.SNS();
    sns.publish({
      TargetArn: 'arn:aws:sns:eu-west-1:717668223655:breuninger_skill_test_topic',
      Subject: 'BPA',
      Message: '3 OG Umkleide 17 Größe 38 Ganni Hosenanzug Gelb wird benötigt.'
    }, (err: AWSError, data: SNS.Types.PublishResponse) => {
      if (err) {
        reject();
      } else {
        alexaResponse.say(
          `Wir haben die gewünschte Größe noch auf Lager. Ein Mitarbeiter wird Ihnen den Artikel in Kürze bringen.`)
          .shouldEndSession(false);
        resolve();
      }
    });
  });
}

export default SizeIntentHandler;
