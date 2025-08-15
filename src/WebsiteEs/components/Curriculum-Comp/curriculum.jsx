/* Hooks */
import React from 'react';
import { Link } from 'react-router-dom';

/* Components */
import GraphSection from './components/Graphs.jsx';
import { MoreInfo } from './components/moreInfo.jsx';
import ExperienceSection from './components/Experience.jsx';

/* SVG */
import ArrowSVG from '../../assets/svg/Arrow-Icon.svg';

function CurriculumEs(){
  return(
    <section className="container__curriculum">
      <section className="title__section">
        <div className="title__section--items">
          <Link to='/es/home'>
            <button className="items__btn">
              <img src={ArrowSVG} alt="Arrow Icon" />
            </button>
          </Link>
          <h2>Curriculum</h2>
          <Link to='/es/proyectos'>
            <button className='nextPage__btn'>Proyectos</button>
          </Link>
        </div>
      </section>
      <section className="experience__section">
        <ExperienceSection />
      </section>
      <section className="graphics__section">
        <GraphSection />
      </section>
      <section className="moreInfo__section">
        <MoreInfo />
      </section>
    </section>
  )
}

export { CurriculumEs }