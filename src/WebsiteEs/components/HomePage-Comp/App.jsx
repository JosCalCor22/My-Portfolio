/* Components */
import { Navigation } from './components/navigation'
import { TargetProfile } from './components/targetProfile'

function App() {
  return (
    <section className='container'>
      <div className='container__div1'>
        <TargetProfile />
      </div>
      <div className='container__div2'>
        <article className='container__div2--targetInfo'>
          <div className='targetInfo__title'>
            <h2>Hola mundo🌐</h2>
            <h3>Bienvenidos a mi portafolio profesional</h3>
          </div>
          <Navigation />
          <div className='targetInfo__description'>
            <p>Apasionado desarrollador Frontend con <span>dos años de experiencia,</span> he trazado mi propio camino de <span>aprendizaje autodidacta.</span> Mi versatilidad se refleja en la participación exitosa en diversos proyectos, tanto colaborativos como individuales. Destaco por mi capacidad para enfrentar <span>desafíos de manera creativa y eficiente,</span> contribuyendo al desarrollo de soluciones innovadoras y funcionales. Mi enfoque autodidacta garantiza una actualización constante en las últimas tecnologías. <span>Emocionado por seguir creciendo y aportando al mundo del desarrollo frontend.</span></p>
          </div>
        </article>
        <img src={BackgroundSVG} alt='Background SVG' className='background' />
      </div>
    </section>
  )
}

export { App }
