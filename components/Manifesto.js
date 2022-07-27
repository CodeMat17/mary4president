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
      <p className='pt-12'>
        Looking at the the capacity and experiences I gathered in cause of
        serving as I mentioned above, I therefore solicit for your votes. A vote
        for me will bring about continuity, stability and a deep dive to
        ensuring that the stipulated statndards are kept whilst bringing aboard
        the most recent modus operandi of cooperative soceities.
      </p>
      <p className='pt-4 pb-8'>
        Find below the summary of my action goals if voted to power as I hope
        you will do.
      </p>
      <div className='pt-8 text-center'>
        <div className='flex justify-center'>
          <FontAwesomeIcon
            icon={faUserShield}
            className='w-12 h-12 text-lime-700/80'
          />
        </div>

        <h3 className='text-lime-700/80 font-semibold text-lg'>
          Financial Security
        </h3>
        <p className='pt-2'>
          The immediate past administrators did so well in this regards and a
          vote for me will ensure that the standards are maintained and built
          upon.
        </p>
      </div>
      <div className='pt-8 text-center'>
        <div className='flex justify-center'>
          <FontAwesomeIcon
            icon={faPersonArrowUpFromLine}
            className='w-16 h-16 text-lime-700/80'
          />
        </div>
        <h3 className='font-semibold text-lg text-lime-700/80'>Empowerment</h3>
        <p className='pt-2'>
          Benefitial external opportunities will be listened to and also search
          within where necessary, to empower the NFVCB cooperators for capacity
          growth and more.
        </p>
      </div>

      <div className='pt-8 text-center'>
        <div className='flex justify-center'>
          <FontAwesomeIcon
            icon={faPeopleLine}
            className='w-16 h-16 text-lime-700/80'
          />
        </div>
        <h3 className='font-semibold text-lg text-lime-700/80'>
          Inclusive Administration
        </h3>
        <p className='pt-2'>
          The immediate past administration of our dear cooperative society
          brought onboard the zonal and centre representatives for
          inclusiveness. This is commendable and my administration, if voted
          for, will ensure that the representatives of the zones and centre are
          on the decision making table.
        </p>
      </div>

      <div className='pt-8 text-center'>
        <div className='flex justify-center'>
          <FontAwesomeIcon
            icon={faBagShopping}
            className='w-12 h-12 text-lime-700/80'
          />
        </div>
        <h3 className='font-semibold text-lg text-lime-700/80'>
          Secure and Better Retirement
        </h3>
        <p className='pt-2'>
          The retirement plan for the retired members have never been toyed with
          in the past. It is therefore very pertinent that it is maintained and
          built upon.
        </p>
      </div>

      <div className='pt-8'>
        <div className='flex justify-center'>
          <FontAwesomeIcon
            icon={faChalkboard}
            className='w-12 h-12 text-lime-700/80'
          />
        </div>
        <h3 className='text-center font-semibold text-lg text-lime-700/80'>
          Total Digital Migration
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
