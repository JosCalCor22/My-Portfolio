import { useState } from 'react'
import { Link } from 'react-router-dom'

import CVEspañol from '../pdf/CV-Joseth.pdf'

function MoreInfo (){
  const [openViewerCVEs, setOpenViewerCVEs] = useState(false);

  return(
    <section className="container__cv">
      <div className="container__cv--title">
        <h2>Mas información</h2>
      </div>
      <div className="container__cv--description">
        <p>En mi CV obtendras mas información de valor sobre mi y videa academica. Tambien puedes ver mis proyectos y evidenciar las diferentes habilidades que he aplicado como desarrollador a lo largo de mi carrera.</p>
      </div>
      <div className="container__cv--buttons">
        <div className="container__cv--buttons-btn">
          <button onClick={() => {setOpenViewerCVEs(!openViewerCVEs)}}>Ver mi CV</button>
          <Link to={'/es/proyectos'}>
            <button>Ver mis proyectos</button>
          </Link>
        </div>

        {/* VISTA PREVIA */}
        {
          openViewerCVEs && (
            <section className='container__cv--viewer'>
              <div className="container__cv--viewer-view">
                <embed src={CVEspañol} type="application/pdf" />
              </div>
            </section>
          )
        }
      </div>
    </section>
  )
}

export { MoreInfo }