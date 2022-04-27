import { Button } from '../../atoms/button/button';
import styles from './wallpaper-home.module.scss';

export function WallpaperHome() {
   return (
      <div className={`${styles.wallpaperHome} h-screen w-full flex justify-center items-center`}>
         <div className='text-white text-center w-[90%] md:w-[40%]'>
            <h1 className='text-3xl'>A Powerful Influencer Marketing Platform for Advertisers</h1>
            <Button
               label='START YOUR FREE TRIAL'
               customClass='text-md mt-8 bg-orange-400 p-3 px-8 rounded-md font-black '
            />
         </div>
      </div>
   );
}
