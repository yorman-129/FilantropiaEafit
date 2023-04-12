import React from 'react'
import HeaderHome from '../components/headerHome/HeaderHome';
import DonacionHome from '../components/donacionesHome/DonacionHome';
import CausasHome from '../components/causasHome/CausasHome'
import Aliados from '../components/aliados/Aliados';
import ComoDonar from '../components/comodonar/ComoDonar';
import Footer from '../components/footer/Footer'

const Home = () => {
    return (
        <>
            <HeaderHome/>
            <main>
            <DonacionHome/>
            <CausasHome/>
            <Aliados/>
            <ComoDonar></ComoDonar>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
}

export default Home;