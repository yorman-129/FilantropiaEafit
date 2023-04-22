import React from 'react';
import {useState} from 'react';
import Imagenes from '../../../imagenes/Imagenes';

const PaymentCard = ({datos,onSubmit}) => {

  const [payment, setPayment] = useState(
    {
      tipoDePersona:'',
      tipoBanco:'',
      pais:'',
      numeroCuenta:'',
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

  const handleForm=(e)=>{
    e.preventDefault();
    console.log("validacion",payment)
    onSubmit(payment)
  }

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
        <h3>Credito / Debito / Tarjeta de prepago</h3>

        <div className="card-information">

          <p>Informacion de la tarjeta</p>

          <div className="container-information_cardNumber">
            <input type="number" name='nombres' placeholder='010040234' onChange={handleInputState}/>
          </div>

          <div className='container-information'>
            <div className="container-information_CVV">
              <input type="text" name='???' onChange={handleInputState}/>
            </div>
            <div className="container-information__fecha">
              <input type="date" name='fecha' onChange={handleInputState}/>
            </div>
          </div>

        </div>

        <div className="data-user">
          <p>Datos donante</p>

          <div className='container-information'>
            <div className="container-information__nombres">
              <input type="text" name='nombres' value={datos.nombres} onChange={handleInputState}/>
            </div>

            <div className="container-information_apeliidos">
              <input type="text" name='apellidos' value={datos.apellidos} onChange={handleInputState}/>
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
              <input type="number" name='documento' value={datos.documento} onChange={handleInputState}/>
            </div>
          </div>

          <div className='container-information'>
            <div className="container-information__pais">
              <input type="text" name='pais' onChange={handleInputState}/>
            </div>

            <div className="container-information_numeroCelular">
              <input type="text" name='celular' value={datos.celular} onChange={handleInputState}/>
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

export default PaymentCard
