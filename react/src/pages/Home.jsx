import React from 'react'
import HeaderHome from '../components/headerHome/HeaderHome';
import DonacionHome from '../components/donacionesHome/DonacionHome';
import CausasHome from '../components/causasHome/CausasHome'
import Aliados from '../components/aliados/Aliados';
import ComoDonar from '../components/comodonar/ComoDonar';
import Footer from '../components/footer/Footer'
import AcercaNosotros from '../components/acercaNostros/AcercaNosotros';
import BotonDonar from '../components/botonDonar/BotonDonar';

const Home = () => {
    return (
        <>
            <main>
            <BotonDonar/>
            <HeaderHome/>
            <DonacionHome/>
            <CausasHome/>
            <Aliados/>
            <AcercaNosotros/>
            <ComoDonar/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
}

export default Home;