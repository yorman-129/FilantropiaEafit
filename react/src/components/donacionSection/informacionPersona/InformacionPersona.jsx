import React from 'react';
import { useState } from 'react';
import './informacionPersona.scss';


const InformacionPersona = ({ onFormSubmit }) => {

    const [informacionPersona, setInformacionPersona] = useState(
        {
            nombres: 'Tu Nombre',
            apellidos: 'Tu Apellido',
            tipoDocumento: '',
            documento: '',
            genero: '',
            celular: '',
            correo: '',
            fechaNacimiento: '',
            departamento: '',
            ciudad: '',
            
        }
    )

    const handleInputState = (e) => {
        const namesKey = e.target.name;

        setInformacionPersona(
            {
                ...informacionPersona,
                [namesKey]: e.target.value
            }
        )
    }

    const handleForm = (e) => {
        e.preventDefault();
        const resultForm = {};

        Array.from(e.target).forEach((element) => {
            if (element.type !== "submit") {
                resultForm[element.name] = element.value;
            }
        })
        console.log("donacion",resultForm);
        onFormSubmit(informacionPersona);

    }

    return (
        <>
            <div className="card-container">
                <form className="form-container" id="datosPersonales" onSubmit={handleForm} >

                    <header>
                        <h3>Datos Personales</h3>
                    </header>

                    <main>


                        <div className="item-main">
                            <label htmlFor="nombres">Nombres  </label>
                            <input
                                className="form-container__input"
                                type="text"
                                name="nombres"
                                id="nombres"
                                placeholder={informacionPersona.nombres}
                                onChange={handleInputState} />
                        </div>

                        <div className="item-main">
                            <label htmlFor="Apellidos">Apellidos  </label>
                            <input className="form-container__input"
                                type="text"
                                name="apellidos"
                                id="Apellidos"
                                onChange={handleInputState} />
                        </div>


                        <div className="item-main">
                            <label htmlFor="tipoDocumento">Tipo de documento  </label>
                            <select className="form-container__input"
                                type="text"
                                name="tipoDocumento"
                                id="tipoDocumento"
                                onChange={handleInputState}>
                            <option value="Doumento identidad país origen" >Doumento identidad país origen</option>
                            <option value="Doumento nacional identidad">Doumento nacional identidad</option>
                            <option value="Cédula ciudadanía"selected>Cédula ciudadanía</option>
                            <option value="Cédula extranjería">Cédula extranjería</option>
                            <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                            <option value="NIT">NIT</option>
                            <option value="Identificación nacional">Identificación nacional</option>
                            <option value="Pasaporte">Pasaporte</option>
                            </select>
                        </div>
                        {/*organizar a options*/}
                        <div className="item-main">
                            <label htmlFor="name">Numero de documento </label>
                            <input className="form-container__input"
                                type="text"
                                name="documento"
                                id="numeroDocumento"
                                onChange={handleInputState} />
                        </div>


                        <div className="item-main">
                            <label htmlFor="name">Genero  </label>
                            <select className="form-container__input"
                                type="text"
                                name="genero"
                                id="genero"
                                onChange={handleInputState}>

                                <option value="Masculino">Masculino</option>
                                <option value="Femenino" selected>Femenino</option>

                            </select>
                        </div>

                        <div className="item-main">
                            <label htmlFor="name">N° celular  </label>
                            <input className="form-container__input"
                                type="text"
                                name="celular"
                                id="telefono"
                                onChange={handleInputState} />
                        </div>

                        <div className="item-main">
                            <label htmlFor="name">Correo electronico  </label>
                            <input className="form-container__input"
                                type="email"
                                name="correo"
                                id="email"
                                onChange={handleInputState} />
                        </div>

                        <div className="item-main">
                            <label htmlFor="name">Fecha de nacimiento  </label>
                            <input className="form-container__input"
                                type="date"
                                name="fechaNacimiento"
                                id="fechaNacimiento"
                                onChange={handleInputState} />
                        </div>

                        <div className="item-main">
                            <label htmlFor="name">Departamento residencia  </label>
                            <input className="form-container__input"
                                type="text"
                                name="departamento"
                                id="departamentoResidencia"
                                onChange={handleInputState} />
                        </div>
                        <div className="item-main">
                            <label htmlFor="name">Ciudad de residencia  </label>
                            <input className="form-container__input"
                                type="text"
                                name="ciudad"
                                id="ciudadResidencia"
                                onChange={handleInputState} />
                        </div>
                    </main>
                    <footer>
                        <input className="form-container__inputButton" type="submit" value="CONTINUAR" />
                    </footer>

                </form>
            </div>
        </>
    )
}

export default InformacionPersona
