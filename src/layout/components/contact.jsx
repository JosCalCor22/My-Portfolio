/* Libraries */
import { Link } from 'react-router-dom'

/* Icons */
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md"
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { LuFile } from "react-icons/lu";


const Contact = ({ currentBody }) => {
  return (
    <div className={currentBody === 'contact' ? 'w-[50%] h-full' : 'hidden'}>
      <h1 className='text-seccolor text-4xl font-bold font-secfont py-3'>Joseth Calderón</h1>
      <h2 className='text-seccolor text-3xl font-bold font-secfont'>UX Engineer & Product Strategist</h2>
      <div className='flex flex-col gap-2.5 py-5'>
        <p className='text-seccolor text-base font-prifont'>Busco oportunidades donde pueda fusionar la estrategia de producto, el diseño de impacto y la ingeniería frontend. Si buscas a alguien que lidere con empatía y construya con precisión, hablemos.</p>
      </div>
      <div className="grid grid-cols-2 grid-rows-3 gap-2.5">
        <button className='row-span-1 col-span-1 flex justify-center items-center gap-2.5 py-2 border-2 border-seccolor rounded-xl'>
          <FaWhatsapp className='text-seccolor w-6 h-6' />
          <span className='text-seccolor text-base'>
            <Link to={'https://wa.link/8zmczu'} target='_blank'>WhatsApp</Link>
          </span>
        </button>
        <button className='row-span-1 col-span-1 flex justify-center items-center gap-2.5 py-2 border-2 border-seccolor rounded-xl'>
          <MdOutlineMarkEmailUnread className='text-seccolor w-6 h-6' />
          <span className='text-seccolor text-base'>
            <Link to={'https://calendar.app.google/fp8p32cKm4QjdZcAA'} target='_blank'>Agenda una reunión</Link>
          </span>
        </button>
        <button className='row-span-1 col-span-1 flex justify-center items-center gap-2.5 py-2 border-2 border-seccolor rounded-xl'>
          <FaLinkedin className='text-seccolor w-6 h-6' />
          <span className='text-seccolor text-base'>
            <Link to={'https://www.linkedin.com/in/joseth-calderon/'} target='_blank'>LinkedIn</Link>
          </span>
        </button>
        <button className='row-span-1 col-span-1 flex justify-center items-center gap-2.5 py-2 border-2 border-seccolor rounded-xl'>
          <IoLogoGithub className='text-seccolor w-6 h-6' />
          <span className='text-seccolor text-base'>
            <Link to={'https://github.com/JosCalCor22'} target='_blank'>GitHub</Link>
          </span>
        </button>
        <button className='row-span-1 col-span-2 flex justify-center items-center gap-2.5 py-2 border-2 border-seccolor rounded-xl'>
          <LuFile className='text-seccolor w-6 h-6' />
          <span className='text-seccolor text-base'>
            <Link to={'https://drive.google.com/file/d/122_u_LNXV7tG4D0-t6Xd0r_A5bpkLOrn/view?usp=sharing'} target='_blank'>Visualiza mi CV</Link>
          </span>
        </button>
      </div>
      <div>
        <p className='text-seccolor text-2xl font-prifont font-bold text-center pt-5'>¿Hablamos de tu próximo gran producto?</p>
      </div>
    </div>
  )
}

export { Contact }