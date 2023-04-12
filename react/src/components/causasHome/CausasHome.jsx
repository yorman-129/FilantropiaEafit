import React from "react";
import './causasHome.scss';

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
                    <img src="public/assetsEafit/equidadSocial.jpg" alt="Equidad social e inclusión"/>
                    </div>
                    <h4>Equidad Social e inclusion</h4>
                    <p>Impactamos a través de becas y apoyos académicos</p>
                    <a href="http://">Donar Aquí</a>
                </div>
                <div className="container-card">
                    <div className="container-card__img">
                    <img src="./assetsEafit/ciencia,tech,innova.jpg" alt="Ciencia, tecnologia e innovación"/>
                    </div>
                    <h4>Ciencia, tecnologia e innovación</h4>
                    <p>Apalancamos proyectos de investigación para beneficio de la humanidad</p>
                    <a href="http://">Donar Aquí</a>
                </div>
                <div className="container-card">
                    <div className="container-card__img">
                    <img src="./assetsEafit/transformacionhumana.jpg" alt="Transformación humanista"/>
                    </div>
                    <h4>Transformación humanista</h4>
                    <p>Apoyamos la cultura, el deporte y proyectos de infraestructura</p>
                    <a href="http://">Donar Aquí</a>
                </div>
                <div className="container-card">
                    <div className="container-card__img">
                    <img src="./assetsEafit/inspiramos.jpg" alt="Inspiración - Voluntariado"/>
                    </div>
                    <h4>Inspiración - Voluntariado</h4>
                    <p>Conectamos talento para un mayor impacto</p>
                    <a href="http://">Donar Aquí</a>
                </div>
            </div>
        </section>

        </>
    );
}

export default CausasHome;