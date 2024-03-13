/* Hooks */
import React from 'react';
import { Link } from 'react-router-dom';
/* Components */

function Navigation(){
  return(
    <div className="targetInfo__links">
      <Link to='/curriculum'>
        <button className='container__btn'> Curriculum</button>
      </Link>
      <Link to='/proyectos'>
        <button className='container__btn2'>Proyectos</button>
      </Link>
    </div>
  )
}

export { Navigation };