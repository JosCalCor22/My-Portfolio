/* Styles */
import './styles/styles.css'

/* Hooks */
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

/* Components */
import { Index } from './home'
/* Components Spanish */
import { WebsiteEs } from './WebsiteEs/main'
import { ProyectsEs } from './WebsiteEs/components/Projects-Comp/projects'
import { CurriculumEs } from './WebsiteEs/components/Curriculum-Comp/curriculum'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      {/* Ruta pricipal */}
      <Route index Component={Index} />
      {/* Rutas padres */}
      <Route path='/es/home' Component={WebsiteEs} />
      {/* Rutas para componentes CV */}
      <Route path='/es/curriculum' Component={CurriculumEs} />
      {/* Rutas para componentes Proyectos */}
      <Route path='/es/proyectos' Component={ProyectsEs} />
    </Routes>
  </Router>
)