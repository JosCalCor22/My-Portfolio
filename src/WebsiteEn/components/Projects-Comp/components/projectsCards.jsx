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
import project0 from '../img/imgProject0.png';
import project1 from '../img/imgProject1.png';
import project2 from '../img/imgProject2.png';
import project3 from '../img/imgProject3.png';
import project4 from '../img/imgProject4.png';

function ProjectsCards() {
  return(
    <>
      <section className="projects__section--card">
        <div className="card__title">
          <h2>SciFile | Hackathon Filecoin</h2>
        </div>
        <div className="card__img">
          <img src={project0} alt='Imagen proyecto 1' />
        </div>
        <div className="card__info">
          <div className="card__info--tech">
            <div className="card__info--tech-title">
              <h3>Technologies used:</h3>
            </div>
            <div className="card__info--tech-icons">
              <SiTypescript className='icon icon-ts' />
              <IoLogoJavascript className='icon icon-js' />
              <FaCss3Alt className='icon icon-css' />
              <FaSass className='icon icon-sass' />
              <FaReact className='icon icon-react' />
            </div>
          </div>
          <div className="card__info--description">
            <h3>Description:</h3>
            <p>This was the hackathon project, its purpose is to allow users who use our website to upload articles in a decentralized way. In this way all articles will not have any type of limitation or censorship. Although the project is not complete, it has a frontend and backend structure, in addition to having interaction with the Filecoin blockchain. It should be noted that this project was an MVP.</p>
          </div>
          <div className="card__info--btn">
            <Link to='https://quick-raincoat-crooked.on-fleek.app' target='_blank'>
              <button>See project</button>
            </Link>
          </div>
        </div>
      </section>
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
              <h3>Technologies used:</h3>
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
            <h3>Description:</h3>
            <p>Cooperative game where the application contains many complex and complete functionalities so that the user has very good interactivity.</p>
          </div>
          <div className="card__info--btn">
            <Link to='https://tic-tac-toe-henna-omega.vercel.app' target='_blank'>
              <button>See project</button>
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
              <h3>Technologies used:</h3>
            </div>
            <div className="card__info--tech-icons">
              <FaHtml5 className='icon icon-html' />
              <IoLogoJavascript className='icon icon-js' />
              <FaCss3Alt className='icon icon-css' />
            </div>
          </div>
          <div className="card__info--description">
            <h3>Description:</h3>
            <p>Alura Translator, as its name suggests, is an application where you can perform translations in four languages and apart from that, it can encrypt and decrypt messages quickly and easily in one place.</p>
          </div>
          <div className="card__info--btn">
            <Link to='https://joscalcor22.github.io/Traductor-Challange-Alura/' target='_blank'>
              <button>See project</button>
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
              <h3>Technologies used:</h3>
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
            <h3>Description:</h3>
            <p>Alura Translator, as its name suggests, is an application where you can perform translations in four languages and apart from that, it can encrypt and decrypt messages quickly and easily in one place.</p>
          </div>
          <div className="card__info--btn">
            <Link to='https://joscalcor22.github.io/Traductor-Challange-Alura/' target='_blank'>
              <button>See project</button>
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
              <h3>Technologies used:</h3>
            </div>
            <div className="card__info--tech-icons">
              <FaHtml5 className='icon icon-html' />
              <IoLogoJavascript className='icon icon-js' />
              <FaCss3Alt className='icon icon-css' />
            </div>
          </div>
          <div className="card__info--description">
            <h3>Description:</h3>
            <p>LoopStudio is a website where JS was implemented as a programming language for the different events that can be found on the website and also the use of HTML and CSS as design and structuring tools. The main novelty of this project is the use of SASS as a preprocessor when carrying out the design.</p>
          </div>
          <div className="card__info--btn">
            <Link to='https://joscalcor22.github.io/LoopStudio/' target='_blank'>
              <button>See project</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export { ProjectsCards }