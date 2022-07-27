import Image from 'next/image';

function Hero() {
  return (
    <div className='relative'>
      <div className='relative w-full h-[500px] lg:h-[650px]'>
        <Image
          alt='Mary photo'
          src='/mary.webp'
          layout='fill'
          priority
          objectFit='cover'
        />
      </div>
      <div className='absolute bottom-28 lg:bottom-64 px-8 space-y-3'>
        <h1 className='font-bold text-white text-4xl lg:text-5xl tracking-widest'>
          Mary Matthias
        </h1>
        <p className='bg-gradient-to-r from-lime-500 font-semibold text-white rounded px-1 sm:text-xl'>
          For NFVCB Coop. President
        </p>
      </div>
    </div>
  );
}

export default Hero;
