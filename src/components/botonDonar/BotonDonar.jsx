import React from 'react'
import Imagenes from '../imagenes/Imagenes'
import './botonDonar.scss';

const BotonDonar = () => {
  return (
    <>
      <a className="containerButton" href="./donacion">
        <Imagenes token={'logoDonar'} nameImg={'imgButonFijo'}/>
        <p>Dona aquí</p>
      </a>
    </>
  )
}

export default BotonDonar
