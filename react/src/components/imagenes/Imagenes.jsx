import React from 'react'
import fondoHeaderHome from '../../../public/assetsEafit/fondo.jpg';
import logoFilantropia from '../../../public/assetsEafit/logofilantropia.png';
import cienciatechinnova from '../../../public/assetsEafit/cienciatechinnova.jpg';
import equidadSocial from '../../../public/assetsEafit/equidadSocial.jpg';
import inspiracionCausa from '../../../public/assetsEafit/inspiramos.jpg';
import transformacionHumanista from '../../../public/assetsEafit/transformacionHumana.jpg';
import logoAliados1 from '../../../public/assetsEafit/aliados/logoAliados1.png';
import logoAliados2 from '../../../public/assetsEafit/aliados/logoAliados2.png';
import logoAliados3 from '../../../public/assetsEafit/aliados/logoAliados3.png';
import logoAliados4 from '../../../public/assetsEafit/aliados/logoAliados4.png';
import logoAliados5 from '../../../public/assetsEafit/aliados/logoAliados5.png';
import logoAliados6 from '../../../public/assetsEafit/aliados/logoAliados6.png';
import logoAliados7 from '../../../public/assetsEafit/aliados/logoAliados7.png';
import logoAliados8 from '../../../public/assetsEafit/aliados/logoAliados8.png';
import logoAliados9 from '../../../public/assetsEafit/aliados/logoAliados9.png';
import logoAliados10 from '../../../public/assetsEafit/aliados/logoAliados10.png';
import logoAliados11 from '../../../public/assetsEafit/aliados/logoAliados11.png';
import logoAliados12 from '../../../public/assetsEafit/aliados/logoAliados12.png';
import logoAliados13 from '../../../public/assetsEafit/aliados/logoAliados13.png';
import logoAliados15 from '../../../public/assetsEafit/aliados/logoAliados15.png';
import logoAliados16 from '../../../public/assetsEafit/aliados/logoAliados16.png';
import logoAliados17 from '../../../public/assetsEafit/aliados/logoAliados17.png';
import logoAliados19 from '../../../public/assetsEafit/aliados/logoAliados19.png';
import logoAliados20 from '../../../public/assetsEafit/aliados/logoAliados20.png';
import logoAliados21 from '../../../public/assetsEafit/aliados/logoAliados21.png';
import logoAliados22 from '../../../public/assetsEafit/aliados/logoAliados22.png';
import bancolombiaPago from '../../../public/assetsEafit/icons/bancolombia.png';
import chequePago from '../../../public/assetsEafit/icons/cheque3.png';
import deduccionNominaPago from '../../../public/assetsEafit/icons/deduccion5.png';
import primerPago from '../../../public/assetsEafit/icons/linea1.png';
import personalPago from '../../../public/assetsEafit/icons/personalmente4.png';
import qrPago from '../../../public/assetsEafit/icons/QR2.jpg';
import donarTalento from '../../../public/assetsEafit/icons/talento6.png';
import correo from '../../../public/assetsEafit/icons/footer/correo.png';
import facebook from '../../../public/assetsEafit/icons/footer/facebook.png';
import linkedin from '../../../public/assetsEafit/icons/footer/linkedin.png';
import instagram from '../../../public/assetsEafit/icons/footer/logotipo-de-instagram.png';
import wpp from '../../../public/assetsEafit/icons/footer/whatsapp.png';
import youtube from '../../../public/assetsEafit/icons/footer/youtube.png';
import logoFooter from '../../../public/assetsEafit/logoeafitfooter.png';
import logoDonar from '../../../public/assetsEafit/logoDonacion.png';



const assets = {
  cienciatechinnova,
  equidadSocial,
  inspiracionCausa,
  transformacionHumanista,
  logoAliados1,
  logoAliados2,
  logoAliados3,
  logoAliados4,
  logoAliados5,
  logoAliados6,
  logoAliados7,
  logoAliados8,
  logoAliados9,
  logoAliados10,
  logoAliados11,
  logoAliados12,
  logoAliados13,
  logoAliados15,
  logoAliados16,
  logoAliados17,
  logoAliados19,
  logoAliados20,
  logoAliados21,
  logoAliados22,
  fondoHeaderHome,
  logoFilantropia,
  bancolombiaPago,
  chequePago,
  deduccionNominaPago,
  primerPago,
  personalPago,
  qrPago,
  donarTalento,
  correo,
  facebook,
  linkedin,
  instagram,
  wpp,
  youtube,
  logoFooter,
  logoDonar,
}

const Imagenes = ({ token, nameImg }) => {
  return (
    <img src={assets[token]} className={nameImg} />
  )
}

export default Imagenes;

//rca
