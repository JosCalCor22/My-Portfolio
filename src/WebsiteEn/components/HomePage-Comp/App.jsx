/* Components */
import { Navigation } from './components/navigation'
import { TargetProfile } from './components/targetProfile'

/* SVG */
import BackgroundSVG from '../../assets/svg/Background.svg'

/* Style files */
import '../../assets/styles/index.scss'

function App() {
  return (
    <section className='container'>
      <div className='container__div1'>
        <TargetProfile />
      </div>
      <div className='container__div2'>
        <article className='container__div2--targetInfo'>
          <div className='targetInfo__title'>
            <h2>Hello world🌐</h2>
            <h3>Welcome to my professional portfolio</h3>
          </div>
            <Navigation />           
          <div className='targetInfo__description'>
            <p>Passionate Frontend developer with <span>two years of experience,</span> I have traced my own <span>self-taught learning</span> path. My versatility is reflected in the successful participation in various projects, both collaborative and individual. I stand out for my ability to face <span>challenges creatively and efficiently,</span> contributing to the development of innovative and functional solutions. My self-taught approach guarantees a constant update on the latest technologies. <span>Excited to continue growing and contributing to the world of frontend development.</span></p>
          </div>
        </article>
        <img src={BackgroundSVG} alt='Background SVG' className='background' />
      </div>
    </section>
  )
}

export { App }
