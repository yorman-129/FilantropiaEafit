import React from 'react'
import './solicitarInfo.scss'

const SolicitarInfo = ({onSubmit}) => {
    return (
        <>
            <label htmlFor="">Digita tu documento</label>
            <div className='inputSolicitud'>
            <input type="number" />
            </div>
            <div className='enviarSolicitud'>
            <input type="submit" value="Solicitar" onClick={onSubmit}/>
            </div>
        </>
    )
}

export default SolicitarInfo
