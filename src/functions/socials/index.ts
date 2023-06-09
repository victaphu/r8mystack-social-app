import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  timeout: 300,
  events: [
    {
      http: {
        method: 'post',
        path: 'socials',
        private: true,
        request: {
        },
      },
    },
  ],
};
