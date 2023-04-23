import React from "react";
import Imagenes from "../imagenes/Imagenes";
import './aliados.scss'

const Aliados = () => {
    return (
        <>
            <section className="aliados-section" id="aliados">
                <div className="aliados-section__titulo">
                    <h2>Nuestros Principales Aliados</h2>
                </div>
                <div className="container-slider">
                    <div className="slider-track">
                        <div className="slide">
                            <Imagenes token={"logoAliados1"} nameImg={"imgSlide"} />
                        </div>
                        <div className="slide">
                            <Imagenes token={"logoAliados2"} nameImg={"imgSlide"} />
                        </div>
                        <div className="slide">
                            <Imagenes token={"logoAliados3"} nameImg={"imgSlide"} />
                        </div>
                        <div className="slide">
                            <Imagenes token={"logoAliados4"} nameImg={"imgSlide"} />
                        </div>
                        <div className="slide">
                            <Imagenes token={"logoAliados5"} nameImg={"imgSlide"} />
                        </div>
                        <div className="slide">
                            <Imagenes token={"logoAliados6"} nameImg={"imgSlide"} />
                        </div>
                        <div className="slide">
                            <Imagenes token={"logoAliados7"} nameImg={"imgSlide"} />
                        </div>
                        <div className="slide">
                            <Imagenes token={"logoAliados8"} nameImg={"imgSlide"} />
                        </div>
                        <div className="slide">
                            <Imagenes token={"logoAliados9"} nameImg={"imgSlide"} />
                        </div>
                        <div className="slide">
                            <Imagenes token={"logoAliados10"} nameImg={"imgSlide"} />
                        </div>
                        <div className="slide">
                            <Imagenes token={"logoAliados11"} nameImg={"imgSlide"} />
                        </div>
                        <div className="slide">
                            <Imagenes token={"logoAliados12"} nameImg={"imgSlide"} />
                        </div>
                        <div className="slide">
                            <Imagenes token={"logoAliados13"} nameImg={"imgSlide"} />
                        </div>
                        <div className="slide">
                            <Imagenes token={"logoAliados15"} nameImg={"imgSlide"} />
                        </div>
                        <div className="slide">
                            <Imagenes token={"logoAliados16"} nameImg={"imgSlide"} />
                        </div>
                        <div className="slide">
                            <Imagenes token={"logoAliados17"} nameImg={"imgSlide"} />
                        </div>
                        <div className="slide">
                            <Imagenes token={"logoAliados19"} nameImg={"imgSlide"}/>
                        </div>
                        <div className="slide">
                            <Imagenes token={"logoAliados20"} nameImg={"imgSlide"} />
                        </div>
                        <div className="slide">
                            <Imagenes token={"logoAliados21"} nameImg={"imgSlide"} />
                        </div>
                        <div className="slide">
                            <Imagenes token={"logoAliados22"} nameImg={"imgSlide"} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Aliados;