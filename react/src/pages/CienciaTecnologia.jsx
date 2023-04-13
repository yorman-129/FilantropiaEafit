import React from 'react';
import ComoDonar from '../components/comodonar/ComoDonar';
import Footer from '../components/footer/Footer';
import FondosCienciaTEch from '../components/fondosCienciaTech/FondosCienciaTEch';
import HeaderCausasCiencia from  '../components/headerCausasCiencia/HeaderCausasCiencia'

const CienciaTecnologia = ()=>{
    return(
        <>
           <HeaderCausasCiencia/>
           <FondosCienciaTEch/>
           <ComoDonar/>
           <Footer />
        </>
    )
}

export default CienciaTecnologia;