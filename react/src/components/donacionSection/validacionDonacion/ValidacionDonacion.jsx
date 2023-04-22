import React from 'react'
import {useState} from 'react'
import './validacionDonacion.scss';
import PaymentPSE from './PSE/PaymentPSE'
import PaymentCard from './card/PaymentCard'
import OpcionesPago from './opcionesPago/OpcionesPago';



const ValidacionDonacion = ({ onData,onFormSubmit }) => {
  const [dataForm, setDataForm]=useState(0)

  const handleOpcion=(data)=>{
    console.log(data)
    setDataForm(data.tipoPago)
  }
  const handleValidacion=(data)=>{
    console.log("validacion",data)
    onFormSubmit(data);
  }
 
  return (
   <>
   {
    dataForm == 0 && (<OpcionesPago datos={onData} onSubmit={handleOpcion}/>)
   }
   {
    dataForm == 1 && (<PaymentCard datos={onData} onSubmit={handleValidacion}/>)
   }
   {
    dataForm == 2 && (<PaymentPSE datos={onData} onSubmit={handleValidacion}/>)
   }
   </>
  )
}

export default ValidacionDonacion
