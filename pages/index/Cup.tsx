import Image from 'next/image';

export default function Cup() {
  return (
    <div
      style={{
        right: -50,
        bottom: -10,
      }}
      className="lg:hidden block fixed rotate-45"
    >
      <Image
        priority
        src="/png/cup.png"
        alt="Big coffee machine"
        objectFit="contain"
        width={300}
        height={300}
        quality={100}
      />
    </div>
  );
}
