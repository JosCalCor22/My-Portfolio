/* Hooks */
import { useState } from 'react'

/* Components */
import { ButtonComponent } from '../../ui/button'

const Goodbye = ({ setCurrentBody }) => {
  const [hover, setHover] = useState('')
  return (
    <div className='w-full h-full flex flex-col justify-center items-center gap-4'>
      <h1 className='text-seccolor text-4xl font-bold font-secfont text-center'>Gracias por visualizar mi portafolio</h1>
      <h2 className='text-seccolor text-xl font-prifont text-center'>Hecho con dedicación, una buena playlist y la convicción de que la tecnología debe ser, ante todo, humana.</h2>
      <div className='flex flex-col gap-2.5'>
        <div onMouseEnter={() => setHover('home')} onMouseLeave={() => setHover('')}>
          <ButtonComponent
            whereIs='goodbye'
            text='Inicio'
            typeButton='home'
            isHover={hover}
            onClick={() => setCurrentBody('cover')}
          />
        </div>
        <div onMouseEnter={() => setHover('phone')} onMouseLeave={() => setHover('')}>
          <ButtonComponent
            whereIs='goodbye'
            text='Contáctame'
            typeButton='phone'
            isHover={hover}
            onClick={() => setCurrentBody('contact')}
          />
        </div>
      </div>
    </div>
  )
}

export { Goodbye }
