import React from 'react'
import Imagenes from '../imagenes/Imagenes'
import './fondosEquidadSocial.scss';

const FondosEquidadSocial = () => {
  return (
    <>
    
    <section class="section-fondos">
            <div class="card-container">
                <h2>
                    Fondos a los que puedes aportar
                </h2> 

                <div class="card-options">
                    <div class="card-opctions__item">
                        <Imagenes token={"fondoBecas"} nameImg={"imgItem"}/>
                        <h3>Fondos de becas</h3>
                        <p>
                            Brindamos acceso a la universidad EAFIT a jóvenes que cuentan con un excelente desempeño académico y que no disponen de los recursos.                         </p>
                        <a href="./donaciones.html">Clic Aquí</a>
                    </div>
                    <div class="card-opctions__item">
                        <Imagenes token={"fondeDeporte"} nameImg={"imgItem"}/>
                        <h3>Deporte</h3>
                        <p>
                            Apoyamos procesos deportivos, recreativos y lúdicos dentro de la institución, además de participaciones a nivel competitivo. 
                        </p>

                        <a href="./donaciones.html">Clic Aquí</a>

                    </div>
                    <div class="card-opctions__item">
                        <Imagenes token={"fondoCultura"} nameImg={"imgItem"}/>
                        <h3>Cultura</h3>
                        <p>
                        Apoyamos actividades culturales, artísticas de la universidad, tales como: obras de literatura, arte, películas, documentales, música, entre otras.                        </p>

                        <a href="./donaciones.html">Clic Aquí</a>

                    </div>
                </div>
            </div>
        </section>

    </>
  )
}

export default FondosEquidadSocial
