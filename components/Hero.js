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
      <div className='absolute bottom-16 lg:bottom-64 px-8 space-y-3'>
        <p className='font-semibold text-xl text-lime-700'>Vote for</p>
        <div className=''>
          <h1 className='font-bold text-white text-4xl lg:text-5xl tracking-widest'>
          Mary Mathias
        </h1>
        <h1 className='font-bold text-white text-4xl lg:text-5xl tracking-widest'>
          Eseoghene
        </h1>
        </div>
        
        <p className='bg-gradient-to-r from-lime-500 font-semibold text-white rounded px-1 sm:text-xl'>
          For NFVCB Coop. <span className='text-red-600'>President</span> 
        </p>
      </div>
    </div>
  );
}

export default Hero;
