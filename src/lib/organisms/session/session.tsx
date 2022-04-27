import { useState } from 'react';
import { Signin } from '../../molecules/signin/signin';
import { Signup } from '../../molecules/signup/signup';
import { ProcessEnum } from '../../../shared/enums/session.emun';
import styles from './session.module.scss';

export function Session() {
   const [process, setProcess] = useState<ProcessEnum>(ProcessEnum.signin);
   return (
      <div>
         {process === ProcessEnum.signin ? (
            <Signin changeProcess={setProcess} />
         ) : (
            <Signup changeProcess={setProcess} />
         )}
      </div>
   );
}
