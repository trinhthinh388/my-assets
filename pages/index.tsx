import type { NextPage } from 'next';
import Searchbar from '../components/Searchbar';

const Home: NextPage = () => {
  return (
    <div
      style={{ minHeight: 'calc(100vh - 70px)' }}
      className="flex min-h-full items-center justify-center"
    >
      <div className="w-2/4 blur-container">
        <h2 className="text-4xl font-bold">Track your history</h2>
        <h4 className="font-medium">Supported chains</h4>

        <Searchbar />
      </div>
    </div>
  );
};

export default Home;
