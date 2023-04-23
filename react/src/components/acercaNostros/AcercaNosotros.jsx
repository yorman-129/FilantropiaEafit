import React from 'react';
import './acercaNosotros.scss';
import Imagenes from '../imagenes/Imagenes';

const AcercaNosotros = () => {
    return (
        <><section className="container-section">
            <div className="tittleContacto">
                <h2>Contacto</h2>
                <p>​Escríbenos a <span>cfilant​ropia@eafit.edu.co</span></p>
            </div>
            <div className="acercaNosotros">

                <div className='personaItem'>
                    <Imagenes token={'MariaClaraCeballos'} nameImg={'imgAcercaNosotros'} />
                    <h3>
                        Maria Clara Ceballos Arango
                    </h3>
                    <p>
                        Jefa de Filantropía EAFIT
                    </p>
                    <p>
                        Teléfono: (57) 604 261 9500, extensión 8857
                    </p>
                    <a href="">
                        mceball4@eafit.edu.co
                    </a>
                    <a href="">
                        cfil​antropia@eafit.edu.co
                    </a>
                </div>
                <div className='personaItem'>
                    <Imagenes token={'MariaCristinaMontoya'} nameImg={'imgAcercaNosotros'} />
                    <h3>
                        María Cristina Montoya Vélez
                    </h3>
                    <p>
                        Coordinadora Administrativa
                    </p>
                    <a href="">
                        mmonto41@eafit.edu.co
                    </a>
                    <a href="">
                        cfilantropia@eafit.edu.co
                    </a>
                </div>
                <div className='personaItem'>
                    <Imagenes token={'LuzAdrianaYepes'} nameImg={'imgAcercaNosotros'} />
                    <h3>
                        Luz Adriana Yepes Ari​as
                    </h3>
                    <p>
                        Analista de Info​rmación
                    </p>
                    <a href="">
                        layepesa@eafit.edu.co
                    </a>
                </div>
                <div className='personaItem'>
                    <Imagenes token={'LizyennyOsorio'} nameImg={'imgAcercaNosotros'} />
                    <h3>
                        Lizy​enny Osorio Álvarez
                    </h3>
                    <p>
                        Analista​ de Voluntariado
                    </p>
                    <a href="">
                        losorioa@eafit.edu.co
                    </a>
                </div>
                <div className='personaItem'>
                    <Imagenes token={'MarcelaBuilesToro'} nameImg={'imgAcercaNosotros'} />
                    <h3>
                        Marcela Builes Toro
                    </h3>
                    <p>
                        Analista de comunicaciones
                    </p>
                    <a href="">
                        mbuiles10@eafit.edu.co
                    </a>
                    <a href="">
                        filantropiacomunica@eafit.edu.co
                    </a>
                </div>
                <div className='personaItem'>
                    <Imagenes token={'NuryAndreaSepulveda'} nameImg={'imgAcercaNosotros'} />
                    <h3>
                        Nury Andrea S​​epúlveda Muñoz
                    </h3>
                    <p>Auxiliar Administrativa</p>
                    <p>Teléfono: (57) 604​ 2619500, extensión 9297</p>
                    <a href="">
                        nsepulv2@eafit.edu.co
                    </a>
                </div>
            </div>
            </section>
        </>
    )
}

export default AcercaNosotros
