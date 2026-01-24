import { Link } from 'react-router-dom'

/* Components */
import { Cover } from './components/cover'
import { About } from './components/about'

function Index() {
  return (
    <section className="bg-[url('src/public/assets/svg/bg.svg')] w-full h-screen bg-cover bg-center">
      <header className='h-[10%] w-full relative flex justify-end'>
        <div className="absolute bottom-2.5 left-0">
          <img src="src/public/assets/svg/LineVector.svg" t="Line Vector" />
        </div>
        <nav className=' h-full flex gap-10 items-end pr-20'>
          <button className='text-seccolor h-fit'>
            <Link to={'/es/home'} rel='noreferrer'>Portada</Link>
          </button>
          <button className='text-seccolor h-fit'>
            <Link to={'/en/home'} rel='noreferrer'>Sobre Mi</Link>
          </button>
          <button className='text-seccolor h-fit'>
            <Link to={'/es/home'} rel='noreferrer'>Educación</Link>
          </button>
          <button className='text-seccolor h-fit'>
            <Link to={'/en/home'} rel='noreferrer'>Mi trayectoria</Link>
          </button>
          <button className='text-seccolor h-fit'>
            <Link to={'/es/home'} rel='noreferrer'>Contáctame</Link>
          </button>
        </nav>
      </header>

      <section className='h-[80%] w-full flex gap-2.5 px-20 py-5'>
        <div className='w-[50%] h-full'>
          <img src="src/public/assets/images/Photo_Profile.png" className='h-full' alt="Profile" />
        </div>
        {/* <Cover /> */}
        <About />
      </section>

      <footer className='h-[10%] w-full relative flex justify-start'>
        <nav className=' h-full flex gap-2.5 items-start pl-20'>
          <button className='border-2 border-seccolor bg-seccolor h-6 w-6 rounded-full'></button>
          <button className='border-2 border-seccolor h-5 w-5 rounded-full'></button>
          <button className='border-2 border-seccolor h-5 w-5 rounded-full'></button>
          <button className='border-2 border-seccolor h-5 w-5 rounded-full'></button>
          <button className='border-2 border-seccolor h-5 w-5 rounded-full'></button>
        </nav>
        <div className="absolute top-2.5 right-0">
          <img src="src/public/assets/svg/LineVector.svg" t="Line Vector" />
        </div>
      </footer>
    </section>
  )
}

export { Index }