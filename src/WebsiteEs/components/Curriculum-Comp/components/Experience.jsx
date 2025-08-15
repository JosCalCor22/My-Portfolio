export default function Experience(){
  return (
    <>
      <div className="experience__section--title">
        <h2>Experiencia</h2>
      </div>
        {/* CARD 1 */}  
        <div className="experience__section--card1 card__experience">
          <div className="card__experience--info">
            <div className="card__experience--info-date">
              <h3>Fecha:</h3>
              <p>01/10/2025 - Actual</p>
            </div>
            <div className="card__experience--info-job">
              <h3>Puesto:</h3>
              <p>CEO & Founder</p>
            </div>
            <div className="card__experience--info-company">
              <h3>Empresa:</h3>
              <p>LehreTech</p>
            </div>
          </div>
          <article className="card__experience--description">
            <ul>
              <li>Fundador y líder en el desarrollo de modelo de negocio completo y en toma de decisiones estratégicas para el lanzamiento al mercado.</li>
              <li>Diseño y desarrollo de producto robusto, asumiendo roles en diseño, desarrollo, QA y el área comercial, con la IA como componente central del producto.</li>
              <li>Implementación de varios modelos de IA para generar texto, imágenes y videos, creando una solución integral para los clientes.</li>
              <li>Adquisición y gestión de clientes, fortaleciendo mis habilidades blandas y mi red de contactos para asegurar que el mensaje de venta fuera certero y que el producto satisficiera sus necesidades.</li>
            </ul>
          </article>
        </div>

        {/* CARD 2 */}
        <div className="experience__section--card2 card__experience">
          <div className="card__experience--info">
            <div className="card__experience--info-date">
              <h3>Fecha:</h3>
              <p>01/07/2024 - 25/10/2024</p>
            </div>
            <div className="card__experience--info-job">
              <h3>Puesto:</h3>
              <p>Desarrollador Frontend</p>
            </div>
            <div className="card__experience--info-company">
              <h3>Empresa:</h3>
              <p>Norangle Solutions</p>
            </div>
          </div>
          <article className="card__experience--description">
            <ul>
              <li>Desarrollo de página web completa utilizando tecnologías como React y Tailwind.</li>
              <li>Creación de prototipos adaptativos en Figma, asegurando un diseño óptimo y un proceso de desarrollo eficiente.</li>
              <li>Colaboración en la estructuración de productos para clientes, lo que enriqueció mi perspectiva sobre el trato y la visualización de sus necesidades.</li>
            </ul>
          </article>
        </div>

        {/* CARD 3 */}
        <div className="experience__section--card3 card__experience">
          <div className="card__experience--info">
            <div className="card__experience--info-date">
              <h3>Fecha:</h3>
              <p>01/10/2023 - 30/04/2024</p>
            </div>
            <div className="card__experience--info-job">
              <h3>Puesto:</h3>
              <p>CTO</p>
            </div>
            <div className="card__experience--info-company">
              <h3>Empresa:</h3>
              <p>BienestarTu</p>
            </div>
          </div>
          <article className="card__experience--description">
            <ul>
              <li>Liderazgo en el desarrollo y mantenimiento de la página web utilizando herramientas NoCode y programación Frontend con React, Tailwind y HTML.</li>
              <li>Participación en decisiones administrativas y procesos de contratación, contribuyendo significativamente al crecimiento y éxito de la startup.</li>
              <li>Desarrollo de arquitectura y la gestión de roles para la elaboración del backend, asegurando la integración perfecta de los sistemas</li>
            </ul>
          </article>
        </div>
    </>
  );
}