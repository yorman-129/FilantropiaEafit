import React from 'react'
import {useState} from 'react'
import './informacionDonacion.scss';

const InformacionDonacion = ({onFormSubmit}) => {

    const [informacionDonacion, setInformacionDonacion] = useState(
        {
            fondoDonacion: '',
            ValorDonar: '',
            dondeNosConocio: '',
            recurrencia: '',
        }
    )




    const handleInputState = (e) => {
        const namesKey = e.target.name;

        setInformacionDonacion(
            {
                ...informacionDonacion,
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
        console.log("donacionInfo",resultForm);
        onFormSubmit(informacionDonacion)

    }
  return (
    <>
      <div className="card-container">
      <form className="form-container" action="/" method="post" id="informacionDonacion" onSubmit={handleForm}>
                        <div className='form-container__header'>
                            <h3>Información de la donación</h3>
                        </div >

                        <main>

                            <div className="item-main">
                                <label for="name">Fondo a donar  </label>
                                <select 
                                className="form-container__input" 
                                type="text" 
                                name="fondoDonacion" 
                                id="fondoDonacion"
                                onChange={handleInputState}
                                >

                                    <option value="Cultura">Cultura</option>
                                    <option value="Deporte">Deporte</option>
                                    <option value="Fondo becas" selected>Fondo becas</option>
                                    <option value="Fondo negocios internacioanles">Fondo negocios internacioanles</option>
                            </select>
                            </div>

                            <div className="item-main">
                                <label for="name">Valor a donar  </label>
                                <input 
                                className="form-container__input" 
                                type="text" 
                                name="ValorDonar" 
                                id="ValorDonar"
                                onChange={handleInputState}
                                />
                            </div>


                            <div className="item-main">
                                <label for="name">¿Donde conoció filantropia?  </label>
                                <input 
                                className="form-container__input" 
                                type="text" 
                                name="dondeNosConocio"
                                id="dondeNosConocio"
                                onChange={handleInputState}
                                />
                            </div>

                            <div className="item-main">
                                <label for="name">Recurrencia  </label>
                                <input 
                                className="form-container__input" 
                                type="text" 
                                name="recurrencia"
                                id="recurrencia"
                                onChange={handleInputState}
                                />
                            </div>
                            <select className="item-main">
                                <option>formas de pago</option>
                                <option>formas de pago</option>
                                <option>formas de pago</option>
                                <option>formas de pago</option>
                                <option>formas de pago</option>
                                <option>formas de pago</option>
                            </select>

                        </main>
                        <footer>
                            <input className="form-container__inputButton" type="submit" value="CONTINUAR"/>
                        </footer>
                    </form>
                    </div>
    </>
  )
}

export default InformacionDonacion
