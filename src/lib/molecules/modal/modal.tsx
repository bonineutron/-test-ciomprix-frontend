import { AiFillCloseCircle } from 'react-icons/ai';
import { Button } from '../../atoms/button/button';
import styles from './modal.module.scss';

export interface ModalProps {
   component: JSX.Element;
   showModal: boolean;
   setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Modal(props: ModalProps) {
   const closeIcon: JSX.Element = <AiFillCloseCircle />;
   return (
      <div
         className={`${
            props.showModal ? 'visible' : 'invisible'
         } fixed h-screen w-screen top-0 flex justify-center items-center bg-[#0000004D]`}>
         <div className='relative h-[80vh] w-[80vw] flex justify-center items-center bg-white rounded-md'>
            <Button
               onClick={() => props.setShowModal(false)}
               label={closeIcon}
               customClass='absolute text-3xl right-3 top-3 text-orange-400'
            />
            <div>{props.component}</div>
         </div>
      </div>
   );
}
