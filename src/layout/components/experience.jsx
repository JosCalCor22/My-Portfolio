/* Hooks */
import { useState } from 'react'

/* Scripts */
import { experienceData } from '../../scripts/experience'

/* Libreries */
import ReactMarkdown from 'react-markdown';
import { AnimatePresence, motion } from 'motion/react';

/* Components */
import { ButtonComponent } from '../../ui/button'

const Experience = () => {
  const [currentCard, setCurrentCard] = useState('LehreTech')
  const [direction, setDirection] = useState(0)

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  }

  const handleNext = (nextCard) => {
    setDirection(1)
    setCurrentCard(nextCard)
  }

  const handlePrev = (prevCard) => {
    setDirection(-1)
    setCurrentCard(prevCard)
  }

  const filteredData = experienceData.filter((item) => item.cards.currentCard === currentCard)

  return (
    <section className='w-full h-full px-20 py-5'>
      <div className='flex justify-between mb-2.5'>
        <h1 className='text-seccolor text-4xl font-bold font-secfont pt-3'>Experiencia Laboral</h1>
        <div className='flex gap-2'>
          <button onClick={() => handlePrev(experienceData.find((item) => item.cards.currentCard === currentCard).cards.prevCard)}>
            <ButtonComponent
              whereIs='experience'
              isRotated={true}
            />
          </button>
          <button onClick={() => handleNext(experienceData.find((item) => item.cards.currentCard === currentCard).cards.nextCard)}>
            <ButtonComponent
              whereIs='experience'
              isRotated={false}
            />
          </button>
        </div>
      </div>
      <AnimatePresence mode='wait' custom={direction}>
        <motion.div
          key={currentCard}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3 }}
          className='h-[85%] border-2 border-seccolor rounded-xl p-2.5'
        >
          {
            filteredData.map((item) => (
              <div key={item.id} className='flex gap-5 p-5'>
                <div className='flex flex-col gap-2.5'>
                  <h2 className='text-seccolor text-2xl font-bold font-secfont w-[400px]'>{item.company}</h2>
                  <ul className='flex flex-col gap-1 pl-8'>
                    <div className='flex gap-2'>
                      <li className='text-seccolor list-disc font-bold'>Duración:</li>
                      <p className='text-seccolor'>{item.duration}</p>
                    </div>
                    <div className='flex gap-2'>
                      <li className='text-seccolor list-disc font-bold'>Rol:</li>
                      <p className='text-seccolor'>{item.role}</p>
                    </div>
                  </ul>
                </div>

                <div className='flex flex-col gap-2.5'>
                  <h2 className='text-seccolor text-2xl font-bold font-secfont'>Puntos a Destacar</h2>
                  <div className='flex flex-col gap-2.5 pl-5'>
                    <ul className='flex flex-col gap-1'>
                      <li className='text-seccolor list-disc'>
                        <ReactMarkdown>{item.highlights.key1}</ReactMarkdown>
                      </li>
                    </ul>
                    <ul className='flex flex-col gap-1'>
                      <li className='text-seccolor list-disc'>
                        <ReactMarkdown>{item.highlights.key2}</ReactMarkdown>
                      </li>
                    </ul>
                    <ul className='flex flex-col gap-1'>
                      <li className='text-seccolor list-disc'>
                        <ReactMarkdown>{item.highlights.key3}</ReactMarkdown>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))
          }
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export { Experience };