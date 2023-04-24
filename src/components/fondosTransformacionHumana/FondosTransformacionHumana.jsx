import React from 'react'
import './fondostransHumana.scss';

const FondosTransformacionHumana = () => {
  return (
    <>
      
      <section class="section-fondos"> 
            <div class="card-container">
                <h2>
                Un proyect​o h​u​manista​​ y científico para todos
                </h2>
                <p className='parrafo'>EAFIT es una Universidad que a lo largo de su historia ha promovido el desarrollo del arte,
                  el deporte y la cultura como pa​​​rte fundamental de la institución,
                  adicionalmente en más de medio siglo de existencia,
                  la Universidad se ha preocupado por ofrecer la mejor infraestructura para el desarrollo de las actividades universitarias, en un ambiente que favorece el bienestar de sus estudiantes, empleados, docentes y visitantes. La formación no se da solo en las aulas, también en diferentes espacios deportivos, artísticos y culturales. Con tus aportes a esta causa contribuyes a la creación de un ambiente que favorece el aprendizaje integral de su comunidad.​
                </p>
                <div className="card-container__video">
                <iframe className="videoPrincipal" src="https://www.youtube.com/embed/0BVWd8EWXtk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                    <a href="./donacion" className='inputButtonFondos'>Donar Aquí</a>
                </div>
        </section>

    </>
  )
}

export default FondosTransformacionHumana;
