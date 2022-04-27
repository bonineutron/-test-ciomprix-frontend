import { Topbar } from '../../organisms/topbar/topbar';
import { WallpaperHome } from '../../molecules/wallpaper-home/wallpaper-home';
import { SectionMission } from '../../atoms/section-mission/section-mission';
import { SectionPeople } from '../../molecules/section-people/section-people';
import { SectionFreeTrial } from '../../atoms/section-free-trial/section-free-trial';
import { Footer } from '../../atoms/footer/footer';
import styles from './home-template.module.scss';

export function HomeTemplate() {
   return (
      <div className='w-full flex flex-col items-center'>
         <Topbar />
         <WallpaperHome />
         <SectionMission />
         <SectionPeople />
         <SectionFreeTrial />
         <Footer />
      </div>
   );
}
