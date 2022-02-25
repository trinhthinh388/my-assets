import Image from 'next/image';

export default function Cake() {
  return (
    <div
      style={{
        right: '50%',
        top: -50,
      }}
      className="lg:hidden block fixed rotate-45 -scale-y-100"
    >
      <Image
        priority
        src="/png/cake.png"
        alt="Cake"
        objectFit="contain"
        width={150}
        height={150}
        quality={100}
      />
    </div>
  );
}
