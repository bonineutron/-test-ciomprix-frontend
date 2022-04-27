import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { useRouter } from 'next/dist/client/router';
import { css } from '@emotion/react';
import { Button } from '../../atoms/button/button';
import { ProcessEnum } from '../../../shared/enums/session.emun';
import { IUserData } from '../../../shared/interfaces/signin.interface';
import { Routes } from '../../../shared/enums/routes.enum';
import { useTokenContext, AppContextType } from '../../../shared/context/token.context';
import { setTokenData } from '../../../shared/services/local-storage.services';
import ScaleLoader from 'react-spinners/ScaleLoader';
import HomeService from '../../../shared/services/home.service';
import styles from './signin.module.scss';

export interface SigninProps {
   changeProcess: React.Dispatch<React.SetStateAction<ProcessEnum>>;
}

export function Signin(props: SigninProps) {
   const [loading, setLoading] = useState<boolean>(false);
   const [userData, setUserData] = useState<IUserData>({ email: '', password: '' });
   const { storeTokenDetails }: AppContextType = useTokenContext();
   const router = useRouter();
   const override = css`
      margin: 0 auto;
      padding-bottom: 20px;
   `;
   const handleSubmit = async (e: any) => {
      e.preventDefault();
      setLoading(true);
      const signinResponse = await HomeService.signin(userData);
      if (signinResponse.token) {
         setLoading(false);
         setTokenData(signinResponse.token);
         storeTokenDetails(signinResponse);
         router.push(Routes.users);
      }
      if (signinResponse.message) {
         setLoading(false);
         toast.error(signinResponse.message, {
            style: {
               background: '#212121',
               color: 'white'
            }
         });
      }
   };
   return (
      <div className='signin text-center'>
         <form onSubmit={handleSubmit} className='flex flex-col'>
            <input
               type='mail'
               placeholder='Ingrese su correo'
               onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setUserData({ ...userData, email: e.target.value })
               }
               name='mail'
               className='p-2 px-4 border-[1px] border-orange-400 rounded-md outline-none mb-4 text-center'
            />
            <input
               type='password'
               placeholder='Ingrese su contraseña'
               onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setUserData({ ...userData, password: e.target.value })
               }
               name='password'
               className='p-2 px-4 border-[1px] border-orange-400 rounded-md outline-none mb-8 text-center'
            />
            <ScaleLoader color='#000' loading={loading} css={override} />
            <Button
               label='Iniciar sesion'
               customClass={`px-4 py-2 rounded-md text-white font-black bg-orange-400`}
               type='submit'
            />
         </form>
         <Button
            label='Crear cuenta nueva'
            customClass={`pt-1 font-normal italic mt-6 border-b-[1px] border-black`}
            onClick={() => props.changeProcess(ProcessEnum.signup)}
         />
         <Toaster />
      </div>
   );
}
