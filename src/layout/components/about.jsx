/* Hooks */
import { useState } from 'react'

/* Scripts */
import { aboutMeData } from '../../scripts/aboutme'

const About = () => {
  /* Hooks */
  const [typeCard, setTypeCard] = useState('engineerProduct')
  const [getNumberCard, setGetNumberCard] = useState(0)

  const filteredData = aboutMeData.filter((item) => item.type === typeCard)
  const titleItem = filteredData.find((item) => item.name === 'title')
  const cardItems = filteredData.filter((item) => item.name !== 'title')

  return (
    <section className='w-[50%] h-full'>
      <h1 className='text-seccolor text-4xl font-bold font-secfont pt-3'>Experticia & Enfoque</h1>

      <div className="gap-2.5 py-5 h-full">
        {titleItem && (
          <h2 className='text-seccolor text-2xl font-bold font-secfont py-3'>{titleItem.title}</h2>
        )}

        <div className='grid grid-cols-2 grid-rows-2 gap-4'>
          {cardItems.map((item) => (
            item.label ? (
              <div className="h-full w-full rounded-xl border-2" key={item.id}>
                <button
                  onClick={() => setTypeCard(item.nextCard)}
                  onMouseEnter={() => setGetNumberCard(item.id)}
                  onMouseLeave={() => setGetNumberCard(0)}
                  className={`w-full h-full flex items-center justify-center rounded-xl transition-all duration-300 ease-in-out hover:cursor-pointer`}>
                  <h3 className={`${getNumberCard === item.id ? 'text-seccolor' : 'text-seccolor/65'} text-lg font-bold font-secfont w-32 transition-all duration-300 ease-in-out`}>
                    {item.label}
                  </h3>
                </button>
              </div>
            ) : (
              <div
                key={item.id}
                onMouseEnter={() => setGetNumberCard(item.id)}
                onMouseLeave={() => setGetNumberCard(0)}
                className={`${getNumberCard === item.id ? 'border-seccolor shadow-md shadow-seccolor/60' : 'border-seccolor/35'} h-full w-full rounded-xl border-2 p-2.5 flex flex-col justify-center transition-all duration-300 ease-in-out`}>
                <h3 className={`${getNumberCard === item.id ? 'text-seccolor' : 'text-seccolor/65'} text-lg font-bold font-secfont mb-2 transition-all duration-300 ease-in-out`}>{item.title}</h3>
                <p className={`${getNumberCard === item.id ? 'text-seccolor' : 'text-seccolor/65'} text-sm font-prifont transition-all duration-300 ease-in-out`}>{item.description}</p>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  )
}

export { About }
