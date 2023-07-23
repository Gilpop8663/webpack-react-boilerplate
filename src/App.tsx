import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@styles/globalStyle';
import { theme } from '@styles/theme';

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <QueryClientProvider client={queryClient}></QueryClientProvider>
  </ThemeProvider>
);

export default App;
