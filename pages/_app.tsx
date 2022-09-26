import '../styles/globals.css';
import type { AppProps } from 'next/app';
import SessionContextProvider from '../context/session-context';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import AuthProvider from '../context/session-context';
import Layout from '../components/layout';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionContextProvider>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </SessionContextProvider>
  );
}

export default MyApp;
