import React from "react";
import './comodonar.scss';

const ComoDonar = ()=>{
    return(
        <>
        <section className="comoDonar-section" id="comoDonar">

            <h2>¿Cómo Donar?</h2>
            <p>En Filantropía EAFIT contamos con diferentes canales para facilitar el proceso de donación.</p>


            <div className="comoDonar-container">

                <article className="comoDonar-container__item">
                    <img src="./assetsEafit/icons/linea1.png" alt="Donacione en linea" />
                    <div className="comoDonar-container__body">
                        <h3>Donación en línea</h3>
                        <p>De forma fácil y segura realiza la donación con tarjeta de crédito o débito haciendo clic en
                            el icono a través de nuestro sitio web de donaciones.</p>
                    </div>
                </article>

                <article className="comoDonar-container__item">
                    <img src="./assetsEafit/icons/bancolombia.png" alt="Convenio Bancolombia" />
                    <div className="comoDonar-container__body">
                        <h3>Convenio Bancolombia</h3>
                        <p>Puedes programar tus donaciones recurrentes desde la sucursal virtual personas inscribiendo
                            el convenio No. 76787 a nombre de EAFIT CENTRO FILANTROPÍA por la opción “pagos facturas” o
                            puedes acercarte a cualquier sucursal Bancolombia y solicitar la inscripción al mismo
                            convenio.</p>
                    </div>
                </article>
                <article className="comoDonar-container__item">
                    <img src="./assetsEafit/icons/QR2.jpg" alt="Codigo QR" />
                    <div className="comoDonar-container__body">
                        <h3>Transferencia con código QR:</h3>
                        <p>Selecciona la opción “Transferencias”, luego elige la opción “con código QR” y escoge
                            “Transferir usando la cámara.”​
                            Desde la sucursal virtual, la app personas o directamente desde una oficina:
                            A la cuenta de ahorros Bancolombia número 935-948075-78 a nombre de la Universidad EAFIT.
                        </p>
                    </div>
                </article>
                <article className="comoDonar-container__item">
                    <img src="./assetsEafit/icons/cheque3.png" alt="cheque" />
                    <div className="comoDonar-container__body">
                        <h3>Cheque o donación en especie</h3>
                        <p>Comunícate con Filantropía EAFIT:(57) 604 2619500 ext 9297 cfilantropia@eafit.edu.co</p>
                    </div>
                </article>
                <article className="comoDonar-container__item">
                    <img src="./assetsEafit/icons/personalmente4.png" alt="Donar Personalmente"/>
                    <div className="comoDonar-container__body">
                        <h3>Personalmente en la Universidad EAFIT</h3>
                        <p>Dirígete a la caja principal del campus en Medellín, ubicado en la cra 49 #7 Sur-50 Bloque
                            29, piso 1.</p>
                    </div>
                </article>
                <article className="comoDonar-container__item">
                    <img src="./assetsEafit/icons/deduccion5.png" alt="Deduccion sueldo eafit"/>
                    <div className="comoDonar-container__body">
                        <h3>Deducción de nómina para empleados</h3>
                        <p>Si eres profesor o empleado de la Universidad, puedes realizar tu donación ingresando a este
                            link y diligenciando el formulario. Si deseas hacerlo físico,descarga el formato de
                            deducción de nómina y envíalo firmado, como documento adjunto, a los correos
                            mavelasquc@eafit.edu.co y cfilantropia@eafit.edu.co.</p>
                    </div>
                </article>
                <article className="comoDonar-container__item" style={{border: "none"}}>
                    <img src="./assetsEafit/icons/talento6.png" alt="Donar tu talento"/>
                    <div className="comoDonar-container__body">
                        <h3>Tiempo y talento</h3>
                        <p>Puedes donar tu tiempo, talento y/o conocimiento participando de los diferentes proyectos de
                            voluntariado en temas comunitarios, sociales, culturales, educativos y
                            filantrópicos,contribuyendo con la transformación social del país y obteniendo incontables
                            experiencia que le aportarán a tu proyecto de vida. Únete.
                            Ingresa y diligencia el formulario haciendo clic aquí</p>
                    </div>
                </article>
            </div>
            <div class="comoDonar-container__footer">
                <p>Para donaciones en especie, títulos valores, y donaciones que superen los 39 millones de pesos,
                    comunícate con Filantropía EAFIT al teléfono (57) 604 2619500 extensión 9297, o envíanos un correo
                    electrónico a cfilantropia@eafit.edu.co.</p>
            </div>
        </section>
        
        </>
    )
}

export default ComoDonar;