import { Footer } from '../../atoms/footer/footer';
import { SearchUsers } from '../../organisms/search-users/search-users';
import { Topbar } from '../../organisms/topbar/topbar';
import styles from './profile-template.module.scss';

export function UsersTemplate() {
   return (
      <div>
         <div className='w-full flex flex-col items-center'>
            <Topbar />
            <SearchUsers />
            <Footer customClass='bg-white' />
         </div>
      </div>
   );
}
