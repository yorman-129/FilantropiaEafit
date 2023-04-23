import React from 'react';
import { useState } from 'react';
import Imagenes from '../../../imagenes/Imagenes';
import './paymentPse.scss';

const PaymentPSE = ({ datos, onSubmit }) => {
  const horaLocal = new Date().toLocaleString();
  const [payment, setPayment] = useState(
    {
      tipoDePersona: '',
      tipoBanco: '',
      pais: '',
      numeroCuenta: '',
    }
  )
  console.log(datos);
  console.log(payment);
  const handleInputState = (e) => {
    const namesKey = e.target.name;

    setPayment(
      {
        ...payment,
        [namesKey]: e.target.value
      }
    )
  }

  const handleForm = (e) => {
    e.preventDefault();
    console.log("validacionPse", payment)
    onSubmit(payment)
  }

  return (
    <>
      <div className="section-containerPSE">
        <div className="container-cardPSE">
          <div className="cardPSE">
            <div className="container-cardPSE__tittle">
              <Imagenes token={"logoFilantropia"} nameImg={'logofilantropia'} />
            </div>
            <div className="container-cardPSE__cuenta">
              <Imagenes token={"acountCircle"} />
              <p>
                {datos.correo}
              </p>
            </div>
            <form action="" className='formPSE' onSubmit={handleForm}>
              <p className='pCuenta'>Cuenta debito(PSE)</p>

              <div className="card-information">

                <p>Completa la información</p>

                <div className="card-information__nombres">
                  <select className='selectPSE' name="tipoDePersona" id="" onChange={handleInputState}>
                    <option value="tipoDePersona">Tipo de persona</option>
                    <option value="tipo??">???????????</option>
                  </select>


                  <select className='selectPSE' name="tipoBanco" id="tipoBanco">
                    <option value="BancoSantander" selected onChange={handleInputState}>Banco Santander</option>
                    <option value="Bancolombia" onChange={handleInputState}>Bancolombia</option>
                    <option value="Banco de Bogota" onChange={handleInputState}>Banco de Bogota</option>
                  </select>

                </div>

              </div>

              <div className="data-user">
                <p>Datos donante</p>

                <div className='container-information'>
                  <div className="container-information__nombres">
                    <input type="text" className='selectPSE' value={datos.nombres} name='nombres' onChange={handleInputState} />
                  </div>

                  <div className="container-information_apeliidos">
                    <input type="text" className='selectPSE' value={datos.apellidos} name='apellidos' onChange={handleInputState} />
                  </div>
                </div>

                <div className='container-information'>
                  <div className="container-information__tipoDocumento">
                    <select name="tipoDocumento" className='selectPSE' id="tipoDocumento" onChange={handleInputState}>
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
                    <input type="number" className='selectPSE' value={datos.documento} name='documento' onChange={handleInputState} />
                  </div>
                </div>

                <div className='container-information'>
                  <div className="container-information__pais" >
                    <input type="text" className='selectPSE' onChange={handleInputState} name='pais' />
                  </div>

                  <div className="container-information_numeroCelular">
                    <input type="text" className='selectPSE' name='celular' value={datos.celular} onChange={handleInputState} />
                  </div>

                </div>

                <div className="containerSubmit">
                  <input type="submit" className='inputPSE' value="REALIZAR PAGO" />
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

export default PaymentPSE
