import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';
import { getMongoose } from '@libs/persist';
import model from 'src/models/PostLikes';

const tiktok: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {

  const { postId, tiktokId, instaId } = event.body; 
  console.log('loading', event.body.postId, '/', event.body.tiktokId, '/', event.body.instaId);

  const client = getMongoose();

  let item = await model.findOne({ 'postId' : event.body.postId });

  if (!item) {
    item = {
      postId,
      tiktokId,
      instaId, 
      instaLike: 32,
      tiktokLike: 12
    } as any;
  }
  else if (event.body.update) {
    item.instaLike += 2;
    item.tiktokLike += 2;
  }

  await model.findOneAndUpdate({ postId }, item, { upsert: true })

  return formatJSONResponse({
    message: 'Complete',
    data: item
  })
};

export const main = middyfy(tiktok);
