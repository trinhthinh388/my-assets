import type { AppProps } from 'next/app';
import { Layout } from 'antd';
import '../styles/global.css';
import 'antd/dist/antd.css';
import '@fontsource/roboto';

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
