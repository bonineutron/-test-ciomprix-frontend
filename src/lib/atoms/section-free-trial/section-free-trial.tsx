import { Button } from '../button/button';
import styles from './section-free-trial.module.scss';

export function SectionFreeTrial() {
   return (
      <div className='w-full flex justify-center py-10 bg-orange-400'>
         <div className='w-[90%] md:w-[70%] flex flex-col md:flex-row justify-between items-center text-white'>
            <p className='font-medium pb-4 md:pr-10 md:pb-0'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas corrupti nobis tempore cum deserunt
               placeat.
            </p>
            <Button
               label='START YOUR FREE TRIAL'
               customClass='min-w-[300px] py-2 rounded-md bg-black font-black text-xl'
            />
         </div>
      </div>
   );
}
