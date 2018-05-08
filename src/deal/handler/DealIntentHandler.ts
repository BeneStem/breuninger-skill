import {request, RequestHandler, response} from 'alexa-app';

import {Ssml} from 'ssml-gib';

import DealService from '../service/DealService';

function strong(oldPrice: string): string {
  return Ssml.emphasis(oldPrice, 'strong');
}

function DealIntentHandler(this: RequestHandler, alexaRequest: request, alexaResponse: response): Promise<void> {
  return DealService.findOne()
    .then((deal: Deal) => {
      const priceEuroOld = Math.trunc(deal.oldPrice / 100);
      const priceCentOld = deal.oldPrice % 100;
      const priceEuro = Math.trunc(deal.price / 100);
      const priceCent = deal.price % 100;
      const oldPrice = `${priceEuroOld},${priceCentOld}€`;
      const price = `${priceEuro},${priceCent}€`;
      alexaResponse.say(`Der Deal des Tages ist ${strong(deal.name)}, statt für ${strong(oldPrice)} jetzt für ${strong(price)}.`);
    });
}

export default DealIntentHandler;
