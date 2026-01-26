/* Hooks */
import { useState } from 'react'

/* Scripts */
import { educationData } from '../../scripts/education'

/* Components */
import { ButtonComponent } from '../../ui/button'

/* Libraries */
import { AnimatePresence, motion } from 'motion/react'

const Education = () => {
  const [currentCard, setCurrentCard] = useState('sena');

  const filteredData = educationData.filter((item) => item.state === currentCard)

  return (
    <section className='w-full lg:w-[50%] h-full flex-col flex'>
      <h1 className='text-seccolor text-4xl font-bold font-secfont pt-3'>Aprendizaje Continuo</h1>

      <AnimatePresence mode='wait'>
        <motion.section
          key={currentCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {
            filteredData.map((item) => (
              <motion.div
                key={item.id}
                className='py-5'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className='text-seccolor text-2xl font-bold font-secfont'>{item.name}</h2>
                <ul className='flex flex-col gap-5 py-4 lg:pl-8 lg:gap-2'>
                  <div className='flex flex-col gap-2 lg:flex-row'>
                    <li className='text-seccolor text-xl lg:list-disc font-bold'>Duración:</li>
                    <p className='text-seccolor text-left text-lg'>{item.duration}</p>
                  </div>
                  <div className='flex flex-col gap-2 lg:flex-row'>
                    <li className='text-seccolor text-xl lg:list-disc font-bold'>Instituto:</li>
                    <p className='text-seccolor text-left text-lg'>{item.institution}</p>
                  </div>
                  <div className='flex flex-col gap-2 lg:flex-row'>
                    <li className='text-seccolor text-xl font-bold lg:whitespace-nowrap lg:w-fit lg:wrap lg:list-disc'>Puntos Claves:</li>
                    <ul className='flex flex-col gap-2 pl-6 lg:pl-0'>
                      <li className='text-seccolor text-lg list-disc lg:list-item'>{item.keypoints.key1}</li>
                      <li className='text-seccolor text-lg list-disc lg:list-item'>{item.keypoints.key2}</li>
                      <li className='text-seccolor text-lg list-disc lg:list-item'>{item.keypoints.key3}</li>
                    </ul>
                  </div>
                </ul>

                <ButtonComponent
                  onClick={() => setCurrentCard(item.nextCard)}
                  text='Siguiente'
                  whereIs='education'
                />
              </motion.div>
            ))
          }
        </motion.section>
      </AnimatePresence>
    </section>
  );
};

export { Education };