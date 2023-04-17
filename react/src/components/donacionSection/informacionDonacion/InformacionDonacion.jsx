import React from 'react'
import './informacionDonacion.scss';

const InformacionDonacion = () => {
  return (
    <>
      <div className="card-container">
      <form className="form-container" action="/" method="post" id="informacionDonacion">
                        <header>
                            <h3>Información de la donación</h3>
                        </header>

                        <main>

                            <div className="item-main">
                                <label for="name">Fondo a donar  </label>
                                <input className="form-container__input" type="text" name="fondoDonacion" id="fondoDonacion"/>
                            </div>

                            <div className="item-main">
                                <label for="name">Valor a donar  </label>
                                <input className="form-container__input" type="text" name="ValorDonar" id="ValorDonar"/>
                            </div>


                            <div className="item-main">
                                <label for="name">¿Donde conoció filantropia?  </label>
                                <input className="form-container__input" type="text" name="dondeNosConocio"
                                    id="dondeNosConocio"/>
                            </div>

                            <div className="item-main">
                                <label for="name">Recurrencia  </label>
                                <input className="form-container__input" type="text" name="recurrencia"
                                    id="recurrencia"/>
                            </div>
                            <div className="item-main">
                                <p>formas de pago</p>
                                <p>formas de pago</p>
                                <p>formas de pago</p>
                                <p>formas de pago</p>
                                <p>formas de pago</p>
                                <p>formas de pago</p>
                            </div>

                        </main>
                        <footer>
                            <input className="form-container__inputButton" type="submit" value="CONTINUAR"/>
                        </footer>
                    </form>
                    </div>
    </>
  )
}

export default InformacionDonacion
