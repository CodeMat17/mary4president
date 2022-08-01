import Link from 'next/link';

function Footer() {
  return (
    <div className='bg-lime-800 px-8 py-6 flex flex-col justify-center '>
      <p className='text-sm text-center text-white/50 max-w-2xl mx-auto'>
        For your website, portfolio page, online store (e-commerce), e-diary,
        finance tracking or banking apps, school and hotel management software
        solutions, etc, kindly reach us{' '}
        <a
          href='mailto:codemat.biz@gmail.com?subject=I need your services'
          className='text-blue-500 underline'>
          here.
        </a>
      </p>
      <code className='text-center text-sm pt-4 text-lime-500/90'>
        Courtesy:{' '}
        <Link href='https://matthewchukwu.dev'>
          <a className='text-amber-500 hover:underline'>Matthew Chukwu</a>
        </Link>
        , Calabar Centre.
      </code>
    </div>
  );
}

export default Footer;
