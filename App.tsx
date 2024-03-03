import React from 'react';
import Navigation from './src/Navigation';
import {ToastProvider} from './src/hooks/ToastHook';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Loader} from './src/components';
const queryClient = new QueryClient();
const App = () => {
  return (
    <ToastProvider>
      <QueryClientProvider client={queryClient}>
        <Navigation />
      </QueryClientProvider>
      <Loader />
    </ToastProvider>
  );
};

export default App;
