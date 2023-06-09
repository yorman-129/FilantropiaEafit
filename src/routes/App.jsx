import React from 'react';
import { HashRouter , Routes, Route } from 'react-router-dom'
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
                        <Route  exact path="/" element={<Home/>} />
                        <Route  exact path="/home" element={<Home/>} />
                        <Route  exact path="/equidadSocial" element={<EquidadSocial/>} />
                        <Route  exact path="/cienciaTecnologia" element={<CienciaTecnologia/>} />
                        <Route  exact path="/transformacionHumana" element={<TransformacionHumana/>} />
                        <Route  exact path="/voluntariado" element={<Voluntariado/>} />
                        <Route  exact path="/FilantropiaEafit/donacion" element={<Donacion/>} />
                        <Route  exact path="*" element={<NotFound/>}/>
                    </Routes>
            </HashRouter>
        );
}

export default App;