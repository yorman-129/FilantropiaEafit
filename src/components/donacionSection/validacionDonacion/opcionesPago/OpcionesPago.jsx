import React from 'react'
import { useState } from 'react'
import Imagenes from '../../../imagenes/Imagenes';
import './opcionesPago.scss';

const OpcionesPago = ({ datos, onSubmit }) => {
  const horaLocal = new Date().toLocaleString();
  console.log("pagos", datos)


  const [input, setInput] = useState(
    {
      tipoPago: 0,
    })

  const handleInput = (event) => {
    const nameKey = event.target.name
    setInput({
      ...input,
      [nameKey]: event.target.value
    })
  }

  const handleForm = () => {
    console.log(input)
    onSubmit(input)
  }

  return (
    <>
      <div className="section-container">
        <div className="container-card">
          <div className='titulo'>
            Validacion de la donación
          </div>
          <div className="container-card__tittle">
            <Imagenes token={"logoFilantropia"} nameImg={"logofilantropia"} />
          </div>
          <div className="container-card__cuenta">
            <Imagenes token={"acountCircle"} nameImg={"iconAcount"} />
            <p>
              {datos.correo}
            </p>
          </div>
          <div className="container-card__items">
            <form className='form-card' onSubmit={handleForm}>
              <div className='mainForm'>
                <div className='mainForm__options'>
                  <Imagenes token={"creditCard"} nameImg={'creditCard'} />
                  <input type="radio" className='inputButton' name="tipoPago" value="1" onChange={handleInput} /> Tarjeta de Credito<br></br>
                </div>
                <div className='mainForm__options'>
                  <Imagenes token={"pse"} nameImg={'pse'} />
                  <input type="radio" className='inputButton' name="tipoPago" value="2" onChange={handleInput} />Cuenta debito(PSE)<br></br>
                </div>
              </div>
              <div className="container-inputButton">
                <input type="submit" value="CONTINUAR" className='buttonInput' />
              </div>
            </form>
          </div>
        </div>
        <div className="container-aside">
          <div className="card">
            <div className='container-aside__totalPago'>
              <p>Total a pagar</p>
              <h3>${datos.ValorDonar}<span>COP</span></h3>
              <p>Donación en línea</p>
            </div>
            <div className='container-aside__detallesPago'>
              <h3>Detalles del pago</h3>
              <div>
                <p>Referencia:      0020042012205037421765</p>
                <p></p>
              </div>
              <p>Fecha de Solicitud:      {horaLocal}</p>
            </div>
            <div className='container-aside__footer'>
              <p>fecha expiracion proceso</p>
              <p> ayudas a cfilantropia@eafit.edu.co</p>
              <p>datos</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OpcionesPago
