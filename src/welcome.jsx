import { Link } from 'react-router-dom'

import background from './WebsiteEn/assets/svg/Background.svg'

function Index() {
  return(
    <section className="container2">
        <img src={background} alt="Background SVG" />
        <section className="container__welcome">
            <div className="container__welcome--title">
              <p>¿En que lenguaje quieres ver mi portafolio?</p>
              <p>In what language would you like to see my portfolio?</p>
            </div>
            <div className="container__welcome--btns">
              <Link to={'/en/home'} target='_blank' rel='noreferrer'>
                <button>English</button>
              </Link>
              <Link to={'/es/home'} target='_blank' rel='noreferrer'>
                <button>Español</button>
              </Link>
            </div>
          </section>
      </section>
  )
}

export { Index }