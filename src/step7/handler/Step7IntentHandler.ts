import {request, RequestHandler, response} from 'alexa-app';
import * as aws from 'aws-sdk';
import {AWSError} from 'aws-sdk/lib/error';
import * as SNS from 'aws-sdk/clients/sns';

function Step7IntentHandler(this: RequestHandler, alexaRequest: request, alexaResponse: response): Promise<void> {
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
        alexaResponse.directive({
          type: 'Display.RenderTemplate',
          template: {
            type: 'ListTemplate1',
            token: 'product_image',
            backButton: 'HIDDEN',
            title: 'Passend zu Ganni Hosenanzug',
            backgroundImage: {
              sources: [
                {
                  url: 'https://dmt1ij82bkw8z.cloudfront.net/Breuninger-Step2-Background.png',
                  size: 'X_LARGE'
                }
              ]
            },
            listItems: [
              {
                token: 'p1',
                image: {
                  sources: [
                    {
                      url: 'https://cms.brnstc.de/product_images/435x596/18/05/100077025111000_0.jpg',
                      size: 'X_LARGE'
                    }
                  ]
                },
                textContent: {
                  primaryText: {
                    type: 'RichText',
                    text: 'rich&amp;royal'
                  },
                  secondaryText: {
                    type: 'RichText',
                    text: 'Blusentop'
                  },
                  tertiaryText: {
                    type: 'RichText',
                    text: '89,95 €'
                  }
                }
              },
              {
                token: 'p2',
                image: {
                  sources: [
                    {
                      url: 'https://cms.brnstc.de/product_images/435x596/18/06/100080654912000_0.jpg',
                      size: 'X_LARGE'
                    }
                  ]
                },
                textContent: {
                  primaryText: {
                    type: 'RichText',
                    text: 'GIANVITO'
                  },
                  secondaryText: {
                    type: 'RichText',
                    text: 'Pumps'
                  },
                  tertiaryText: {
                    type: 'RichText',
                    text: '160 €'
                  }
                }
              },
              {
                token: 'p3',
                image: {
                  sources: [
                    {
                      url: 'https://cms.brnstc.de/product_images/435x596/18/03/100061943711000_0.jpg',
                      size: 'X_LARGE'
                    }
                  ]
                },
                textContent: {
                  primaryText: {
                    type: 'RichText',
                    text: 'abro'
                  },
                  secondaryText: {
                    type: 'RichText',
                    text: 'Clutch'
                  },
                  tertiaryText: {
                    type: 'RichText',
                    text: '119,99 €'
                  }
                }
              }
            ]
          }
        });

        alexaResponse.say(
          `Wir haben die gewünschte Größe noch auf Lager. Ein Mitarbeiter wird Ihnen den Artikel in Kürze bringen. Stöbern Sie doch so lange durch unsere Empfehlungen zu diesem Anzug.`)
          .shouldEndSession(false);
        resolve();
      }
    });
  });
}

export default Step7IntentHandler;
