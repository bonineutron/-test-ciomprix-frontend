export interface ButtonProps {
   label: string | JSX.Element;
   customClass?: string;
   type?: 'submit';
   onClick?: () => void;
}

export function Button(props: ButtonProps) {
   return (
      <button type={props.type || 'button'} onClick={props.onClick} className={props.customClass || ''}>
         <p>{props.label}</p>
      </button>
   );
}
