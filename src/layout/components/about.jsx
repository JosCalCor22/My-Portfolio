/* Hooks */
import { useState } from 'react'

/* Scripts */
import { aboutMeData } from '../../scripts/aboutme'

function About() {
  /* Hooks */
  const [typeCard, setTypeCard] = useState('engineerProduct')

  const filteredData = aboutMeData.filter((item) => item.type === typeCard)
  const titleItem = filteredData.find((item) => item.name === 'title')
  const cardItems = filteredData.filter((item) => item.name !== 'title')

  return (
    <section className='w-[50%] h-full'>
      <h1 className='text-seccolor text-5xl font-bold font-secfont pt-3'>Experticia & Enfoque</h1>

      <div className="gap-2.5 py-5 h-full">
        {titleItem && (
          <h2 className='text-seccolor text-2xl font-bold font-secfont py-3'>{titleItem.title}</h2>
        )}

        <div className='grid grid-cols-2 grid-rows-2 gap-4'>
          {cardItems.map((item) => (
            item.label ? (
              <div className="h-full w-full rounded-xl border-2" key={item.id}>
                <button onClick={() => setTypeCard(item.nextCard)} className="w-full h-full flex items-center justify-center">
                  <h3 className='text-seccolor text-lg font-bold font-secfont w-32'>{item.label}</h3>
                </button>
              </div>
            ) : (
              <div className="h-full w-full rounded-xl border-2 border-seccolor/35 p-2.5 flex flex-col justify-center" key={item.id}>
                <h3 className='text-seccolor text-lg font-bold font-secfont mb-2'>{item.title}</h3>
                <p className='text-seccolor text-sm font-prifont'>{item.description}</p>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  )
}

export { About }
