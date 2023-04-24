import React from 'react'
import { useState, useEffect } from 'react';
import HeaderDonacion from './../components/headerDonacion/HeaderDonacion'
import InformacionDonacion from './../components/donacionSection/informacionDonacion/InformacionDonacion';
import InformacionPersona from './../components/donacionSection/informacionPersona/InformacionPersona';
import ValidacionDonacion from './../components/donacionSection/validacionDonacion/ValidacionDonacion';
import Footer from './../components/footer/Footer'

const Donacion = () => {

    const [formularioActual, setFormularioActual] = useState(1);
    const [datosFormulario, setDatosFormulario] = useState({
        nombres: '',
        apellidos: '',
        tipoDocumento: '',
        documento: '',
        genero: '',
        celular: '',
        correo: '',
        fechaNacimiento: '',
        departamento: '',
        ciudad: '',
        fondoDonacion: '',
        ValorDonar: '',
        dondeNosConocio: '',
        recurrencia: '',
        tipoPago: '',
        tipoDePersona: '',
        tipoBanco: '',
        pais: '',
        numeroCuenta: '',
    });

    useEffect(() => {
        console.log("Nuevo estado datosFormulario:", datosFormulario);
    }, [datosFormulario]);

    const handleFormSubmit = (data) => {

        console.log("desdeDonacion", data)
        console.log(datosFormulario)
        if (formularioActual == 1) {
            setDatosFormulario({
                ...datosFormulario,
                nombres: data.nombres,
                apellidos: data.apellidos,
                tipoDocumento: data.tipoDocumento,
                documento: data.documento,
                genero: data.genero,
                celular: data.celular,
                correo: data.correo,
                fechaNacimiento: data.fechaNacimiento,
                departamento: data.departamento,
                ciudad: data.ciudad,
            });
        } else if (formularioActual == 2) {
            setDatosFormulario({
                ...datosFormulario,
                fondoDonacion: data.fondoDonacion,
                ValorDonar: data.ValorDonar,
                dondeNosConocio: data.dondeNosConocio,
                recurrencia: data.recurrencia
            });
        } else if (formularioActual == 3) {
            setDatosFormulario({
                ...datosFormulario,
                tipoDePersona: data.tipoDePersona,
                tipoBanco: data.tipoBanco,
                pais: data.pais,
                numeroCuenta: data.numeroCuenta,
            })
        }

        setFormularioActual(formularioActual + 1);
        console.log(formularioActual)

    }

    return (
        <>
            <HeaderDonacion />
            <main id='donar'>
                {
                    formularioActual === 1 && (<InformacionPersona onFormSubmit={handleFormSubmit} />)
                }
                {
                    formularioActual === 2 && (<InformacionDonacion onFormSubmit={handleFormSubmit} />)
                }
                {
                    formularioActual === 3 && (<ValidacionDonacion onFormSubmit={handleFormSubmit} onData={datosFormulario} />)
                }


            </main>
            <footer>
                <Footer />
            </footer>

        </>
    )
}

export default Donacion;