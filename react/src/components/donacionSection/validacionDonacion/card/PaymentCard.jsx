import React from 'react';
import { useState } from 'react';
import Imagenes from '../../../imagenes/Imagenes';
import './paymentCard.scss'

const PaymentCard = ({ datos, onSubmit }) => {
  const horaLocal = new Date().toLocaleString();
  const [payment, setPayment] = useState(
    {
      tipoDePersona: '',
      tipoBanco: '',
      pais: '',
      numeroCuenta: '',
    }
  )


  const handleInputState = (e) => {
    const namesKey = e.target.name;
    console.log(namesKey)
    setPayment(
      {
        ...payment,
        [namesKey]: e.target.value
      }
    )
  }

  const handleForm = (e) => {
    e.preventDefault();
    console.log("validacion", payment)
    onSubmit(payment)
  }

  return (
    <>
      <div className="section-containerCard">
        <div className="container-cardPayment">
          <div className="cardPayment">
          <div className="container-card__tittle">
            <Imagenes token={"logoFilantropia"} nameImg={'logofilantropia'}/>
          </div>
          <div className="container-card__cuenta">
            <Imagenes token={"acountCircle"} nameImg={'cCuenta'} />
            <p>
              {datos.correo}
            </p>
          </div>
          <form action="" onSubmit={handleForm} className='formCard'>
            <p className='cCuenta'>Tarjeta Credito - Debito - Prepago</p>

            <div className="card-information">

              <p>Informacion de la tarjeta</p>

              <div className="container-information">
                <input type="number" className='inputCardOnly' name='numeroCuenta' placeholder='010040234' onChange={handleInputState} />
              </div>

              <div className='container-information'>
                <div className="container-information_CVV">
                  <input type="text" className='inputCard' name='???' onChange={handleInputState} />
                </div>
                <div className="container-information__fecha">
                  <input type="date" className='inputCard' name='fecha' onChange={handleInputState} />
                </div>
              </div>

            </div>

            <div className="data-user">
              <p>Datos donante</p>

              <div className='container-information'>
                <div className="container-information__nombres">
                  <input type="text" className='inputCard' name='nombres' value={datos.nombres} onChange={handleInputState} />
                </div>

                <div className="container-information_apeliidos">
                  <input type="text" className='inputCard' name='apellidos' value={datos.apellidos} onChange={handleInputState} />
                </div>
              </div>

              <div className='container-information'>
                <div className="container-information__tipoDocumento">
                  <select name="tipoDocumento" className='inputCard' id="tipoDocumento" onChange={handleInputState}>
                    <option value="DNI">DNI</option>
                    <option value="CC">CC</option>
                    <option value="NIT">NIT</option>
                    <option value="PA">PA</option>
                    <option value="CE">CE</option>
                    <option value="IN">IN</option>
                    <option value="DI">DI</option>
                    <option value="ID">ID</option>
                  </select>
                </div>

                <div className="container-information_numeroDocumento">
                  <input type="number" className='inputCard' name='documento' value={datos.documento} onChange={handleInputState} />
                </div>
              </div>

              <div className='container-information'>
                <div className="container-information__pais">
                  <input type="text" className='inputCard' name='pais' onChange={handleInputState} />
                </div>

                <div className="container-information_numeroCelular">
                  <input type="text" className='inputCard' name='celular' value={datos.celular} onChange={handleInputState} />
                </div>

              </div>

              <div className="containerSubmit">
                <input type="submit" className='inputCardButton' value="Realizar Pago" />
              </div>

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

export default PaymentCard
