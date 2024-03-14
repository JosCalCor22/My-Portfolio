import { useState } from 'react'
import { Link } from 'react-router-dom'

import CVEspañol from '../pdf/H.V_JOSETH_CALDERON(2024).pdf'
import CVIngles from '../pdf/CV_Joseth_Calderon(2024).pdf'

function MoreInfo (){
  const [openViewerCVEn, setOpenViewerCVEn] = useState(false);
  const [openViewerCVEs, setOpenViewerCVEs] = useState(false);

  return(
    <section className="container__cv">
      <div className="container__cv--title">
        <h2>More Information</h2>
      </div>
      <div className="container__cv--description">
        <p>In my CV you will get more valuable information about me and academic video. You can also see my projects and demonstrate the different skills that I have applied as a developer throughout my career.</p>
      </div>
      <div className="container__cv--buttons">
        <div className="container__cv--buttons-btn">
          <button onClick={() => {setOpenViewerCVEn(!openViewerCVEn), setOpenViewerCVEs(false)}}>See my CV (English)</button>
          <button onClick={() => {setOpenViewerCVEs(!openViewerCVEs), setOpenViewerCVEn(false)}}>See my CV (Español)</button>
          <Link to={'/en/proyects'}>
            <button>See my projects</button>
          </Link>
        </div>
        <div className="container__cv--buttons-btnResponsive">
          <Link to={'https://drive.google.com/file/d/1N2Nepyoz6YTceb2oKBBraZL-uEITgMWo/view'} target='_blank'>
            <button>Ver mi CV (English)</button>
          </Link>
          <Link to={'https://drive.google.com/file/d/1DCTfixCrsYdprXwX66yTa_F2AZFa7WRG/view'} target='_blank'>
            <button>Ver mi CV (Español)</button>
          </Link>
          <Link to={'/proyectos'}>
            <button>Ver mis proyectos</button>
          </Link>
        </div>
        {
            openViewerCVEn && (
              <section className='container__cv--viewer'>
                <div className="container__cv--viewer-view">
                  <embed src={CVIngles} type="application/pdf" />
                </div>
              </section>
            )
          }
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