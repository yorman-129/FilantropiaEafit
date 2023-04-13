import React from 'react'
import './fondosCienciaTech.scss';

const FondosCienciaTEch = () => {
  return (
    <>
      
      <section class="section-fondos">
            <div class="card-container">
                <h2>
                    Apalancamos proyectos de investigación para beneficio de la humanidad
                </h2>
                <p>Evaluamos valor social a partir de proyectos de investigación, logrando de una forma eficiente resolver los problemas sociales y contribuir a la generación de conocimiento.
                    Uno de los propósitos de nuestra Institución que inspira, crea y transforma es desarrollar la capacidad intelectual de los estudiantes y profesores en todos los programas académicos con la investigación como soporte básico.
                    Con tus aportes a los proyectos de investigación científica y aplicada, impulsas la producción de respuestas innovadoras que contribuyen a la solución de problemáticas ​de ​nuestra sociedad.
                </p>
                <div className="card-container__video">
                <iframe className="videoPrincipal" src="https://www.youtube.com/embed/9AfH9ZEb-18" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                    <a href="./donacion">Donar Aquí</a>
                </div>
        </section>

    </>
  )
}

export default FondosCienciaTEch
