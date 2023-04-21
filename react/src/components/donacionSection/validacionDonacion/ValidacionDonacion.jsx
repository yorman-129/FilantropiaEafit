import React from 'react'
import {useState} from 'react'
import './validacionDonacion.scss';
import PaymentPSE from './PSE/PaymentPSE'
import PaymentCard from './card/PaymentCard'
import OpcionesPago from './opcionesPago/OpcionesPago';



const ValidacionDonacion = ({ onData,handleFormSubmit }) => {
  const [dataForm, setDataForm]=useState(0)

  const handleOpcion=(data)=>{
    console.log(data)
    setDataForm(data.tipoPago)
  }
 
  return (
   <>
   {
    dataForm == 0 && (<OpcionesPago datos={onData} onSubmit={handleOpcion}/>)
   }
   {
    dataForm == 1 && (<PaymentCard/>)
   }
   {
    dataForm == 2 && (<PaymentPSE/>)
   }
   </>
  )
}

export default ValidacionDonacion
