import { rest } from 'msw';

export const MOCK_POST_LIST = [
  {
    id: 1,
    text: 'hi',
  },
  {
    id: 2,
    text: 'hi2',
  },
  {
    id: 3,
    text: 'hi3',
  },
];

export const mockPostList = [
  rest.get('/posts', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MOCK_POST_LIST));
  }),
];
