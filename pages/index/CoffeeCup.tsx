import Image from 'next/image';

export default function CoffeeCup() {
  return (
    <div
      style={{
        top: -150,
        left: '25%',
      }}
      className="hidden rotate-[224deg] lg:block fixed"
    >
      <Image
        priority
        src="/png/coffee-cup.png"
        alt="Big coffee machine"
        objectFit="contain"
        width={350}
        height={350}
        quality={100}
      />
    </div>
  );
}
