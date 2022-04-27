import type { AppProps } from 'next/app';
import AppWrapper from '../shared/context/token.context';
import '../../globals.css';

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <AppWrapper>
         <Component {...pageProps} />
      </AppWrapper>
   );
}

export default MyApp;
