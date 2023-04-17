 import React from 'react'
 import HeaderDonacion from './../components/headerDonacion/HeaderDonacion'
 import InformacionDonacion from './../components/donacionSection/informacionDonacion/InformacionDonacion';
 import InformacionPersona from './../components/donacionSection/informacionPersona/InformacionPersona';
 import ValidacionDonacion from './../components/donacionSection/validacionDonacion/ValidacionDonacion';
 import Footer from './../components/footer/Footer'

 const Donacion = ()=>{
    return(
        <>

            <HeaderDonacion/>
            <main>
            <InformacionPersona/>
            <InformacionDonacion/>
            <ValidacionDonacion/>
            </main>
            <footer>
                <Footer/>
            </footer>

        </>
    )
 }

 export default Donacion;