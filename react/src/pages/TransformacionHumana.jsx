import React from 'react'
import HeaderCausasTransformacion from '../components/headerCausasTransformacion/HeaderCausasTransformacion';
import ComoDonar from '../components/comodonar/ComoDonar';
import Footer from '../components/footer/Footer';
import FondosTransformacionHumana from '../components/fondosTransformacionHumana/FondosTransformacionHumana';

const TransformacionHumana = ()=>{
    return(
        <>
        <HeaderCausasTransformacion/>
        <FondosTransformacionHumana/>
        <ComoDonar/>
        <Footer />
     </>
    )
}

export default TransformacionHumana;