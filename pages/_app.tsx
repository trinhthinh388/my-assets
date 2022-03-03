import type { AppProps } from 'next/app';
import '../styles/global.scss';
import '@fontsource/montserrat';
import '@fontsource/montserrat/700.css';
import Header from '../components/Header';

// import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-base-100 h-screen">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
