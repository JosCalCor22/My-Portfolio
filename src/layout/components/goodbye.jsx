/* Icons */
import { GoHome } from "react-icons/go";
import { FiPhone } from "react-icons/fi";

const Goodbye = ({ setCurrentBody }) => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center gap-4'>
      <h1 className='text-seccolor text-4xl font-bold font-secfont'>Gracias por visualizar mi portafolio</h1>
      <h2 className='text-seccolor text-3xl font-prifont text-center'>Hecho con dedicación, una buena playlist y la convicción de que la tecnología debe ser, ante todo, humana.</h2>
      <div className='flex gap-2.5'>
        <button className='w-[200px] flex justify-center border-2 border-seccolor rounded-xl gap-2 py-2.5' onClick={() => setCurrentBody('cover')}>
          <GoHome className='w-6 h-6 text-seccolor' />
          <span className='text-seccolor font-bold text-base'>Inicio</span>
        </button>
        <button className='w-[200px] flex justify-center border-2 border-seccolor rounded-xl gap-2 py-2.5' onClick={() => setCurrentBody('contact')}>
          <FiPhone className='w-6 h-6 text-seccolor' />
          <span className='text-seccolor font-bold text-base'>Contáctame</span>
        </button>
      </div>
    </div>
  )
}

export { Goodbye }
