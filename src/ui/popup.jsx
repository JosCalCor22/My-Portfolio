/* Libraries */
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Oval } from "react-loader-spinner";
import { motion } from "motion/react";

const Popup = ({ setIsOpen }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='fixed inset-0 w-full h-full flex items-center justify-center p-10 lg:p-20 z-50 backdrop-blur-md bg-black/60 transition-all duration-300'
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className='w-full lg:w-[70%] h-full bg-black rounded-2xl border border-white/20 shadow-2xl p-6 flex flex-col gap-4 relative overflow-hidden'
      >

        <header className='flex justify-end items-center relative z-10'>
          <button
            className='text-white/70 hover:text-white transition-colors duration-200'
            onClick={() => setIsOpen(false)}>
            <IoClose className='w-8 h-8 cursor-pointer' />
          </button>
        </header>

        <main className='w-full flex-1 relative z-10 rounded-xl overflow-hidden bg-white/5'>
          {isLoading && (
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/80 backdrop-blur-sm z-20">
              <Oval
                visible={true}
                height="60"
                width="60"
                color="#ffffff"
                secondaryColor="rgba(255,255,255,0.1)"
                ariaLabel="loading-canvas"
              />
            </div>
          )}

          <iframe
            src="https://drive.google.com/file/d/122_u_LNXV7tG4D0-t6Xd0r_A5bpkLOrn/preview"
            onLoad={() => setIsLoading(false)}
            className={`w-full h-full rounded-xl transition-all duration-700 ease-out ${isLoading ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'}`}
          />
        </main>
      </motion.div>
    </motion.div>
  );
};

export { Popup };