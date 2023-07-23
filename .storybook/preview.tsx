import type { Preview } from '@storybook/react';

import { initialize, mswDecorator } from 'msw-storybook-addon';

import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import { handlers } from '../src/mocks/handlers';

initialize();

const preview: Preview = {
  parameters: {
    msw: handlers,
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    mswDecorator,
    Story => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

if (typeof global.process === 'undefined') {
  const { worker } = require('../src/mocks/worker');
  worker.start();
}

export default preview;
