import {
  faBagShopping,
  faPeopleLine,
  faPersonArrowUpFromLine,
  faUserShield,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Manifesto() {

  return (
    <div className='py-12 px-8 bg-lime-100'>
      <h2 className='text-center font-bold text-xl text-lime-500 tracking-wide'>
        MANIFESTO
      </h2>
      <section className='h-1 w-28 bg-gradient-to-r from-lime-500 mx-auto'></section>
      <div className='pt-8'>
        <div className='flex justify-center'>
          <FontAwesomeIcon
            icon={faUserShield}
            className='w-12 h-12 text-lime-700/60'
          />
        </div>

        <h3 className='text-center font-semibold text-lg'>
          Financial Security
        </h3>
        <p className='pt-2'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
          eligendi iusto veritatis unde? Deleniti omnis, quam laborum nostrum at
          saepe quae, excepturi rerum, dolor maxime eos similique quaerat
          voluptatum nesciunt consectetur ab. Natus, repellat.
        </p>
      </div>
      <div className='pt-8'>
        <div className='flex justify-center'>
          <FontAwesomeIcon
            icon={faPersonArrowUpFromLine}
            className='w-16 h-16 text-lime-700/60'
          />
        </div>
        <h3 className='text-center font-semibold text-lg'>Empowerment</h3>
        <p className='pt-2'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
          eligendi iusto veritatis unde? Deleniti omnis, quam laborum nostrum at
          saepe quae, excepturi rerum, dolor maxime eos similique quaerat
          voluptatum nesciunt consectetur ab. Natus, repellat.
        </p>
      </div>

      <div className='pt-8'>
        <div className='flex justify-center'>
          <FontAwesomeIcon
            icon={faPeopleLine}
            className='w-16 h-16 text-lime-700/60'
          />
        </div>
        <h3 className='text-center font-semibold text-lg'>
          Inclusive Administration
        </h3>
        <p className='pt-2'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
          eligendi iusto veritatis unde? Deleniti omnis, quam laborum nostrum at
          saepe quae, excepturi rerum, dolor maxime eos similique quaerat
          voluptatum nesciunt consectetur ab. Natus, repellat.
        </p>
      </div>

      <div className='pt-8'>
        <div className='flex justify-center'>
          <FontAwesomeIcon
            icon={faBagShopping}
            className='w-12 h-12 text-lime-700/60'
          />
        </div>
        <h3 className='text-center font-semibold text-lg'>
          Secure and Better Retirement
        </h3>
        <p className='pt-2'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
          eligendi iusto veritatis unde? Deleniti omnis, quam laborum nostrum at
          saepe quae, excepturi rerum, dolor maxime eos similique quaerat
          voluptatum nesciunt consectetur ab. Natus, repellat.
        </p>
      </div>
    </div>
  );
}

export default Manifesto;
