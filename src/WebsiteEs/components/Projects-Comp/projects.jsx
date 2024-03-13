import React from 'react';
import { Link } from 'react-router-dom';

/* Components */
import { ProjectsCards } from './components/projectsCards';

/* SVG */
import ArrowSVG from '../../assets/svg/Arrow-Icon.svg';

function Proyects(){
  return(
    <>
      <section className="container__projects">
        <section className="title__section">
        <div className="title__section--items">
          <Link to='/'>
            <button className="items__btn">
              <img src={ArrowSVG} alt="Arrow Icon" />
            </button>
          </Link>
          <h2>Proyectos</h2>
          <Link to='/curriculum'>
            <button className='nextPage__btn'>Curriculum</button>
          </Link>
        </div>
        </section>
        <section className="projects__section">
          <ProjectsCards/>
        </section>
        <section className="endInfo__section">
          <p>Si deseas ver mas o todos mis proyectos de mi auditoria, el siguiente botón te llevará a mi repositorio de GitHub. Si estas interesado en conocer mas de mi te inivito a visitar la sección de mi curriculum, allí encontraras mas información sobre mí.</p>
          <div className="endInfo__section--btn">
            <Link to={'https://github.com/JosCalCor22'} target='_blank'>
              <button>Ir a mi repo</button>
            </Link>
            <Link to={'/curriculum'}>
              <button>Ver mi curriculum</button>
            </Link>
          </div>
        </section>
      </section>
    </>
  )
}

export { Proyects }