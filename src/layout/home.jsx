/* Hooks */
import { useState } from 'react'

/* Components */
import { Cover } from './components/cover'
import { About } from './components/about'
import { Education } from './components/education'
import { Experience } from './components/experience'

function Index() {
  const [currentBody, setCurrentBody] = useState('education')

  console.log(currentBody)

  return (
    <section className="bg-[url('src/public/assets/svg/bg.svg')] w-full h-screen bg-cover bg-center">
      <header className='h-[10%] w-full relative flex justify-end'>
        <div className="absolute bottom-2.5 left-0">
          <img src="src/public/assets/svg/LineVector.svg" t="Line Vector" />
        </div>
        <nav className=' h-full flex gap-10 items-end pr-20'>
          <button className='text-seccolor h-fit' onClick={() => setCurrentBody('cover')}>
            Portada
          </button>
          <button className='text-seccolor h-fit' onClick={() => setCurrentBody('about')}>
            Sobre Mi
          </button>
          <button className='text-seccolor h-fit' onClick={() => setCurrentBody('education')}>
            Educación
          </button>
          <button className='text-seccolor h-fit' onClick={() => setCurrentBody('experience')}>
            Mi trayectoria
          </button>
          <button className='text-seccolor h-fit' onClick={() => setCurrentBody('contact')}>
            Contáctame
          </button>
        </nav>
      </header>

      <section className='h-[80%] w-full px-20 py-5'>
        {
          currentBody !== 'experience' ? (
            <section className='h-full w-full flex gap-2.5'>
              <div className='w-[50%] h-full'>
                <img src="src/public/assets/images/Photo_Profile.png" className='h-full' alt="Profile" />
              </div>
              <Cover currentBody={currentBody} />
              <About currentBody={currentBody} />
              <Education currentBody={currentBody} />
            </section>
          ) : (
            <section className='h-full w-full flex'>
              <Experience />
            </section>
          )
        }
      </section>

      <footer className='h-[10%] w-full relative flex justify-start'>
        <nav className=' h-full flex gap-2.5 items-start pl-20'>
          <button onClick={() => setCurrentBody('cover')} className='border-2 border-seccolor bg-seccolor h-6 w-6 rounded-full'></button>
          <button onClick={() => setCurrentBody('about')} className='border-2 border-seccolor h-5 w-5 rounded-full'></button>
          <button onClick={() => setCurrentBody('education')} className='border-2 border-seccolor h-5 w-5 rounded-full'></button>
          <button onClick={() => setCurrentBody('experience')} className='border-2 border-seccolor h-5 w-5 rounded-full'></button>
          <button onClick={() => setCurrentBody('contact')} className='border-2 border-seccolor h-5 w-5 rounded-full'></button>
        </nav>
        <div className="absolute top-2.5 right-0">
          <img src="src/public/assets/svg/LineVector.svg" t="Line Vector" />
        </div>
      </footer>
    </section>
  )
}

export { Index }