import { useState } from 'react'
import { Link } from 'react-router-dom'

function MoreInfo (){
  const [openViewerCVEn, setOpenViewerCVEn] = useState(false);
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
          <button onClick={() => {setOpenViewerCVEn(!openViewerCVEn), setOpenViewerCVEs(false)}}>Ver mi CV (English)</button>
          <button onClick={() => {setOpenViewerCVEs(!openViewerCVEs), setOpenViewerCVEn(false)}}>Ver mi CV (Español)</button>
          <Link to={'/en/proyects'}>
            <button>Ver mis proyectos</button>
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
                  <embed src="src/components/Curriculum-Comp/pdf/CV_Joseth_Calderon(2024).pdf" type="application/pdf" />
                </div>
              </section>
            )
          }
          {
            openViewerCVEs && (
              <section className='container__cv--viewer'>
                <div className="container__cv--viewer-view">
                  <embed src="src/components/Curriculum-Comp/pdf/H.V_JOSETH_CALDERON(2024).pdf" type="application/pdf" />
                </div>
              </section>
            )
          }
      </div>
    </section>
  )
}

export { MoreInfo }