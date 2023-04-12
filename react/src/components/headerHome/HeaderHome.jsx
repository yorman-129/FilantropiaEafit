import React from 'react'
import './headerHome.scss'

const HeaderHome= () => {
  return (
    <>
    
    <header>

        <div className="nav-container">
            <nav>
                <div className="nav-container__logo">
                    <img alt="Filantropia-Eafit" className="imgLogo"/>
                </div>
                <div className="nav-container__options">
                    <a href="#"> Inicio </a>
                    <a href="#donaciones"> Haz tú donación </a>
                    <a href="#causas"> Causas </a>
                    <a href="#comoDonar"> ¿Como Donar? </a>
                    <a href="#"> Acerca nosotros </a>
                </div>
            </nav>
        </div>
        <div className="cardHeader-container">
            <h1>FILANTROPÍA <br/><span>EAFIT</span></h1>
            <p>Haz parte de esta comunidad uniéndote mediante donaciones en tiempo, talento o dinero.</p>
            <div className="cardHeader-container__button">
                <a href="#comoDonar">¿Como Donar?</a>
                <a href="./donaciones.html">Dona Aquí</a>
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