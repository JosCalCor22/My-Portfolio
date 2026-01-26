/* Hooks */
import { useState } from 'react'

/* Components */
import { ButtonComponent } from '../../ui/button'


const Contact = () => {
  const [hover, setHover] = useState('')
  return (
    <div className='w-[50%] h-full'>
      <h1 className='text-seccolor text-4xl font-bold font-secfont py-3'>Joseth Calderón</h1>
      <h2 className='text-seccolor text-3xl font-bold font-secfont'>UX Engineer & Product Strategist</h2>
      <div className='flex flex-col gap-2.5 py-5'>
        <p className='text-seccolor text-base font-prifont'>Busco oportunidades donde pueda fusionar la estrategia de producto, el diseño de impacto y la ingeniería frontend. Si buscas a alguien que lidere con empatía y construya con precisión, hablemos.</p>
      </div>
      <div className="grid grid-cols-2 grid-rows-3 gap-2.5">
        <div onMouseEnter={() => setHover('whatsapp')} onMouseLeave={() => setHover('')}>
          <ButtonComponent
            whereIs='contact'
            text='WhatsApp'
            typeButton='whatsapp'
            isHover={hover}
          />
        </div>
        <div onMouseEnter={() => setHover('email')} onMouseLeave={() => setHover('')}>
          <ButtonComponent
            whereIs='contact'
            text='Agenda una reunión'
            typeButton='email'
            isHover={hover}
          />
        </div>
        <div onMouseEnter={() => setHover('linkedin')} onMouseLeave={() => setHover('')}>
          <ButtonComponent
            whereIs='contact'
            text='LinkedIn'
            typeButton='linkedin'
            isHover={hover}
          />
        </div>
        <div onMouseEnter={() => setHover('github')} onMouseLeave={() => setHover('')}>
          <ButtonComponent
            whereIs='contact'
            text='GitHub'
            typeButton='github'
            isHover={hover}
          />
        </div>
        <div className='col-span-2' onMouseEnter={() => setHover('cv')} onMouseLeave={() => setHover('')}>
          <ButtonComponent
            whereIs='contact'
            text='Visualiza mi CV'
            typeButton='cv'
            isHover={hover}
          />
        </div>
      </div>
      <div>
        <p className='text-seccolor text-2xl font-prifont font-bold text-center pt-5'>¿Hablamos de tu próximo gran producto?</p>
      </div>
    </div>
  )
}

export { Contact }