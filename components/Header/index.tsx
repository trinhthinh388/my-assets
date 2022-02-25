import { Player } from '@lottiefiles/react-lottie-player';
import lotSrc from '../../public/lotties/icon.json';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="min-h-[60px] px-5 lg:px-20 fixed top-0 left-0 w-full flex justify-start z-50">
      <Link passHref={false} href="/">
        <div className="flex flex-row items-center h-full cursor-pointer">
          <Player
            className="w-[40px] h-[60px] text-primary cursor-pointer"
            hover
            src={lotSrc}
          />
          <h1 className="text-black font-extrabold m-0 text-2xl mt-3">
            Coffee phin.
          </h1>
        </div>
      </Link>
    </header>
  );
}
