import type { NextPage } from 'next';
import { Button } from 'antd';

const Home: NextPage = () => {
  return (
    <div
      style={{ minHeight: 'calc(100vh - 70px)' }}
      className="flex min-h-full items-center justify-center"
    >
      <Button type="primary">Connect to wallet</Button>
    </div>
  );
};

export default Home;
