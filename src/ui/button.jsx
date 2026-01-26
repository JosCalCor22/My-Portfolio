/* Libraries */
import { Link } from 'react-router-dom'

/* Icons */
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md"
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { LuFile } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { GoHome } from "react-icons/go";
import { FiPhone } from "react-icons/fi";


const ButtonComponent = ({ text, onClick, whereIs, isRotated, isHover, isResponsive, typeButton }) => {
  return (
    <button
      onClick={onClick}
      className={`${whereIs === 'education' ? 'py-4 font-bold text-lg w-full' : 'gap-2.5 py-2'} ${whereIs === 'goodbye' ? 'w-[200px]' : ''} ${whereIs === 'contact' ? 'w-full' : ''} ${isResponsive ? 'w-full' : ''} flex justify-center items-center text-center border-2 border-seccolor text-seccolor rounded-xl hover:cursor-pointer hover:scale-105 hover:bg-seccolor hover:text-pricolor font-bold transition-all duration-300 ease-in-out`}
    >
      {
        whereIs === 'contact' ? (
          <>
            {
              typeButton === 'whatsapp' ? (
                <div className='flex gap-2.5'>
                  <FaWhatsapp className={`${isHover === 'whatsapp' ? 'text-pricolor' : 'text-seccolor'} w-6 h-6 transition-all duration-300 ease-in-out`} />
                  <span className={`${isHover === 'whatsapp' ? 'text-pricolor font-bold' : 'text-seccolor font-light'} text-base transition-all duration-300 ease-in-out`}>
                    <Link to={'https://wa.link/8zmczu'} target='_blank'>{text}</Link>
                  </span>
                </div>
              ) : typeButton === 'email' ? (
                <div className='flex gap-2.5'>
                  <MdOutlineMarkEmailUnread className={`${isHover === 'email' ? 'text-pricolor' : 'text-seccolor'} w-6 h-6 transition-all duration-300 ease-in-out`} />
                  <span className={`${isHover === 'email' ? 'text-pricolor font-bold' : 'text-seccolor font-light'} text-base transition-all duration-300 ease-in-out`}>
                    <Link to={'https://calendar.app.google/fp8p32cKm4QjdZcAA'} target='_blank'>Agenda una reunión</Link>
                  </span>
                </div>
              ) : typeButton === 'linkedin' ? (
                <div className='flex gap-2.5'>
                  <FaLinkedin className={`${isHover === 'linkedin' ? 'text-pricolor' : 'text-seccolor'} w-6 h-6 transition-all duration-300 ease-in-out`} />
                  <span className={`${isHover === 'linkedin' ? 'text-pricolor font-bold' : 'text-seccolor font-light'} text-base transition-all duration-300 ease-in-out`}>
                    <Link to={'https://www.linkedin.com/in/joseth-calderon/'} target='_blank'>LinkedIn</Link>
                  </span>
                </div>
              ) : typeButton === 'github' ? (
                <div className='flex gap-2.5'>
                  <IoLogoGithub className={`${isHover === 'github' ? 'text-pricolor' : 'text-seccolor'} w-6 h-6 transition-all duration-300 ease-in-out`} />
                  <span className={`${isHover === 'github' ? 'text-pricolor font-bold' : 'text-seccolor font-light'} text-base transition-all duration-300 ease-in-out`}>
                    <Link to={'https://github.com/JosCalCor22'} target='_blank'>GitHub</Link>
                  </span>
                </div>
              ) : typeButton === 'cv' ? (
                <div className='flex gap-2.5'>
                  <LuFile className={`${isHover === 'cv' ? 'text-pricolor' : 'text-seccolor'} w-6 h-6 transition-all duration-300 ease-in-out`} />
                  <span className={`${isHover === 'cv' ? 'text-pricolor font-bold' : 'text-seccolor font-light'} text-base transition-all duration-300 ease-in-out`}>
                    <Link to={'https://drive.google.com/file/d/122_u_LNXV7tG4D0-t6Xd0r_A5bpkLOrn/view?usp=sharing'} target='_blank'>Visualiza mi CV</Link>
                  </span>
                </div>
              ) : null
            }
          </>
        ) : whereIs === 'experience' ? (
          <>
            <IoIosArrowForward className={`${isRotated ? 'rotate-180' : 'rotate-0'} text-seccolor w-6 h-6 m-2 hover:text-pricolor transition-all duration-300 ease-in-out`} />
          </>
        ) : whereIs === 'goodbye' ? (
          <>
            {
              typeButton === 'home' ? (
                <div className='flex gap-2.5'>
                  <GoHome className={`${isHover === 'home' ? 'text-pricolor' : 'text-seccolor'} w-6 h-6 transition-all duration-300 ease-in-out`} />
                  <span>{text}</span>
                </div>
              ) : typeButton === 'phone' ? (
                <div className='flex gap-2.5'>
                  <FiPhone className={`${isHover === 'phone' ? 'text-pricolor' : 'text-seccolor'} w-6 h-6 transition-all duration-300 ease-in-out`} />
                  <span>{text}</span>
                </div>
              ) : null
            }
          </>
        ) : (
          <>
            {text}
          </>
        )
      }
    </button>
  )
}

export { ButtonComponent }