import styles from './section-people.module.scss';

export function SectionPeople() {
   return (
      <div className='w-full bg-stone-200 pt-16 flex flex-col items-center'>
         <div className='w-[90%] md:w-[20%] pb-10 my-auto text-center'>
            <h2 className='mb-2 text-2xl font-medium'>Our People</h2>
            <p>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam velit eos doloribus repudiandae eum.
            </p>
         </div>
         <div className='w-[90%] md:w-[70%] flex flex-wrap justify-between'>
            <div className='w-[400px] pb-16 mx-auto px-2'>
               <img
                  src='https://cdn.pixabay.com/photo/2016/01/10/22/07/woman-1132617_960_720.jpg'
                  alt='img-1'
                  className='w-full'
               />
               <h3 className='font-black text-xl py-3'>Laura - Ciomprix</h3>
               <p className='text-sm'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, architecto.
               </p>
               <h4 className='font-medium italic pt-4'>Diseñadora</h4>
            </div>
            <div className='w-[400px] pb-16 mx-auto px-2'>
               <img
                  src='https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg'
                  alt='img-2'
                  className='w-full'
               />
               <h3 className='font-black text-xl py-3'>Carlos - Ciomprix</h3>
               <p className='text-sm'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, architecto.
               </p>
               <h4 className='font-medium italic pt-4'>Director</h4>
            </div>
            <div className='w-[400px] pb-16 mx-auto px-2'>
               <img
                  src='https://cdn.pixabay.com/photo/2019/02/11/20/20/woman-3990680_960_720.jpg'
                  alt='img-3'
                  className='w-full'
               />
               <h3 className='font-black text-xl py-3'>Valentina - Ciomprix</h3>
               <p className='text-sm'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, architecto.
               </p>
               <h4 className='font-medium italic pt-4'>Modelo</h4>
            </div>
         </div>
      </div>
   );
}
