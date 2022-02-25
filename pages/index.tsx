import type { NextPage } from 'next';
import Card from '../components/Card';
import Image from 'next/image';
import Searchbar from '../components/Searchbar';
import { Tag, Button } from 'antd';
import CoffeeBeansBag from './index/CoffeeBeansBag';
import Cup from './index/Cup';
import Cake from './index/Cake';
import CoffeeCup from './index/CoffeeCup';
import Cryptography from './index/Cryptography';

const Home: NextPage = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <Cup />
      <Cake />

      <Card className="max-w-full min-h-[60vh] lg:min-h-full lg:max-w-3xl w-screen flex lg:items-center">
        <div className="w-full flex-1 lg:w-1/2 flex flex-col">
          <h1 className="text-primary  font-extrabold text-3xl">
            Track your transactions
          </h1>
          <span className="text-secondary mb-1">Supported chains</span>

          <div className="flex flex-wrap mb-5">
            <Tag
              className="mb-1"
              icon={
                <Image
                  src="/png/crypto/bnb-coin.png"
                  alt="BNB coin"
                  width={20}
                  height={20}
                />
              }
            >
              BSC
            </Tag>
            <Tag
              className="mb-1"
              icon={
                <Image
                  src="/png/crypto/bitcoin.png"
                  alt="Bitcoin"
                  width={20}
                  height={20}
                />
              }
            >
              BITCOIN
            </Tag>
            <Tag
              className="mb-1"
              icon={
                <Image
                  src="/png/crypto/sol.png"
                  alt="Solana"
                  width={20}
                  height={20}
                />
              }
            >
              SOLANA
            </Tag>
            <Tag
              className="mb-1"
              icon={
                <Image
                  src="/png/crypto/polygon.png"
                  alt="Polygon"
                  width={20}
                  height={20}
                />
              }
            >
              POLYGON
            </Tag>
            <Tag
              className="mb-1"
              icon={
                <Image
                  src="/png/crypto/ethereum.png"
                  alt="Ethereum"
                  width={20}
                  height={20}
                />
              }
            >
              ETHEREUM
            </Tag>
          </div>
          <Searchbar />

          <span className="text-secondary mb-1">
            Or choose the profile below
          </span>
          <Button className="w-fit" type="primary" shape="round" size="large">
            Create a profile
          </Button>
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
          <Cryptography />
        </div>
      </Card>

      <CoffeeCup />
      <CoffeeBeansBag />
    </div>
  );
};

export default Home;
