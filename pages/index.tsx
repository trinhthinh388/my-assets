import type { NextPage } from 'next';
import Card from '../components/Card';
import Image from 'next/image';
import Searchbar from '../components/Searchbar';
import CoffeeCup from './index/CoffeeCup';
import Cup from './index/Cup';
import Cake from './index/Cake';

const Home: NextPage = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <Cup />
      <Cake />

      <Card
        style={{
          minHeight: '70vh',
        }}
        className="max-w-full lg:max-w-3xl w-screen flex lg:items-center"
      >
        <div className="w-full flex-1 lg:w-1/2 flex flex-col">
          <h1 className="font-extrabold text-3xl">Track your transactions</h1>

          {/* <Searchbar /> */}

          <span>Supported chains</span>
        </div>
        <div
          style={{ minHeight: 300 }}
          className="hidden lg:block relative h-full w-1/2"
        >
          <Image
            priority
            src="/png/coffee-machine.png"
            alt="Big coffee machine"
            layout="fill"
            objectFit="contain"
            quality={100}
          />
        </div>
        <CoffeeCup />
      </Card>
    </div>
  );
};

export default Home;
