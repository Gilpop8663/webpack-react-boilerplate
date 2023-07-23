import { createBrowserRouter } from 'react-router-dom';

import Home from '@pages/Home';
import Post from '@pages/Post';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { path: '', element: <Home /> },
      {
        path: 'posts',
        element: <Post />,
      },
    ],
  },
]);
export default router;
