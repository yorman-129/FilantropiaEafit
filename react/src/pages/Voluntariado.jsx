import React from 'react'
import HeaderCausasVoluntariado from '../components/headerCausasVoluntariado/HeaderCausasVoluntariado';
import ComoDonar from '../components/comodonar/ComoDonar';
import Footer from '../components/footer/Footer';
import FondoVoluntariado from '../components/fondosVoluntariado/FondoVoluntariado';
import BotonDonar from '../components/botonDonar/BotonDonar';
import AcercaNosotros from '../components/acercaNostros/AcercaNosotros';
const Voluntariado = () => {
    return (
        <>
            <BotonDonar />
            <HeaderCausasVoluntariado />
            <FondoVoluntariado />
            <AcercaNosotros />
            <ComoDonar />
            <Footer />
        </>
    )
}

export default Voluntariado;