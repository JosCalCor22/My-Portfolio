/* libraries */
import React from 'react';
import { Link } from 'react-router-dom';

/* Icons */
import { FaSass } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

/* img */
import project1 from '../img/imgProject1.png';
import project2 from '../img/imgProject2.png';
import project3 from '../img/imgProject3.png';
import project4 from '../img/imgProject4.png'

function ProjectsCards() {
  return(
    <>
      <section className="projects__section--card">
        <div className="card__title">
          <h2>Tricky | Tic-Tac-Toe</h2>
        </div>
        <div className="card__img">
          <img src={project1} alt='Imagen proyecto 1' />
        </div>
        <div className="card__info">
          <div className="card__info--tech">
            <div className="card__info--tech-title">
              <h3>Tecnologías usadas:</h3>
            </div>
            <div className="card__info--tech-icons">
              <FaHtml5 className='icon icon-html' />
              <IoLogoJavascript className='icon icon-js' />
              <FaCss3Alt className='icon icon-css' />
              <FaSass className='icon icon-sass' />
              <FaReact className='icon icon-react' />
            </div>
          </div>
          <div className="card__info--description">
            <h3>Descripción:</h3>
            <p>Juego cooperativo donde la aplicación contiene bastantes funcionalidades complejas y completas para que el usuario tenga una muy buena interactividad.</p>
          </div>
          <div className="card__info--btn">
            <Link to='https://tic-tac-toe-henna-omega.vercel.app' target='_blank'>
              <button>Ver proyecto</button>
            </Link>
          </div>
        </div>
      </section>
      <section className="projects__section--card">
        <div className="card__title">
          <h2>Alura Traductor</h2>
        </div>
        <div className="card__img">
          <img src={project2} alt='Imagen proyecto 2' />
        </div>
        <div className="card__info">
          <div className="card__info--tech">
            <div className="card__info--tech-title">
              <h3>Tecnologías usadas:</h3>
            </div>
            <div className="card__info--tech-icons">
              <FaHtml5 className='icon icon-html' />
              <IoLogoJavascript className='icon icon-js' />
              <FaCss3Alt className='icon icon-css' />
            </div>
          </div>
          <div className="card__info--description">
            <h3>Descripción:</h3>
            <p>Traductor Alura tal como su nombre lo menciona es una aplicación donde puedes realizar traducciones en cuatro idiomas y aparte de eso puede encriptar y desencriptar mensajes de manera rápida y sencilla en un mismo sitio.</p>
          </div>
          <div className="card__info--btn">
            <Link to='https://joscalcor22.github.io/Traductor-Challange-Alura/' target='_blank'>
              <button>Ver proyecto</button>
            </Link>
          </div>
        </div>
      </section>
      <section className="projects__section--card">
        <div className="card__title">
          <h2>Random Quote</h2>
        </div>
        <div className="card__img">
          <img src={project3} alt='Imagen proyecto 2' />
        </div>
        <div className="card__info">
          <div className="card__info--tech">
            <div className="card__info--tech-title">
              <h3>Tecnologías usadas:</h3>
            </div>
            <div className="card__info--tech-icons">
              <FaHtml5 className='icon icon-html' />
              <SiTypescript className='icon icon-ts' />
              <FaCss3Alt className='icon icon-css' />
              <SiTailwindcss className='icon icon-tailwind' />
              <FaReact className='icon icon-react' />
            </div>
          </div>
          <div className="card__info--description">
            <h3>Descripción:</h3>
            <p>Traductor Alura tal como su nombre lo menciona es una aplicación donde puedes realizar traducciones en cuatro idiomas y aparte de eso puede encriptar y desencriptar mensajes de manera rápida y sencilla en un mismo sitio.</p>
          </div>
          <div className="card__info--btn">
            <Link to='https://joscalcor22.github.io/Traductor-Challange-Alura/' target='_blank'>
              <button>Ver proyecto</button>
            </Link>
          </div>
        </div>
      </section>
      <section className="projects__section--card">
        <div className="card__title">
          <h2>LoopStudio</h2>
        </div>
        <div className="card__img">
          <img src={project4} alt='Imagen proyecto 2' />
        </div>
        <div className="card__info">
          <div className="card__info--tech">
            <div className="card__info--tech-title">
              <h3>Tecnologías usadas:</h3>
            </div>
            <div className="card__info--tech-icons">
              <FaHtml5 className='icon icon-html' />
              <IoLogoJavascript className='icon icon-js' />
              <FaCss3Alt className='icon icon-css' />
            </div>
          </div>
          <div className="card__info--description">
            <h3>Descripción:</h3>
            <p>LoopStudio es un website en donde se implemento JS como lenguaje de programación para los diferentes eventos que se pueden encontrar en el sitio web y también el uso de HTML y CSS como herramientas de diseño y estructuración. La novedad principal de este proyecto es el uso de SASS como preprocesador al momento de realizar el diseño.</p>
          </div>
          <div className="card__info--btn">
            <Link to='https://joscalcor22.github.io/LoopStudio/' target='_blank'>
              <button>Ver proyecto</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export { ProjectsCards }