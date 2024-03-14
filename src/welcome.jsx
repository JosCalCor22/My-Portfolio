import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

/* Components English*/
import { WebsiteEn } from './WebsiteEn/main'
import { ProyectsEn } from './WebsiteEn/components/Projects-Comp/projects'
import { CurriculumEn } from './WebsiteEn/components/Curriculum-Comp/curriculum'

/* Components Spanish */
import { WebsiteEs } from './WebsiteEs/main'
import { ProyectsEs } from './WebsiteEs/components/Projects-Comp/projects'
import { CurriculumEs } from './WebsiteEs/components/Curriculum-Comp/curriculum'

function Index() {
  return(
    <Router>
      <section className="container__welcome">
        <div className="container__welcome--title">
          <h2>Welcome to my portfolio!!</h2>
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

      <Routes>
        {/* Rutas padres */}
        <Route path='/es/home' Component={WebsiteEs} />
        <Route path='/en/home' Component={WebsiteEn} />
        {/* Rutas para componentes CV */}
        <Route path='/en/curriculum' Component={CurriculumEn} />
        <Route path='/es/curriculum' Component={CurriculumEs} />
        {/* Rutas para componentes Proyectos */}
        <Route path='/en/proyects' Component={ProyectsEn} />
        <Route path='/es/proyectos' Component={ProyectsEs} />
      </Routes>
    </Router>
  )
}

export { Index }