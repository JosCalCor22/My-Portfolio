const Cover = ({ currentBody }) => {
  return (
    <div className={currentBody === 'cover' ? 'w-[50%] h-full' : 'hidden'}>
      <h1 className='text-seccolor text-4xl font-bold font-secfont py-3'>Joseth Calderón</h1>
      <h2 className='text-seccolor text-3xl font-bold font-secfont'>UX Engineer & Product Strategist</h2>
      <div className='flex flex-col gap-2.5 py-5'>
        <p className='text-seccolor text-lg font-prifont'>Mi pasión es construir el puente donde el diseño de producto y el código se encuentran para crear soluciones escalables.</p>
        <p className='text-seccolor text-lg font-prifont'>Transformo ideas complejas en interfaces intuitivas que cualquier usuario puede navegar. Mi experiencia liderando Startups y compitiendo en Hackathons internacionales me permite combinar la precisión del código con un diseño óptimo y una visión estratégica centrada en el consumidor.</p>
      </div>
    </div>
  )
}

export { Cover }