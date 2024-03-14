/* Hooks */
import React from 'react';
import { Link } from 'react-router-dom';
/* Components */

function Navigation(){
  return(
    <div className="targetInfo__links">
      <Link to='/en/curriculum'>
        <button className='container__btn'> Curriculum</button>
      </Link>
      <Link to='/en/proyects'>
        <button className='container__btn2'>Proyects</button>
      </Link>
      <Link to='/'>
        <button className='container__btn2'>Change language</button>
      </Link>
    </div>
  )
}

export { Navigation };