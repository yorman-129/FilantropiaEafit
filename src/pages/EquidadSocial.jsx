import React from 'react'
import ComoDonar from '../components/comodonar/ComoDonar';
import Footer from '../components/footer/Footer';
import FondosEquidadSocial from '../components/fondosEquidadSocial/FondosEquidadSocial';
import HeaderCausasEquidadSocial from '../components/headerCausasEquidadSocial/HeaderCausasEquidadSocial';
import BotonDonar from '../components/botonDonar/BotonDonar';
import AcercaNosotros from '../components/acercaNostros/AcercaNosotros';
const EquidadSocial = () => {
    return (
        <>
            <BotonDonar />
            <HeaderCausasEquidadSocial />
            <FondosEquidadSocial />
            <AcercaNosotros/>
            <ComoDonar />
            <Footer />
        </>
    )
}

export default EquidadSocial;