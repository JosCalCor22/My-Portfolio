import { useState } from 'react'
import { Link } from 'react-router-dom'

import CVIngles from '../pdf/CV-Joseth.pdf'

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
          <button onClick={() => {setOpenViewerCVEn(!openViewerCVEn), setOpenViewerCVEs(false)}}>See my CV</button>
          <Link to={'/en/proyects'}>
            <button>See my projects</button>
          </Link>
        </div>

        {/* PREVIEW */}
        {
            openViewerCVEn && (
              <section className='container__cv--viewer'>
                <div className="container__cv--viewer-view">
                  <embed src={CVIngles} type="application/pdf" />
                </div>
              </section>
            )
          }
      </div>
    </section>
  )
}

export { MoreInfo }