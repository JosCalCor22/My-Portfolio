/* Hooks */
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

/* Components */
import { Cover } from './components/cover'
import { About } from './components/about'
import { Education } from './components/education'
import { Experience } from './components/experience'
import { Contact } from './components/contact'
import { Goodbye } from './components/goodbye'
import { BurgerMenu } from '../ui/burgermenu'
/* Icons */
import { IoMdMenu } from "react-icons/io";

function Index() {
  const [currentBody, setCurrentBody] = useState('cover')
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="bg-[url('src/public/assets/svg/bg.svg')] w-full h-screen bg-cover bg-center overflow-y-auto lg:overflow-hidden">
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} setCurrentBody={setCurrentBody} />
      <header className={currentBody === 'goodbye' ? 'hidden' : 'h-[10%] w-full relative flex justify-end items-center px-5 lg:px-0'}>
        <div className="absolute bottom-2.5 left-0 hidden lg:block">
          <img src="src/public/assets/svg/LineVector.svg" t="Line Vector" />
        </div>
        <button onClick={() => setIsOpen(true)} className="lg:hidden text-seccolor h-full">
          <IoMdMenu className="w-10 h-10" />
        </button>
        <nav className='hidden lg:flex h-full gap-10 items-end pr-20'>
          <button className={`${currentBody === 'cover' ? 'text-seccolor font-bold' : 'text-seccolor/65'} hover:text-seccolor hover:cursor-pointer transition-all duration-500 ease-in-out`} onClick={() => setCurrentBody('cover')}>
            Portada
          </button>
          <button className={`${currentBody === 'about' ? 'text-seccolor font-bold' : 'text-seccolor/65'} hover:text-seccolor hover:cursor-pointer transition-all duration-500 ease-in-out`} onClick={() => setCurrentBody('about')}>
            Sobre Mi
          </button>
          <button className={`${currentBody === 'education' ? 'text-seccolor font-bold' : 'text-seccolor/65'} hover:text-seccolor hover:cursor-pointer transition-all duration-500 ease-in-out`} onClick={() => setCurrentBody('education')}>
            Educación
          </button>
          <button className={`${currentBody === 'experience' ? 'text-seccolor font-bold' : 'text-seccolor/65'} hover:text-seccolor hover:cursor-pointer transition-all duration-500 ease-in-out`} onClick={() => setCurrentBody('experience')}>
            Mi trayectoria
          </button>
          <button className={`${currentBody === 'contact' ? 'text-seccolor font-bold' : 'text-seccolor/65'} hover:text-seccolor hover:cursor-pointer transition-all duration-500 ease-in-out`} onClick={() => setCurrentBody('contact')}>
            Contáctame
          </button>
        </nav>
      </header>

      <section className={`${currentBody === 'goodbye' ? 'h-full' : 'h-auto min-h-[80vh] lg:h-[80%]'} w-full px-5 py-5 max-w-[400px] mx-auto lg:px-20 lg:overflow-hidden`}>
        <AnimatePresence mode="wait">
          {
            currentBody === 'cover' && (
              <motion.section
                key="cover"
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 0 }}
                transition={{ duration: 0.5 }}
                className='h-full w-full flex gap-2.5'
              >
                <div className='w-[50%] h-full hidden lg:block'>
                  <img src="src/public/assets/images/Photo_Profile.png" className='h-full' alt="Profile" />
                </div>
                <Cover />
              </motion.section>
            )
          }
          {
            currentBody === 'about' && (
              <motion.section
                key="about"
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 0 }}
                transition={{ duration: 0.4 }}
                className='h-full w-full flex gap-2.5'
              >
                <div className='w-[50%] h-full hidden lg:block'>
                  <img src="src/public/assets/images/Photo_Profile.png" className='h-full' alt="Profile" />
                </div>
                <About />
              </motion.section>
            )
          }
          {
            currentBody === 'education' && (
              <motion.section
                key="education"
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 0 }}
                transition={{ duration: 0.4 }}
                className='h-full w-full flex gap-2.5'
              >
                <div className='w-[50%] h-full hidden lg:block'>
                  <img src="src/public/assets/images/Photo_Profile.png" className='h-full' alt="Profile" />
                </div>
                <Education />
              </motion.section>
            )
          }
          {
            currentBody === 'contact' && (
              <motion.section
                key="contact"
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 0 }}
                transition={{ duration: 0.4 }}
                className='h-full w-full flex gap-2.5'
              >
                <div className='w-[50%] h-full hidden lg:block'>
                  <img src="src/public/assets/images/Photo_Profile.png" className='h-full' alt="Profile" />
                </div>
                <Contact />
              </motion.section>
            )
          }
          {
            currentBody === 'experience' && (
              <motion.section
                key="experience"
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 0 }}
                transition={{ duration: 0.4 }}
                className='h-full w-full flex'
              >
                <Experience />
              </motion.section>
            )
          }
          {
            currentBody === 'goodbye' && (
              <motion.section
                key="goodbye"
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 0 }}
                transition={{ duration: 0.4 }}
                className='h-full w-full flex'
              >
                <Goodbye setCurrentBody={setCurrentBody} />
              </motion.section>
            )
          }
        </AnimatePresence>
      </section>

      <footer className={currentBody === 'goodbye' ? 'hidden' : 'h-[10%] w-full relative flex justify-start items-center lg:items-start'}>
        <nav className='flex w-full h-full gap-3 items-center lg:items-start justify-center lg:justify-start lg:gap-2.5 lg:pl-20 '>
          <button className={`${currentBody === 'cover' ? 'border-2 border-seccolor bg-seccolor lg:h-6 lg:w-6 h-7 w-7' : 'bg-transparent h-5 w-5 border-seccolor cursor-pointer'} rounded-full border-2 hover:bg-seccolor transition-all duration-500 ease-in-out`} onClick={() => setCurrentBody('cover')}></button>
          <button className={`${currentBody === 'about' ? 'border-2 border-seccolor bg-seccolor lg:h-6 lg:w-6 h-7 w-7' : 'bg-transparent h-5 w-5 border-seccolor cursor-pointer'} rounded-full border-2 hover:bg-seccolor transition-all duration-500 ease-in-out`} onClick={() => setCurrentBody('about')}></button>
          <button className={`${currentBody === 'education' ? 'border-2 border-seccolor bg-seccolor lg:h-6 lg:w-6 h-7 w-7' : 'bg-transparent h-5 w-5 border-seccolor cursor-pointer'} rounded-full border-2 hover:bg-seccolor transition-all duration-500 ease-in-out`} onClick={() => setCurrentBody('education')}></button>
          <button className={`${currentBody === 'experience' ? 'border-2 border-seccolor bg-seccolor lg:h-6 lg:w-6 h-7 w-7' : 'bg-transparent h-5 w-5 border-seccolor cursor-pointer'} rounded-full border-2 hover:bg-seccolor transition-all duration-500 ease-in-out`} onClick={() => setCurrentBody('experience')}></button>
          <button className={`${currentBody === 'contact' ? 'border-2 border-seccolor bg-seccolor lg:h-6 lg:w-6 h-7 w-7' : 'bg-transparent h-5 w-5 border-seccolor cursor-pointer'} rounded-full border-2 hover:bg-seccolor transition-all duration-500 ease-in-out`} onClick={() => setCurrentBody('contact')}></button>
          <button className={`${currentBody === 'contact' ? 'border-2 border-seccolor' : 'hidden'} ${currentBody === 'goodbye' ? 'bg-seccolor lg:h-6 lg:w-6 h-7 w-7' : 'bg-transparent h-5 w-5 cursor-pointer'} rounded-full border-2 hover:bg-seccolor transition-all duration-500 ease-in-out`} onClick={() => setCurrentBody('goodbye')}></button>
        </nav>
        <div className="absolute top-2.5 right-0 hidden lg:block">
          <img src="src/public/assets/svg/LineVector.svg" t="Line Vector" />
        </div>
      </footer>
    </section>
  )
}

export { Index }