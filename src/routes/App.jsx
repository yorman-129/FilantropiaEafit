import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home';
import EquidadSocial from '../pages/EquidadSocial';
import CienciaTecnologia from '../pages/CienciaTecnologia';
import TransformacionHumana from '../pages/TransformacionHumana';
import Voluntariado from '../pages/Voluntariado';
import Donacion from '../pages/Donacion';
import NotFound from '../pages/NotFound';


const App = ()  => {
        return (
            <HashRouter basename="/FilantropiaEafit">
                    <Routes>
                        <Route  path="/" element={<Home/>} />
                        <Route  path="#/home" element={<Home/>} />
                        <Route  path="#/equidadSocial" element={<EquidadSocial/>} />
                        <Route  path="#/cienciaTecnologia" element={<CienciaTecnologia/>} />
                        <Route  path="#/transformacionHumana" element={<TransformacionHumana/>} />
                        <Route  path="#/voluntariado" element={<Voluntariado/>} />
                        <Route  path="#/donacion" element={<Donacion/>} />
                        <Route  path="*" element={<NotFound/>}/>
                    </Routes>
            </HashRouter>
        );
}

export default App;