import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Vote() {
  return (
    <div className='py-12 px-8 text-center'>
      <div className='flex items-center justify-center space-x-2'>
        <FontAwesomeIcon
          icon={faCalendarCheck}
          className='w-12 h-12 text-lime-600'
        />
        <div>
          <h2 className='text-center font-bold text-xl text-lime-500 tracking-wide'>
            VOTE FOR ME
          </h2>
          <section className='h-1 w-28 bg-gradient-to-r from-lime-500 mx-auto'></section>
        </div>
      </div>

      <p className='pt-4 font-bold text-3xl tracking-wider'>Mary Mathias</p>
      <p className='font-bold text-3xl tracking-wider'>Eseoghene</p>
      <div className='relative flex justify-center pt-6'>
        <div className='bg-lime-600 w-[300px] h-12 blur-lg'></div>
        <p className='absolute top-4 pt-4 text-white font-semibold text-lg'>
          For NFVCB Coop. President
        </p>
      </div>
    </div>
  );
}

export default Vote;
