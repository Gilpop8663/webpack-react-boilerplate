import { MOCK_POST_LIST } from '@mocks/postList';

describe('게시글 목록을 통신하여 불러올 수 있다.', () => {
  test('게시글 목록을 볼러올 수 있다.', async () => {
    const data = await fetch('/posts').then(response => response.json());

    expect(data).toEqual(MOCK_POST_LIST);
  });
});
