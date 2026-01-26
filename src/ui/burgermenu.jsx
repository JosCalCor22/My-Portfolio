/* Hooks */
import { motion, AnimatePresence } from 'motion/react'

/* Icons */
import { IoMdClose } from "react-icons/io";

const BurgerMenu = ({ isOpen, setIsOpen, setCurrentBody, currentBody }) => {
  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3
      }
    }
  }

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
  }

  const handleNavigation = (page) => {
    setCurrentBody(page)
    setIsOpen(false)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="burger-menu"
          initial="closed"
          animate="open"
          exit="exit"
          variants={menuVariants}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-md"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 text-seccolor"
          >
            <IoMdClose className="w-10 h-10" />
          </button>

          <motion.nav className="flex flex-col gap-8 text-center">
            <motion.button
              variants={itemVariants}
              onClick={() => handleNavigation('cover')}
              className={`${currentBody === 'cover' ? 'text-seccolor font-bold' : 'text-seccolor/65'} text-2xl hover:cursor-pointer hover:font-bold transition-all duration-500 ease-in-out`}
            >
              Portada
            </motion.button>
            <motion.button
              variants={itemVariants}
              onClick={() => handleNavigation('about')}
              className={`${currentBody === 'about' ? 'text-seccolor font-bold' : 'text-seccolor/65'} text-2xl hover:cursor-pointer hover:font-bold hover:text-seccolor transition-all duration-500 ease-in-out`}
            >
              Sobre Mi
            </motion.button>
            <motion.button
              variants={itemVariants}
              onClick={() => handleNavigation('education')}
              className={`${currentBody === 'education' ? 'text-seccolor font-bold' : 'text-seccolor/65'} text-2xl hover:cursor-pointer hover:font-bold hover:text-seccolor transition-all duration-500 ease-in-out`}
            >
              Educación
            </motion.button>
            <motion.button
              variants={itemVariants}
              onClick={() => handleNavigation('experience')}
              className={`${currentBody === 'experience' ? 'text-seccolor font-bold' : 'text-seccolor/65'} text-2xl hover:cursor-pointer hover:font-bold hover:text-seccolor transition-all duration-500 ease-in-out`}
            >
              Mi trayectoria
            </motion.button>
            <motion.button
              variants={itemVariants}
              onClick={() => handleNavigation('contact')}
              className={`${currentBody === 'contact' ? 'text-seccolor font-bold' : 'text-seccolor/65'} text-2xl hover:cursor-pointer hover:font-bold hover:text-seccolor transition-all duration-500 ease-in-out`}
            >
              Contáctame
            </motion.button>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export { BurgerMenu }
