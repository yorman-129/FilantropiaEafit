import React from "react";
import Imagenes from "../imagenes/Imagenes";
import './footer.scss';

const Footer = ()=>{
    return(
        <>
        <footer className="footer-container">
        <div className="footer-container__items">
            <h3>Contactanos </h3>
        
                <div className="footer-container__article">
                    <span>EAFIT Medellín</span><br/>
                    Carrera 49 N° 7 Sur-50<br/>
                    Línea nacional: 01 8000 515 900<br/>
                    Línea de atención (57) 604 2619500<br/>
                    Whatsapp: (57) 310 8992908<br/>
                    Centro de Visitantes
                </div>

                <div className="footer-container__article">
                    <span>
                        EAFIT Pereira<br/>
                    </span>

                    Carrera 19 #12-70 Megacentro Pinares<br/>
                    (57) 606 3214115, 606 3214119<br/>
                </div>

                <div className="footer-container__article">
                    <span>
                        EAFIT Bogotá<br/>
                    </span>
                    Carrera 21 #87-85<br/>
                    (57) 601 6114618<br/>
                </div>

                <div className="footer-container__article">
                    <span>
                        EAFIT Llanogrande<br/>
                    </span>
                    Km 3.5 vía Don Diego -Rionegro<br/>
                </div>
            
        </div>
        <div className="footer-container__items">
            <div className="footer-container__article">
                <h3>Conectate con EAFIT</h3>
                Inscríbete en un programa<br />
                    Pregrados<br />
                    Posgrados<br />
                    Programas virtuales<br />
                    Idiomas<br />
                    Cursos, diplomados y seminarios<br />
                    Alta Dirección<br />
                    Para mayores de 50<br />
                    Universidad de los Niños<br />
                    Ciencia, tecnología e innovación<br />
                    Centros de estudio<br />
                    Filantropía<br />
                    Empresas<br />
                    Sistemas públicos<br />
                    Ecosistema de emprendimiento<br />
                    Trabaja con nosotros<br />
            </div>
            
           
        </div>
        <div className="footer-container__items">
            <h3>Sobre nosotros</h3>
            
                <div className="footer-container__article">
                    Biblioteca<br/>
                    Tarifas<br/>
                    Personería jurídica<br/>
                    Reglamentos y estatutos<br/>
                    Línea de transparencia<br/>
                    Preguntas frecuentes<br/>
                    Registra una PQRSF<br/>
                    Género, Diversidad e Inclusión<br/>
                    Notificaciones judiciales y certificados<br/>
                    Actualiza tus datos<br/>
                    Política de protección de datos<br/>
                    Términos de uso<br/>
                    Más Información Institucional<br/>
                </div>
           
        </div>
        
        <div className="footer-container__items">
            <h3>Nuestras redes sociales</h3>
            <div className="containerImages">
                <Imagenes token={"instagram"}/>
                <Imagenes token={"facebook"}/>
                <Imagenes token={"linkedin"}/>
                <Imagenes token={"correo"}/>
                <Imagenes token={"wpp"}/>
                <Imagenes token={"youtube"}/>
            </div>
            <div className="containerLogo">
                <Imagenes token={"logoFooter"}/>
                <article className="footer-container__article">
                    Universidad con Acreditación Institucional hasta 2026
                </article>
               
            </div>
        </div>
    </footer>
        </>
    )
}

export default Footer;