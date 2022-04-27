import styles from './footer.module.scss';

export interface FooterProps {
   customClass?: string;
}

export function Footer(props: FooterProps) {
   return (
      <div className={`footer w-full bg-stone-200 py-8 flex justify-center items-center ${props.customClass || ''}`}>
         <div className='italic mr-4'>Hecho por:</div>
         <h2 className='text-xl font-bold'>Andres Bonilla</h2>
      </div>
   );
}
