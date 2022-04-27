import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { useRouter } from 'next/dist/client/router';
import { css } from '@emotion/react';
import { Button } from '../../atoms/button/button';
import { ProcessEnum } from '../../../shared/enums/session.emun';
import { INewUserData } from '../../../shared/interfaces/signup.interface';
import { setTokenData } from '../../../shared/services/local-storage.services';
import { Routes } from '../../../shared/enums/routes.enum';
import { useTokenContext, AppContextType } from '../../../shared/context/token.context';
import ScaleLoader from 'react-spinners/ScaleLoader';
import HomeService from '../../../shared/services/home.service';
import styles from './signup.module.scss';

export interface SignupProps {
   changeProcess: React.Dispatch<React.SetStateAction<ProcessEnum>>;
}

export function Signup(props: SignupProps) {
   const [loading, setLoading] = useState<boolean>(false);
   const [newUserData, setNewUserData] = useState<INewUserData>({
      username: '',
      email: '',
      password: ''
   });
   const { storeTokenDetails }: AppContextType = useTokenContext();
   const router = useRouter();
   const override = css`
      margin: 0 auto;
      padding-bottom: 20px;
   `;
   const handleSubmit = async (e: any) => {
      e.preventDefault();
      setLoading(true);
      const singupResponse = await HomeService.signup(newUserData);
      if (singupResponse.token) {
         setLoading(false);
         setTokenData(singupResponse.token);
         storeTokenDetails(singupResponse);
         router.push(Routes.users);
      }
      if (singupResponse.message) {
         setLoading(false);
         toast.error(singupResponse.message, {
            style: {
               background: '#212121',
               color: 'white'
            }
         });
      }
   };
   return (
      <div className='signup text-center'>
         <form onSubmit={handleSubmit} className='flex flex-col'>
            <input
               type='text'
               placeholder='nombre de usuario'
               onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNewUserData({ ...newUserData, username: e.target.value })
               }
               name='username'
               className='p-2 px-4 border-[1px] border-orange-400 rounded-md outline-none mb-4 text-center'
            />
            <input
               type='mail'
               placeholder='correo'
               onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNewUserData({ ...newUserData, email: e.target.value })
               }
               name='mail'
               className='p-2 px-4 border-[1px] border-orange-400 rounded-md outline-none mb-4 text-center'
            />
            <input
               type='password'
               placeholder='contraseña'
               onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNewUserData({ ...newUserData, password: e.target.value })
               }
               name='password'
               className='p-2 px-4 border-[1px] border-orange-400 rounded-md outline-none mb-8 text-center'
            />
            <ScaleLoader color='#000' loading={loading} css={override} />
            <Button
               label='Crear cuenta'
               customClass={`px-4 py-2 rounded-md text-white font-black bg-orange-400`}
               type='submit'
            />
         </form>
         <Button
            label='Ya tengo una cuenta'
            customClass={`pt-1 font-normal italic mt-6 border-b-[1px] border-black`}
            onClick={() => props.changeProcess(ProcessEnum.signin)}
         />
         <Toaster />
      </div>
   );
}
