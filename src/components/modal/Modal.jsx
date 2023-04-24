import React, { useState } from 'react';
import './modal.scss';

import Confirmacion from './confirmacion'
import SolicitarInfo from './solicitarInfo';

const Modal = ({isOpen,onClose}) => {
  const [modalInfo, setModalInfo]=useState(1)

  const handleState=()=>{
    setModalInfo(modalInfo + 1)
  }

  return (
    <>
      <div className="modal-container" style={{display: isOpen ? 'grid':'none'}}>
        <div className="modal-body">
            <h2>Validación de la solicitud</h2>
            <button className="modal-close" onClick={onClose} >X</button>
            {modalInfo ==1 && (<SolicitarInfo onSubmit={handleState} />)}
            {modalInfo ==2 && (<Confirmacion />)}
        </div>
      </div>
    </>
  )
}

export default Modal
