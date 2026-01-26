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
    <section className='w-full h-fit flex-col flex gap-5 overflow-x-hidden lg:gap-2.5 lg:px-20 lg:py-5 lg:h-full'>
      <div className='flex justify-between'>
        <h1 className='text-seccolor text-4xl font-bold font-secfont pt-3'>Experiencia Laboral</h1>
        <div className='hidden lg:flex gap-2'>
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
              <div key={item.id} className='flex flex-col lg:flex-row gap-5 p-5 h-full overflow-y-auto lg:overflow-hidden'>
                <div className='flex flex-col gap-2.5 w-full lg:w-1/2'>
                  <h2 className='text-seccolor text-2xl font-bold font-secfont lg:w-[400px]'>{item.company}</h2>
                  <ul className='flex flex-col gap-2.5 lg:gap-1 lg:pl-8'>
                    <div className='flex flex-col gap-1 lg:gap-2 lg:flex-row'>
                      <li className='text-seccolor text-xl font-bold lg:list-disc'>Duración:</li>
                      <p className='text-seccolor text-lg'>{item.duration}</p>
                    </div>
                    <div className='flex flex-col gap-1 lg:gap-2 lg:flex-row'>
                      <li className='text-seccolor text-xl font-bold lg:list-disc'>Rol:</li>
                      <p className='text-seccolor text-lg'>{item.role}</p>
                    </div>
                  </ul>
                </div>

                <div className='flex flex-col gap-2.5 w-full lg:w-1/2'>
                  <h2 className='text-seccolor text-2xl font-bold font-secfont'>Puntos a Destacar</h2>
                  <div className='flex flex-col gap-2.5 lg:pl-5'>
                    <ul className='flex flex-col gap-1'>
                      <li className='text-seccolor text-lg lg:list-disc'>
                        <ReactMarkdown>{item.highlights.key1}</ReactMarkdown>
                      </li>
                    </ul>
                    <ul className='flex flex-col gap-1'>
                      <li className='text-seccolor text-lg lg:list-disc'>
                        <ReactMarkdown>{item.highlights.key2}</ReactMarkdown>
                      </li>
                    </ul>
                    <ul className='flex flex-col gap-1'>
                      <li className='text-seccolor text-lg lg:list-disc'>
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
      <div className='flex lg:hidden gap-2 mt-auto'>
        <button className='w-full' onClick={() => handlePrev(experienceData.find((item) => item.cards.currentCard === currentCard).cards.prevCard)}>
          <ButtonComponent
            whereIs='experience'
            isRotated={true}
            isResponsive={true}
          />
        </button>
        <button className='w-full' onClick={() => handleNext(experienceData.find((item) => item.cards.currentCard === currentCard).cards.nextCard)}>
          <ButtonComponent
            whereIs='experience'
            isRotated={false}
            isResponsive={true}
          />
        </button>
      </div>
    </section>
  );
};

export { Experience };