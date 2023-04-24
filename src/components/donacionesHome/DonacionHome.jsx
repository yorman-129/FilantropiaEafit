import React, { useState } from 'react';
import './donacionHome.scss'
import Imagenes from '../imagenes/Imagenes';
import Modal from '../modal/Modal';

const DonacionHome = () => {

    const [mostrar,setMostrar]=useState(false)

    return (
        <>
        <Modal isOpen={mostrar} onClose={()=> setMostrar(false)} />
            <section className="donaciones-section" id="donaciones">
                <div className="card-containerHome">
                    
                        <h2>Donaciones</h2>
                    
                    <p>
                        Promovemos la transformación social por medio de vínculos de confianza y<br /> solidaridad para
                        generar oportunidades a través de la educación
                    </p>

                    <div className="card-containerHome__video">
                        <iframe className="videoPrincipal" src="https://www.youtube.com/embed/716Kk9SKMpk"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                    </div>

                    <div className="card-options">
                        <div className="card-opctions__itemHome">
                            <Imagenes token={"logoDonar"} />
                            <h3>Realizar Donación</h3>
                            <p className='pItemHome'>
                                Por medio de tú donación estas contribuyendo a una gran transformación de nuestra sociedad.
                            </p>
                            <footer className="containerFooter">

                                <a href="./donacion" className='Abutton'>Clic Aquí</a>
                            </footer>
                        </div>
                        <div className="card-opctions__itemHome">
                            <Imagenes token={"logoDonar"} />
                            <h3>Generar Certificado</h3>
                            <p className='pItemHome'>
                                Consulta y/o genera tú certificado de la contribucion que aportaste a nuestra causa.
                            </p>
                            <footer className="containerFooter">
                                <a className='Abutton' onClick={()=> setMostrar(true)}>Clic Aquí</a>
                            </footer>
                                
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default DonacionHome;