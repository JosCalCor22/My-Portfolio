/* Hooks */
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

/* Componets */
import { App } from './components/HomePage-Comp/App.jsx'
import { Proyects } from './components/Projects-Comp/projects.jsx'
import { Curriculum } from './components/Curriculum-Comp/curriculum.jsx'

function WebsiteEs (){
  <>
    <Router>
      <Routes>
        <Route path='/' Component={App} />
        <Route path='/curriculum' Component={Curriculum} />
        <Route path='/proyectos' Component={Proyects} />
      </Routes>
    </Router>
  </>
}

export { WebsiteEs }