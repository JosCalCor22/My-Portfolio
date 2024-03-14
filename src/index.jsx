/* Hooks */
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

/* Components */
import { Index } from './welcome'
/* Components English*/
import { WebsiteEn } from './WebsiteEn/main'
import { ProyectsEn } from './WebsiteEn/components/Projects-Comp/projects'
import { CurriculumEn } from './WebsiteEn/components/Curriculum-Comp/curriculum'
/* Components Spanish */
import { WebsiteEs } from './WebsiteEs/main'
import { ProyectsEs } from './WebsiteEs/components/Projects-Comp/projects'
import { CurriculumEs } from './WebsiteEs/components/Curriculum-Comp/curriculum'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
      <Routes>
        {/* Ruta pricipal */}
        <Route path='/' Component={Index} />
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