/* Hooks */
import { useState } from 'react'

/* Scripts */
import { educationData } from '../../scripts/education'

/* Components */
import { ButtonComponent } from '../../ui/button'

const Education = () => {
  const [currentCard, setCurrentCard] = useState('sena');

  const filteredData = educationData.filter((item) => item.state === currentCard)

  return (
    <section className='w-[50%] h-full flex-col flex'>
      <h1 className='text-seccolor text-4xl font-bold font-secfont pt-3'>Aprendizaje Continuo</h1>

      {
        filteredData.map((item) => (
          <div key={item.id} className='py-5'>
            <h2 className='text-seccolor text-2xl font-bold font-secfont'>{item.name}</h2>
            <ul className='flex flex-col gap-2 py-4 pl-8'>
              <div className='flex gap-2'>
                <li className='text-seccolor list-disc font-bold'>Duración:</li>
                <p className='text-seccolor'>{item.duration}</p>
              </div>
              <div className='flex gap-2'>
                <li className='text-seccolor list-disc font-bold'>Instituto:</li>
                <p className='text-seccolor'>{item.institution}</p>
              </div>
              <div className='flex gap-2'>
                <li className='text-seccolor w-fit wrap list-disc font-bold whitespace-nowrap'>Puntos Claves:</li>
                <div className='flex flex-col gap-2'>
                  <p className='text-seccolor'>{item.keypoints.key1}</p>
                  <p className='text-seccolor'>{item.keypoints.key2}</p>
                  <p className='text-seccolor'>{item.keypoints.key3}</p>
                </div>
              </div>
            </ul>

            <ButtonComponent
              onClick={() => setCurrentCard(item.nextCard)}
              text='Siguiente'
              whereIs='education'
            />
          </div>
        ))
      }
    </section>
  );
};

export { Education };