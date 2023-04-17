import React from 'react';
import './informacionPersona.scss';


const InformacionPersona = () => {
  return (
    <>
      <div className="card-container">
      <form className="form-container" action="/" method="post" id="datosPersonales">
                        <header>
                            <h3>Datos Personales</h3>
                        </header>

                        <main>

                            <div className="item-main">
                                <label for="name">Nombres  </label>
                                <input className="form-container__input" type="text" name="nombres" id="nombres"/>
                            </div>

                            <div className="item-main">
                                <label for="name">Apellidos  </label>
                                <input className="form-container__input" type="text" name="Apellidos" id="Apellidos"/>
                            </div>


                            <div className="item-main">
                                <label for="name">Tipo de documento  </label>
                                <input className="form-container__input" type="text" name="tipoDocumento"
                                    id="tipoDocumento"/>
                            </div>

                            <div className="item-main">
                                <label for="name">Numero de documento  </label>
                                <input className="form-container__input" type="text" name="numeroDocumento"
                                    id="numeroDocumento"/>
                            </div>


                            <div className="item-main">
                                <label for="name">Genero  </label>
                                <input className="form-container__input" type="text" name="genero" id="genero"/>
                            </div>

                            <div className="item-main">
                                <label for="name">N° celular  </label>
                                <input className="form-container__input" type="text" name="telefono" id="telefono"/>
                            </div>

                            <div className="item-main">
                                <label for="name">Correo electronico  </label>
                                <input className="form-container__input" type="email" name="email" id="email"/>
                            </div>

                            <div className="item-main">
                                <label for="name">Fecha de nacimiento  </label>
                                <input className="form-container__input" type="date" name="fechaNacimiento"
                                    id="fechaNacimiento"/>
                            </div>

                            <div className="item-main">
                                <label for="name">Departamento residencia  </label>
                                <input className="form-container__input" type="text" name="departamentoResidencia"
                                    id="departamentoResidencia"/>
                            </div>
                            <div className="item-main">
                                <label for="name">Ciudad de residencia  </label>
                                <input className="form-container__input" type="text" name="ciudadResidencia"
                                    id="ciudadResidencia"/>
                            </div>

                        </main>
                        <footer>
                            <input className="form-container__inputButton" type="submit" value="CONTINUAR"/>                        </footer>
                    </form>
                    </div>
    </>
  )
}

export default InformacionPersona
