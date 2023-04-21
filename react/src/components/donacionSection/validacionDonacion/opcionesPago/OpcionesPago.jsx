import React from 'react'
import {useState} from 'react'
import Imagenes from '../../../imagenes/Imagenes';
import './opcionesPago.scss';

const OpcionesPago = ({datos,onSubmit}) => {
    const horaLocal = new Date().toLocaleString();
    console.log("pagos",datos)
    
  
    const [input, setInput]=useState({tipoPago:0,})

    const handleInput = (event)=>{
        const nameKey = event.target.name
        setInput({
            ...input,
            [nameKey]: event.target.value
        })
    }
  
    const handleForm = ()=>{
        console.log(input)
        onSubmit(input)
    }

  return (
    <>
     
    <div className="container-card">
        <div className='titulo'>
        Validacion de la donación
        </div>
      <div className="container-card__tittle">
        <Imagenes token={"logoFilantropias"} />
      </div>
      <div className="container-card__cuenta">
        <Imagenes token={"acountCircle"}/>
        <p>
          {datos.correo}
        </p>
      </div>
      <div className="container-card__items">
        <form className='form-card' onSubmit={handleForm}>
          <div className='tarjetaCredito'>
            <Imagenes token={"creditCard"}/>
            <input type="radio" name="tipoPago" value="1" onChange={handleInput}/> Tarjeta de Credito<br></br>
          </div>
          <div className='cuentaDebito'>
            <Imagenes token={"pse"}/>
            <input type="radio" name="tipoPago" value="2" onChange={handleInput}/>Cuenta debito(PSE)<br></br>
          </div>
          <input type="submit" value="continuar" />
        </form>
      </div>
    </div>
    <div className="container-aside">
      <div className='container-aside__totalPago'>
        <p>Total a pagar</p>
        <h2>{datos.ValorDonar} <span>COP</span></h2>
        <p>Donación en línea</p>
      </div>
      <div className='container-aside__detallesPago'>
        <p>Referencia</p>
        <p>Fecha de Solicitud {horaLocal}</p>
      </div>
      <div className='container-aside__footer'>
        <p>fecha expiracion proceso</p>
        <p> ayudas a cfilantropia@eafit.edu.co</p>
        <p>datos</p>
      </div>
    </div>
  </>
  )
}

export default OpcionesPago
