export default {
  type: "object",
  properties: {
    postId: { type: 'string' },
    instaId: { type: 'string' },
    tiktokId: { type: 'string' }
  },
  required: ['postId', 'instaId', 'tiktokId']
} as const;
