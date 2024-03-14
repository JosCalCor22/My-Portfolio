/* Hooks */
import React from 'react';
import { Link } from 'react-router-dom';
/* Components */

function Navigation(){
  return(
    <div className="targetInfo__links">
      <Link to='/es/curriculum'>
        <button className='container__btn'> Curriculum</button>
      </Link>
      <Link to='/es/proyectos'>
        <button className='container__btn2'>Proyectos</button>
      </Link>
      <Link to='/'>
        <button className='container__btn2'>Cambiar idioma</button>
      </Link>
    </div>
  )
}

export { Navigation };