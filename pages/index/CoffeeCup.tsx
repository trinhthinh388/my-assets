import Image from 'next/image';

export default function CoffeeCup() {
  return (
    <div
      style={{
        left: -120,
        bottom: -120,
      }}
      className="hidden lg:block absolute"
    >
      <Image
        priority
        src="/png/coffee-cup.png"
        alt="Big coffee machine"
        objectFit="contain"
        width={300}
        height={300}
        quality={100}
      />
    </div>
  );
}
