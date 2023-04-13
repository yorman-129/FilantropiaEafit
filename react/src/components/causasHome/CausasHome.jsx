import React from "react";
import './causasHome.scss';
import Imagenes from "../imagenes/Imagenes";

const CausasHome = ()=>{
    return(
        <>
            <section className="causas-section" id="causas">
            <div className="causas-section__titulo">
                <h2>Nuestras Causas</h2>
                <p>Contribuimos con la equidad, el desarrollo social y científico, a partir de nuestras iniciativas:</p>
            </div>
            <div className="causas-section__items">
                <div className="container-card">
                    <div className="container-card__img">
                        <Imagenes token={"cienciatechinnova"}/>
                    </div>
                    <h4>Equidad Social e inclusion</h4>
                    <p>Impactamos a través de becas y apoyos académicos</p>
                    <a href="./equidadSocial">Donar Aquí</a>
                </div>
                <div className="container-card">
                    <div className="container-card__img">
                    <Imagenes token={"equidadSocial"}/>
                    </div>
                    <h4>Ciencia, tecnologia e innovación</h4>
                    <p>Apalancamos proyectos de investigación para beneficio de la humanidad</p>
                    <a href="./cienciaTecnologia">Donar Aquí</a>
                </div>
                <div className="container-card">
                    <div className="container-card__img">
                    <Imagenes token={"transformacionHumanista"}/>
                    </div>
                    <h4>Transformación humanista</h4>
                    <p>Apoyamos la cultura, el deporte y proyectos de infraestructura</p>
                    <a href="./transformacionHumana">Donar Aquí</a>
                </div>
                <div className="container-card">
                    <div className="container-card__img">
                    <Imagenes token={"inspiracionCausa"}/>
                    </div>
                    <h4>Inspiración - Voluntariado</h4>
                    <p>Conectamos talento para un mayor impacto</p>
                    <a href="./voluntariado">Donar Aquí</a>
                </div>
            </div>
        </section>

        </>
    );
}

export default CausasHome;