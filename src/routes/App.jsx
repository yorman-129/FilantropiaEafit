import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../styles/index.scss';
import HeaderHome from '../containers/HeaderHome';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Causas1 from '../pages/Causas1';
import Causas2 from '../pages/Causas2';
import Causas3 from '../pages/Causas3';
import Causas4 from '../pages/Causas4';
import Donacion from '../pages/Donacion';
import NotFound from '../pages/NotFound';


const App = ()  => {
        return (
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route  path="/home" element={<Home/>} />
                        <Route  path="/causas" element={<Causas1/>} />
                        <Route  path="/causas2" element={<Causas2/>} />
                        <Route  path="/causas3" element={<Causas3/>} />
                        <Route  path="/causas4" element={<Causas4/>} />
                        <Route  path="/donacion" element={<Donacion/>} />
                        <Route  path="*" element={<NotFound/>}/>
                    </Routes>
                </Layout>
            </BrowserRouter>
        );
}

export default App;