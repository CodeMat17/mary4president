import {
  faBagShopping,
  faChalkboardUser,
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
      <p className='pt-12  max-w-3xl mx-auto'>
        Looking at the the capacity and experiences I gathered in cause of
        serving as I mentioned above, I therefore solicit for your votes. A vote
        for me will bring about continuity, stability and a deep dive to
        ensuring that the stipulated statndards are kept whilst bringing aboard
        the most recent modus operandi of cooperative soceities.
      </p>
      <p className='pt-4 pb-8 max-w-3xl mx-auto'>
        Find below the summary of my action goals if voted to power as I hope
        you will do.
      </p>

      <div className='text-center pt-8 max-w-3xl mx-auto grid gap-8 sm:grid-cols-2'>
        <div>
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
        <div>
          <div className='flex justify-center'>
            <FontAwesomeIcon
              icon={faPersonArrowUpFromLine}
              className='w-12 h-12 text-lime-700/80'
            />
          </div>
          <h3 className='font-semibold text-lg text-lime-700/80'>
            Empowerment
          </h3>
          <p className='pt-2'>
            Benefitial external opportunities will be listened to and also we
            will search within where necessary, to empower the NFVCB cooperators
            for capacity growth and more.
          </p>
        </div>

        <div>
          <div className='flex justify-center'>
            <FontAwesomeIcon
              icon={faPeopleLine}
              className='w-12 h-12 text-lime-700/80'
            />
          </div>
          <h3 className='font-semibold text-lg text-lime-700/80'>
            Inclusive Administration
          </h3>
          <p className='pt-2'>
            The immediate past administration of our dear cooperative society
            brought onboard the zonal and centre representatives for
            inclusiveness. This is commendable and my administration, if voted
            for, will ensure that the representatives of the zones and centre
            are on the decision making table. Other committees will be created
            across board to ensure absolute implementation of policies for the
            success of the administration.
          </p>
        </div>

        <div>
          <div className='flex justify-center'>
            <FontAwesomeIcon
              icon={faBagShopping}
              className='w-12 h-12 text-lime-700/80'
            />
          </div>
          <h3 className='font-semibold text-lg text-lime-700/80'>
            Secure and Better Retirement
          </h3>
          <p className='pt-2 max-w-3xl mx-auto'>
            The retirement plan for the retired members have never been toyed
            with in the past. It is therefore very pertinent that it is
            maintained and built upon. Stiffer policies will be made to ensure
            that the retirement packages are secured, devoid of mismanagement so
            that retired members can smile home with a broader smile on their
            faces.
          </p>
        </div>

        <div>
          <div className='flex justify-center'>
            <FontAwesomeIcon
              icon={faChalkboardUser}
              className='w-12 h-12 text-lime-700/80'
            />
          </div>
          <h3 className='font-semibold text-lg text-lime-700/80'>
            Total Digital Migration
          </h3>
          <p className='pt-2 max-w-3xl mx-auto'>
            Everyday we are greeted with new technologies which futher
            simplifies and makes easy the way we do things. The past
            administration employed digital processes in our dealings, my
            administration, if voted for, will employ technologies that will
            bring to our palms our personal cooperative dealings.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Manifesto;
