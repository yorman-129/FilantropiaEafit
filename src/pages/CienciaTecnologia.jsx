import React from 'react';
import ComoDonar from '../components/comodonar/ComoDonar';
import Footer from '../components/footer/Footer';
import FondosCienciaTEch from '../components/fondosCienciaTech/FondosCienciaTEch';
import HeaderCausasCiencia from '../components/headerCausasCiencia/HeaderCausasCiencia';
import BotonDonar from '../components/botonDonar/BotonDonar';
import AcercaNostros from '../components/acercaNostros/AcercaNosotros'


const CienciaTecnologia = () => {
    return (
        <>
            <BotonDonar />
            <HeaderCausasCiencia />
            <FondosCienciaTEch />
            <AcercaNostros />
            <ComoDonar />
            <Footer />
        </>
    )
}

export default CienciaTecnologia;