import React from 'react'
import HeaderCausasTransformacion from '../components/headerCausasTransformacion/HeaderCausasTransformacion';
import ComoDonar from '../components/comodonar/ComoDonar';
import Footer from '../components/footer/Footer';
import FondosTransformacionHumana from '../components/fondosTransformacionHumana/FondosTransformacionHumana';
import BotonDonar from '../components/botonDonar/BotonDonar';
import AcercaNosotros from '../components/acercaNostros/AcercaNosotros';
const TransformacionHumana = () => {
    return (
        <>
            <BotonDonar />
            <HeaderCausasTransformacion />
            <FondosTransformacionHumana />
            <AcercaNosotros/>
            <ComoDonar />
            <Footer />
        </>
    )
}

export default TransformacionHumana;