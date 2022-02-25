import Image from 'next/image';

export default function Cryptography() {
  return (
    <div
      style={{
        bottom: -10,
        left: 0,
      }}
      className="lg:block hidden absolute"
    >
      <Image
        priority
        src="/png/cryptography.png"
        alt="Crypto trading"
        objectFit="contain"
        width={100}
        height={100}
        quality={100}
      />
    </div>
  );
}
