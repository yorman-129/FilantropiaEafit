import React from 'react'
import './headerDonacion.scss'
import Imagenes from "../imagenes/Imagenes";

const HeaderDonacion= () => {
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
                    <a href="home"> Inicio </a>
                    <a href="#donaciones"> Haz tú donación </a>
                    <a href="#"> Acerca nosotros </a>
                </div>
            </nav>
        </div>
        
        <div className="cardHeaderHome-container">
            <h1>DONACIONES  <br/><span>FILANTROPÍA-EAFIT</span></h1>
            <div className="cardHeader-container__button">
                <a href="#donar">Dona Aquí</a>
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


export default HeaderDonacion;