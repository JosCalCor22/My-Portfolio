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
    <section className="w-full h-screen flex flex-col justify-between overflow-hidden lg:max-w-[1280px] lg:max-h-[786px]">
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} setCurrentBody={setCurrentBody} currentBody={currentBody} />

      {/* Header */}
      <header className={currentBody === 'goodbye' ? 'hidden' : 'h-[10%] w-full flex justify-end items-end p-5 mx-auto lg:justify-between'}>
        <div className="hidden pb-2.5 lg:block lg:w-[35%]">
          <img src="src/public/assets/svg/LineVector.svg" alt="Line Vector" />
        </div>
        <button onClick={() => setIsOpen(true)} className="lg:hidden text-seccolor h-full flex items-end">
          <IoMdMenu className="w-10 h-10" />
        </button>
        <nav className='hidden h-full gap-10 items-end justify-center pr-20 lg:flex lg:w-[55%]'>
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

      {/* Main Content */}
      <section className={`${currentBody === 'goodbye' ? 'h-full' : 'flex-1'} w-full px-5 py-5 max-w-[400px] md:max-w-[600px] lg:max-w-[1280px] mx-auto lg:px-20 overflow-y-auto lg:overflow-hidden`}>
        <AnimatePresence mode="wait">
          {
            currentBody === 'cover' && (
              <motion.section
                key="cover"
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 0 }}
                transition={{ duration: 0.5 }}
                className='h-full w-full flex flex-col gap-2.5 lg:flex-row'
              >
                <div className='w-full h-full hidden md:flex lg:w-[50%]'>
                  <img src="src/public/assets/images/Photo_Profile.png" className='h-full object-cover' alt="Profile" />
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
                  <img src="src/public/assets/images/Photo_Profile.png" className='h-full object-cover' alt="Profile" />
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
                  <img src="src/public/assets/images/Photo_Profile.png" className='h-full object-cover' alt="Profile" />
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
                className='h-full w-full flex flex-col gap-2.5 lg:flex-row'
              >
                <div className='w-full h-full hidden md:flex lg:w-[50%]'>
                  <img src="src/public/assets/images/Photo_Profile.png" className='h-full object-cover' alt="Profile" />
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

      {/* Footer */}
      <footer className={currentBody === 'goodbye' ? 'hidden' : 'h-[10%] w-full flex items-center justify-center px-5 lg:px-0 max-w-[1280px] mx-auto lg:justify-between lg:items-start'}>
        <nav className='flex gap-3 items-start justify-center sm:gap-2.5 pt-1.5 md:w-fit lg:pl-20 md:justify-start'>
          <button className={`${currentBody === 'cover' ? 'border-2 border-seccolor bg-seccolor lg:h-6 lg:w-6 h-7 w-7' : 'bg-transparent h-5 w-5 border-seccolor cursor-pointer'} rounded-full border-2 hover:bg-seccolor transition-all duration-500 ease-in-out`} onClick={() => setCurrentBody('cover')}></button>
          <button className={`${currentBody === 'about' ? 'border-2 border-seccolor bg-seccolor lg:h-6 lg:w-6 h-7 w-7' : 'bg-transparent h-5 w-5 border-seccolor cursor-pointer'} rounded-full border-2 hover:bg-seccolor transition-all duration-500 ease-in-out`} onClick={() => setCurrentBody('about')}></button>
          <button className={`${currentBody === 'education' ? 'border-2 border-seccolor bg-seccolor lg:h-6 lg:w-6 h-7 w-7' : 'bg-transparent h-5 w-5 border-seccolor cursor-pointer'} rounded-full border-2 hover:bg-seccolor transition-all duration-500 ease-in-out`} onClick={() => setCurrentBody('education')}></button>
          <button className={`${currentBody === 'experience' ? 'border-2 border-seccolor bg-seccolor lg:h-6 lg:w-6 h-7 w-7' : 'bg-transparent h-5 w-5 border-seccolor cursor-pointer'} rounded-full border-2 hover:bg-seccolor transition-all duration-500 ease-in-out`} onClick={() => setCurrentBody('experience')}></button>
          <button className={`${currentBody === 'contact' ? 'border-2 border-seccolor bg-seccolor lg:h-6 lg:w-6 h-7 w-7' : 'bg-transparent h-5 w-5 border-seccolor cursor-pointer'} rounded-full border-2 hover:bg-seccolor transition-all duration-500 ease-in-out`} onClick={() => setCurrentBody('contact')}></button>
          <button className={`${currentBody === 'contact' ? 'border-2 border-seccolor' : 'hidden'} ${currentBody === 'goodbye' ? 'bg-seccolor lg:h-6 lg:w-6 h-7 w-7' : 'bg-transparent h-5 w-5 cursor-pointer'} rounded-full border-2 hover:bg-seccolor transition-all duration-500 ease-in-out`} onClick={() => setCurrentBody('goodbye')}></button>
        </nav>
        <div className="hidden pt-2.5 lg:block">
          <img src="src/public/assets/svg/LineVector.svg" t="Line Vector" />
        </div>
      </footer>
    </section>
  )
}

export { Index }