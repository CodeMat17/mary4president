import Image from 'next/image';
import React from 'react';

function NavHeader() {
  return (
    <header className='sticky top-0 z-50 bg-gradient-to-r from-lime-300 to-lime-50'>
      <nav className='flex items-center space-x-2 px-4 py-1'>
        <div className='bg-lime-500 rounded-full p-1 border-2 border-white'>
          <div className='relative w-[35px] h-[35px] '>
            <Image
              alt='logo'
              src='/logo.webp'
              priority
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>

        <p className='text-lime-600 font-semibold tracking-wide text-xl'>
          Mary 4 President
        </p>
      </nav>
    </header>
  );
}

export default NavHeader;
