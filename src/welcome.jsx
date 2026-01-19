import { Link } from 'react-router-dom'

function Index() {
  return (
    <section className="container2">
      <section className="container__welcome">
        <div className="container__welcome--title">
          <p className='text-blue-700'>¿En que lenguaje quieres ver mi portafolio?</p>
          <p>In what language would you like to see my portfolio?</p>
        </div>
        <div className="container__welcome--btns">
          <Link to={'/en/home'} rel='noreferrer'>
            <button>English</button>
          </Link>
          <Link to={'/es/home'} rel='noreferrer'>
            <button>Español</button>
          </Link>
        </div>
      </section>
    </section>
  )
}

export { Index }