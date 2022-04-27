import { useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { AiFillCloseCircle } from 'react-icons/ai';
import { css } from '@emotion/react';
import { useTokenContext, AppContextType } from '../../../shared/context/token.context';
import { Roles } from '../../../shared/enums/roles.enum';
import { IUsersData } from '../../../shared/interfaces/search-users.interface';
import { getTokenData } from '../../../shared/services/local-storage.services';
import SearchUsersService from '../../../shared/services/search-users.service';
import ScaleLoader from 'react-spinners/ScaleLoader';
import styles from './search-users.module.scss';

export function SearchUsers() {
   const { tokenDetails }: AppContextType = useTokenContext();
   const [users, setUsers] = useState<IUsersData[]>(null);
   const [loading, setLoading] = useState<boolean>(true);
   const override = css`
      margin: auto;
=
   `;
   useEffect(() => {
      searchProfile();
   }, [tokenDetails.token]);
   async function searchProfile() {
      const searchResponse = await SearchUsersService.searchProfile(tokenDetails.token || getTokenData() || '');
      if (searchResponse.users) {
         setLoading(false);
         setUsers(searchResponse.users);
      }
      if (searchResponse.message) {
         setLoading(false);
         toast.error(searchResponse.message, {
            style: {
               background: '#212121',
               color: 'white'
            }
         });
      }
   }
   return loading ? (
      <div className='min-h-screen w-full bg-stone-200 py-32 flex flex-col items-center'>
         <ScaleLoader color='#000' loading={loading} css={override} height='200' width='20' radius='20' />
         <Toaster />
      </div>
   ) : (
      <div className='min-h-screen w-full bg-stone-200 py-32 flex flex-col items-center'>
         <h2 className='font-medium text-2xl mb-4'>Listado de Usuarios:</h2>
         <div className='w-[90%] md:w-[70%] flex flex-wrap justify-between'>
            {users ? (
               users.map((data: IUsersData, index) => {
                  return (
                     <div
                        key={index}
                        className='w-[350px] h-[150px] bg-orange-400 rounded-md my-2 flex flex-col items-center justify-center text-white mx-auto'>
                        <div className='text-lg font-bold'>{data.username}</div>
                        <div className='text-lg font-bold'>{data.email}</div>
                        <div className='mt-4 bg-black text-white rounded-md py-2 px-4'>
                           {data.roles.map((role) => (role === Roles.admin ? 'ADMINISTRADOR' : 'USUARIO'))}
                        </div>
                     </div>
                  );
               })
            ) : (
               <div className='cardProfile h-[200px] w-[90%] sm:w-[400px] my-10 flex flex-col items-center justify-center bg-white rounded-md mx-auto'>
                  <AiFillCloseCircle className='text-red-500 text-6xl' />
                  <h1 className='text-2xl font-semibold pt-4'>No tiene acceso a esta ruta!</h1>
               </div>
            )}
         </div>
         <Toaster />
      </div>
   );
}
