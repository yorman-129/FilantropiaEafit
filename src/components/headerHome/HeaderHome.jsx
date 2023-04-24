import React from 'react'
import './headerHome.scss'
import Imagenes from "../imagenes/Imagenes";

const HeaderHome= () => {
  return (
    <>
    
    <header>

        <Imagenes token={"fondoHeaderHome"} nameImg={"imgHeaderHome"}/>

        <div className="nav-container">
            <nav>
                <div className="nav-container__logo">
                <Imagenes token={"logoFilantropia"} nameImg={"imgLogo"}/>
                </div>
                <div className="nav-container__options">
                    <a href="#"> Inicio </a>
                    <a href="#donaciones"> Haz tú donación </a>
                    <a href="#causas"> Causas </a>
                    <a href="#"> Acerca nosotros </a>
                </div>
            </nav>
        </div>
        
        <div className="cardHeaderHome-container">
            <h1>FILANTROPÍA <br/><span>EAFIT</span></h1>
            <p>Haz parte de esta comunidad uniéndote mediante donaciones en tiempo, talento o dinero.</p>
            <div className="cardHeader-container__button">
                <a href="#comoDonar">¿Como Donar?</a>
                <a href="./donacion">Dona Aquí</a>
            </div>
        </div>
        
        <p className="footerHead">
            Aquí es donde se cultiva la transformación social por medio de iniciativas filantrópicas, para contribuir al
            desarrollo de la sociedad
        </p>
     
        
    </header>

    </>
  )
}


export default HeaderHome;