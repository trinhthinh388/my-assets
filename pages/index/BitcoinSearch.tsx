import Image from 'next/image';

export default function BitcoinSearch() {
  return (
    <div className="block">
      <Image
        priority
        src="/png/bitcoin-search.png"
        alt="Bitcoin Search"
        objectFit="contain"
        width={250}
        height={250}
        quality={100}
      />
    </div>
  );
}
