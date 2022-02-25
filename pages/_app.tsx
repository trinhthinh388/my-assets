import type { AppProps } from 'next/app';
import { Layout, ConfigProvider } from 'antd';
import 'antd/dist/antd.variable.min.css';
import '../styles/global.scss';
import '@fontsource/raleway';
import '@fontsource/raleway/500.css';
import '@fontsource/raleway/600.css';
import '@fontsource/raleway/700.css';
import '@fontsource/raleway/800.css';
import '@fontsource/raleway/900.css';
import Header from '../components/Header';

const { Content } = Layout;

ConfigProvider.config({
  theme: {
    primaryColor: '#66f',
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider>
      <Layout className="bg-gradient" style={{ minHeight: '100vh' }}>
        <Header />
        <Content className="px-5">
          <Component {...pageProps} />
        </Content>
        {/* <Footer>Meta © 2022</Footer> */}
      </Layout>
    </ConfigProvider>
  );
}

export default MyApp;
