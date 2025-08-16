export default function Experience(){
  return (
    <>
      <div className="experience__section--title">
        <h2>Experience</h2>
      </div>

      {/* CARD #1 */}
      <div className="experience__section--card1 card__experience">
        <div className="card__experience--info">
          <div className="card__experience--info-date">
            <h3>Date:</h3>
            <p>01/10/2025 - Present</p>
          </div>
          <div className="card__experience--info-job">
            <h3>Job:</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="card__experience--info-company">
            <h3>Company:</h3>
            <p>LehreTech</p>
          </div>
        </div>
        <article className="card__experience--description">
          <ul>
            <li>Founder and leader in the development of a complete business model and in strategic decision-making for market launch.</li>
            <li>Designed and developed a robust product, assuming roles in design, development, QA, and sales, with AI as a core component of the product.</li>
            <li>Implemented various AI models to generate text, images, and videos, creating a comprehensive solution for clients.</li>
            <li>Acquired and managed clients, strengthening my soft skills and network to ensure the sales message was accurate and that the product met their needs.</li>
          </ul>
        </article>
      </div>

      {/* CARD #2 */}
      <div className="experience__section--card2 card__experience">
        <div className="card__experience--info">
          <div className="card__experience--info-date">
            <h3>Date:</h3>
            <p>01/07/2024 - 25/10/2024</p>
          </div>
          <div className="card__experience--info-job">
            <h3>Job:</h3>
            <p>Frontend Developer</p>
          </div>
          <div className="card__experience--info-company">
            <h3>Company:</h3>
            <p>Norangle Solutions</p>
          </div>
        </div>
        <article className="card__experience--description">
          <ul>
            <li>Complete website development using technologies such as React and Tailwind.</li>
            <li>Created responsive prototypes in Figma, ensuring an optimal design and efficient development process.</li>
            <li>Collaborated on structuring products for clients, which enriched my perspective on how to approach and visualize their needs.</li>
          </ul>
        </article>
      </div>

      {/* CARD #3 */}
      <div className="experience__section--card3 card__experience">
        <div className="card__experience--info">
          <div className="card__experience--info-date">
            <h3>Date:</h3>
            <p>01/10/2023 - 30/04/2024</p>
          </div>
          <div className="card__experience--info-job">
            <h3>Job:</h3>
            <p>CTO</p>
          </div>
          <div className="card__experience--info-company">
            <h3>Company:</h3>
            <p>BienestarTu</p>
          </div>
        </div>
        <article className="card__experience--description">
          <ul>
            <li>Leadership in website development and maintenance using NoCode tools and front-end programming with React, Tailwind, and HTML.</li>
            <li>Participation in administrative decisions and hiring processes, significantly contributing to the startup's growth and success.</li>
            <li>Architectural development and role management for backend development, ensuring seamless systems integration.</li>
          </ul>
        </article>
      </div>
    </>
  );
}