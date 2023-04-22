import React from 'react';
import { useState } from 'react';
import Imagenes from '../../../imagenes/Imagenes';

const PaymentPSE = ({datos,onSubmit}) => {

  const [payment, setPayment] = useState(
    {
      tipoDePersona:'',
      tipoBanco:'',
      pais:'',
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
    console.log("validacionPse",payment)
    onSubmit(payment)  }

  return (
    <>
      <div className="container-card__tittle">
        <Imagenes token={"logoFilantropia"} />
      </div>
      <div className="container-card__cuenta">
        <Imagenes token={"acountCircle"} />
        <p>
          {datos.correo}
        </p>
      </div>
      <form action="" onSubmit={handleForm}>
        <h3>Cuenta debito(PSE)</h3>

        <div className="card-information">

          <p>Completa la información</p>

          <div className="card-information__nombres">
            <select name="tipoDePersona" id="" onChange={handleInputState}>
              <option value="tipoDePersona">Tipo de persona</option>
              <option value="tipo??">???????????</option>
            </select>

            <div className="container-information__fecha">
              <select name="tipoBanco" id="tipoBanco">
                <option value="seleccionaTuBanco" onChange={handleInputState}>Banco Santander</option>
                <option value="Bancolombia" onChange={handleInputState}>Bancolombia</option>
                <option value="Banco de Bogota" onChange={handleInputState}>Banco de Bogota</option>
              </select>
            </div>
          </div>

        </div>

        <div className="data-user">
          <p>Datos donante</p>

          <div className='container-information'>
            <div className="container-information__nombres">
              <input type="text" value={datos.nombres} name='nombres' onChange={handleInputState} />
            </div>

            <div className="container-information_apeliidos">
              <input type="text" value={datos.apellidos} name='apellidos' onChange={handleInputState} />
            </div>
          </div>

          <div className='container-information'>
            <div className="container-information__tipoDocumento">
              <select name="tipoDocumento" id="tipoDocumento" onChange={handleInputState}>
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
              <input type="number" value={datos.documento} name='documento' onChange={handleInputState} />
            </div>
          </div>

          <div className='container-information'>
            <div className="container-information__pais" >
              <input type="text" onChange={handleInputState} name='pais' />
            </div>

            <div className="container-information_numeroCelular">
              <input type="text" name='celular' value={datos.celular} onChange={handleInputState} />
            </div>

          </div>

          <div className="containerSubmit">
            <input type="submit" value="Realizar Pago" />
          </div>

        </div>
      </form>
    </>
  )
}

export default PaymentPSE
