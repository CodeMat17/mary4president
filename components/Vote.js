import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Vote() {
  return (
    <div className='py-12 px-8'>
      <div className='flex items-center justify-center space-x-2'>
        <FontAwesomeIcon
          icon={faCalendarCheck}
          className='w-12 h-12 text-lime-700/60'
        />
        <div>
          <h2 className='text-center font-bold text-xl text-lime-700/60 tracking-wide'>
            VOTE FOR ME
          </h2>
          <section className='h-1 w-28 bg-gradient-to-r from-lime-500 mx-auto'></section>
        </div>
      </div>

      <p className='pt-2'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
        eligendi iusto veritatis unde? Deleniti omnis, quam laborum nostrum at
        saepe quae, excepturi rerum, dolor maxime eos similique quaerat
        voluptatum nesciunt consectetur ab. Natus, repellat.
      </p>
    </div>
  );
}

export default Vote;
