import React from 'react';
import './donacionHome.scss'
import Imagenes from '../imagenes/Imagenes';

const DonacionHome = () => {
    return(
        <>
        <section className="donaciones-section" id="donaciones">
            <div className="card-container">
                <h2>
                    Donaciones
                </h2>
                <p>
                    Promovemos la transformación social por medio de vínculos de confianza y<br /> solidaridad para
                    generar oportunidades a través de la educación
                </p>

                <div className="card-container__video">
                    <iframe className="videoPrincipal" src="https://www.youtube.com/embed/716Kk9SKMpk"
                        title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </div>

                <div className="card-options">
                    <div className="card-opctions__item">
                        <Imagenes token={"logoDonar"}/>
                        <h3>Realizar Donación</h3>
                        <p>
                            Por medio de tú donación estas contribuyendo a una gran transformación de nuestra sociedad
                        </p>
                        <a href="./donacion">Clic Aquí</a>
                    </div>
                    <div className="card-opctions__item">
                        <Imagenes token={"logoDonar"}/>
                        <h3>Generar Certificado</h3>
                        <p>
                            Consulta y/o genera tú certificado
                        </p>

                        <a href="./donacion">Clic Aquí</a>

                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default DonacionHome;