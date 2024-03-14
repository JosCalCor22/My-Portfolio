import React from 'react';
import { Link } from 'react-router-dom';

/* Components */
import { ProjectsCards } from './components/projectsCards';

/* SVG */
import ArrowSVG from '../../assets/svg/Arrow-Icon.svg';

function ProyectsEn(){
  return(
    <>
      <section className="container__projects">
        <section className="title__section">
        <div className="title__section--items">
          <Link to='/en/home'>
            <button className="items__btn">
              <img src={ArrowSVG} alt="Arrow Icon" />
            </button>
          </Link>
          <h2>Projects</h2>
          <Link to='/en/curriculum'>
            <button className='nextPage__btn'>Curriculum</button>
          </Link>
        </div>
        </section>
        <section className="projects__section">
          <ProjectsCards/>
        </section>
        <section className="endInfo__section">
          <p>If you want to see more or all of my projects from my audit, the following button will take you to my GitHub repository. If you are interested in knowing more about me, I invite you to visit my resume section, there you will find more information about me.</p>
          <div className="endInfo__section--btn">
            <Link to={'https://github.com/JosCalCor22'} target='_blank'>
              <button>Go to my repo</button>
            </Link>
            <Link to={'/en/curriculum'}>
              <button>See my curriculum</button>
            </Link>
          </div>
        </section>
      </section>
    </>
  )
}

export { ProyectsEn }