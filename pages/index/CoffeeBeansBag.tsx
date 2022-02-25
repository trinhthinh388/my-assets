import Image from 'next/image';

export default function CoffeeBeansBag() {
  return (
    <div
      style={{
        right: -170,
        bottom: -180,
      }}
      className="hidden rotate-[-25deg]  lg:block fixed"
    >
      <Image
        priority
        src="/png/coffee-beans-bag.png"
        alt="Big coffee machine"
        objectFit="contain"
        width={500}
        height={500}
        quality={100}
      />
    </div>
  );
}
