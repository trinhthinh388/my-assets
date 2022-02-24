import type { NextPage } from 'next';
import Searchbar from '../components/Searchbar';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div
        style={{
          minHeight: '30vh',
        }}
        className="relative h-full w-full"
      >
        <Image
          priority
          src="/png/big-machine.png"
          alt="Big coffee machine"
          layout="fill"
          objectFit="contain"
          quality={100}
        />
      </div>
    </div>
  );
};

export default Home;
