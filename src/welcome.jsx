import { useState } from 'react'
import ReactDOM from 'react-dom'

/* Components */
import { WebsiteEs } from './WebsiteEs/main'
import { WebsiteEn } from './WebsiteEn/main'

function Index(){
  const [language, setLanguage] = useState(null);

  return(
    <section className="container__welcome">
      <div className="container__welcome--title">
        <h2>Welcome to my portfolio!!</h2>
        <p>In what language would you like to see my portfolio?</p>
      </div>
      <div className="container__welcome--btns">
        <button onClick={() => {setLanguage(false), console.log(language)}}>English</button>
        <button onClick={() => {setLanguage(true), console.log(language)}}>Español</button>
      </div>
    </section>
  )
}

export { Index }