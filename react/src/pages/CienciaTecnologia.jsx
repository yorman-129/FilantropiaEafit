import React from 'react';
import ComoDonar from '../components/comodonar/ComoDonar';
import Footer from '../components/footer/Footer';
import FondosCienciaTEch from '../components/fondosCienciaTech/FondosCienciaTEch';
import HeaderCausasCiencia from '../components/headerCausasCiencia/HeaderCausasCiencia';
import BotonDonar from '../components/botonDonar/BotonDonar';


const CienciaTecnologia = () => {
    return (
        <>
            <BotonDonar />
            <HeaderCausasCiencia />
            <FondosCienciaTEch />
            <ComoDonar />
            <Footer />
        </>
    )
}

export default CienciaTecnologia;