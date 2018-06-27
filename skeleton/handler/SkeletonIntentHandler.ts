import {request, RequestHandler, response} from 'alexa-app';

import SkeletonService from '../service/SkeletonService';

function SkeletonIntentHandler(this: RequestHandler, alexaRequest: request, alexaResponse: response): Promise<void> {
  return SkeletonService.findOne()
    .then((navigationEntries: Array<SkeletonEntry>) => {
      alexaResponse.say(`ResponseSentence`);
    });
}

export default SkeletonIntentHandler;
