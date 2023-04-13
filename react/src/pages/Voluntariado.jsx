import React from 'react'
import HeaderCausasVoluntariado from '../components/headerCausasVoluntariado/HeaderCausasVoluntariado';
import ComoDonar from '../components/comodonar/ComoDonar';
import Footer from '../components/footer/Footer';
import FondoVoluntariado from '../components/fondosVoluntariado/FondoVoluntariado';

const Voluntariado = ()=>{
    return(
        <>
        <HeaderCausasVoluntariado/>
        <FondoVoluntariado/>
        <ComoDonar/>
        <Footer />
     </>
    )
}

export default Voluntariado;