import { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import { Button } from '../../atoms/button/button';
import { Modal } from '../../molecules/modal/modal';
import { Session } from '../session/session';
import { Routes } from '../../../shared/enums/routes.enum';
import { getTokenData, clearAllLocalStorage } from '../../../shared/services/local-storage.services';
import { useTokenContext, AppContextType } from '../../../shared/context/token.context';
import styles from './topbar.module.scss';

export function Topbar() {
   const { tokenDetails }: AppContextType = useTokenContext();
   const [showModal, setShowModal] = useState<boolean>(false);
   const [token, setToken] = useState<string>('');
   const router = useRouter();
   useEffect(() => {
      setToken(getTokenData());
   }, [tokenDetails.token]);
   const closeSession = () => {
      clearAllLocalStorage();
      setToken('');
      router.push(Routes.home);
   };
   return (
      <div className='topbar fixed h-16 w-screen top-0 flex justify-center items-center bg-white drop-shadow-xl z-10'>
         <div className='w-[90%] md:w-[70%] flex justify-between'>
            <img src='/logo-topbar.svg' alt='logo' className='h-[40px]' />
            <Button
               label={token ? 'Salir' : ' Ingresar'}
               onClick={token ? () => closeSession() : () => setShowModal(true)}
               customClass={`px-4 py-2 rounded-md text-white font-black bg-orange-400 `}
            />
         </div>
         {showModal && <Modal component={<Session />} showModal={showModal} setShowModal={setShowModal} />}
      </div>
   );
}
