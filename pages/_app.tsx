import type { AppProps } from 'next/app';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import '../styles/global.css';
import '@fontsource/raleway';
import '@fontsource/raleway/600.css';
import '@fontsource/raleway/700.css';
import '@fontsource/raleway/800.css';

const { Content, Footer } = Layout;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content className="px-5">
        <Component {...pageProps} />
      </Content>
      <Footer>Meta © 2022</Footer>
    </Layout>
  );
}

export default MyApp;
