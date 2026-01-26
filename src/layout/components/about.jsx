/* Hooks */
import { useState } from 'react'

/* Scripts */
import { aboutMeData } from '../../scripts/aboutme'

/* Libraries */
import { AnimatePresence, motion } from 'motion/react'

const About = () => {
  /* Hooks */
  const [typeCard, setTypeCard] = useState('engineerProduct')
  const [getNumberCard, setGetNumberCard] = useState(0)

  const filteredData = aboutMeData.filter((item) => item.type === typeCard)
  const titleItem = filteredData.find((item) => item.name === 'title')
  const cardItems = filteredData.filter((item) => item.name !== 'title')

  return (
    <section className='w-full lg:w-[50%] h-full'>
      <h1 className='text-seccolor text-4xl font-bold font-secfont pt-3'>Experticia & Enfoque</h1>

      <div className="gap-2.5 py-5 h-full">
        <AnimatePresence mode="wait">
          {titleItem && (
            <motion.h2
              key={titleItem.title}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className='text-seccolor text-2xl font-bold font-secfont py-3'
            >
              {titleItem.title}
            </motion.h2>
          )}
        </AnimatePresence>

        <AnimatePresence mode='wait'>
          <motion.div
            key={typeCard}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className='grid lg:grid-cols-2 lg:grid-rows-2 grid-cols-1 auto-rows-min gap-4'>
            {cardItems.map((item) => (
              item.label ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.3 }}
                  className="h-full w-full rounded-xl border-2 py-8"
                  key={item.id}
                >
                  <button
                    onClick={() => setTypeCard(item.nextCard)}
                    onMouseEnter={() => setGetNumberCard(item.id)}
                    onMouseLeave={() => setGetNumberCard(0)}
                    className={`w-full h-full flex items-center justify-center rounded-xl transition-all duration-300 ease-in-out hover:cursor-pointer`}>
                    <h3 className={`${getNumberCard === item.id ? 'text-seccolor' : 'text-seccolor/65'} h-full flex items-center w-48 text-xl font-bold font-secfont transition-all duration-300 ease-in-out`}>
                      {item.label}
                    </h3>
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => setGetNumberCard(item.id)}
                  onMouseLeave={() => setGetNumberCard(0)}
                  className={`${getNumberCard === item.id ? 'border-seccolor shadow-md shadow-seccolor/60' : 'border-seccolor/35'} h-full w-full rounded-xl border-2 p-2.5 flex flex-col justify-center transition-all duration-300 ease-in-out`}>
                  <h3 className={`${getNumberCard === item.id ? 'text-seccolor' : 'text-seccolor/65'} text-xl font-bold font-secfont mb-2 transition-all duration-300 ease-in-out`}>{item.title}</h3>
                  <p className={`${getNumberCard === item.id ? 'text-seccolor' : 'text-seccolor/65'} text-md font-prifont transition-all duration-300 ease-in-out`}>{item.description}</p>
                </motion.div>
              )
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export { About }
