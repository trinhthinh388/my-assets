import type { NextPage } from 'next';
import Image from 'next/image';
import Searchbar from '../components/Searchbar';
import BitcoinSearch from './index/BitcoinSearch';

const Home: NextPage = () => {
  return (
    <>
      <div className="from-primary h-full to-secondary text-primary-content -mt-[4rem] flex flex-col items-center bg-gradient-to-br pt-32">
        <div className="hero-content w-full max-w-6xl flex-col justify-between">
          <h1 className="font-titlepy-4 text-center font-extrabold">
            <div className="text-5xl lg:text-7xl">Coffeephin</div>
          </h1>
          <div className="text-md mb-5">
            Place where you can easily obtain your crypto investments.
          </div>
          <Searchbar />
        </div>
      </div>

      <div className="flex w-full justify-center py-20 items-center flex-col">
        <h2 className="mb-5 text-md font-bold">Supported chain</h2>
        <div className="footer w-auto mx-auto max-w-6xl">
          <div className="flex items-center text-4xl font-bold mx-4">
            <Image
              alt="coin"
              src="/png/crypto/bnb.png"
              width={48}
              height={48}
            />
            <span className="opacity-50">BSC</span>
          </div>
          <div className="flex items-center text-4xl font-bold mx-4">
            <Image
              alt="coin"
              src="/png/crypto/celo.png"
              width={48}
              height={48}
            />
            <span className="opacity-50">CELO</span>
          </div>
          <div className="flex items-center text-4xl font-bold mx-4">
            <Image
              alt="coin"
              src="/png/crypto/bitcoin.png"
              width={48}
              height={48}
            />
            <span className="opacity-50">BITCOIN</span>
          </div>
        </div>
      </div>

      <div className="hero from-primary to-accent text-primary-content min-h-screen bg-gradient-to-br">
        <div className="hero-content flex flex-col mx-auto max-w-md text-center md:max-w-full">
          <div>
            <h2 className="mb-2 text-4xl font-extrabold md:text-6xl">
              Powerful tool
            </h2>
            <h3 className="mb-5 text-3xl font-bold">
              Simply enter your address
            </h3>
          </div>

          <div className="my-20">
            <BitcoinSearch />
          </div>
        </div>
      </div>

      <div>
        <div className="hero-content flex flex-col mx-auto max-w-md text-center md:max-w-full py-20">
          <div>
            <h2 className="mt-20 mb-5 text-2xl font-extrabold md:text-4xl">
              Start in seconds.
            </h2>
            <div className="mb-2">
              Connect your crypto wallet to start using the app in seconds.
            </div>
            <div className="font-bold">No registration needed.</div>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-base-200 text-base-content">
          <footer className="footer mx-auto max-w-6xl px-4 py-20">
            <div>
              <div className="font-title inline-flex text-3xl">
                <span className="text-primary font-bold lowercase">coffee</span>
                <span className="text-base-content font-bold">phin.</span>
              </div>
              <p className="opacity-50">Free tool for cryptoholics.</p>
            </div>

            <div>
              <span className="footer-title">Guides</span>
              <a href="/docs/install" className="link link-hover">
                How to install
              </a>
              <a href="/docs/install" className="link link-hover">
                How to install
              </a>
              <a href="/docs/install" className="link link-hover">
                How to install
              </a>
              <a href="/docs/install" className="link link-hover">
                How to install
              </a>
              <a href="/docs/install" className="link link-hover">
                How to install
              </a>
            </div>

            <div>
              <span className="footer-title">Links</span>
              <a href="/docs/install" className="link link-hover">
                How to install
              </a>
              <a href="/docs/install" className="link link-hover">
                How to install
              </a>
              <a href="/docs/install" className="link link-hover">
                How to install
              </a>
              <a href="/docs/install" className="link link-hover">
                How to install
              </a>
            </div>

            <div>
              <span className="footer-title">Available on</span>
              <a href="/docs/install" className="link link-hover">
                How to install
              </a>
              <a href="/docs/install" className="link link-hover">
                How to install
              </a>
              <a href="/docs/install" className="link link-hover">
                How to install
              </a>
            </div>

            <div>
              <span className="footer-title">Try online</span>
              <a href="/docs/install" className="link link-hover">
                How to install
              </a>
              <a href="/docs/install" className="link link-hover">
                How to install
              </a>
            </div>
          </footer>
        </div>
        <footer className="footer footer-center border-base-300 bg-base-200 text-base-content border-t px-4 py-10">
          <div className="flex w-full min-h-[100px] max-w-6xl flex-col items-center justify-between sm:flex-row">
            <div />
            <div>
              <span className="footer-title">Social</span>
              <div className="grid grid-flow-col gap-4">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
