import React from 'react'
import ComoDonar from '../components/comodonar/ComoDonar';
import Footer from '../components/footer/Footer';
import FondosEquidadSocial from '../components/fondosEquidadSocial/FondosEquidadSocial';
import HeaderCausasEquidadSocial from '../components/headerCausasEquidadSocial/HeaderCausasEquidadSocial';
import BotonDonar from '../components/botonDonar/BotonDonar';
const EquidadSocial = () => {
    return (
        <>
            <BotonDonar />
            <HeaderCausasEquidadSocial />
            <FondosEquidadSocial />
            <ComoDonar />
            <Footer />
        </>
    )
}

export default EquidadSocial;