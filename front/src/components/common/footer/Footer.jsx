import React from 'react';
import "./foter.css"
import { Link } from 'react-router-dom';

export default () => (
    <div className="container-fluid" id="footer">
        <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
                <div id="primerfila" className="container">
                    <span><img className="red" src="https://i.pinimg.com/originals/0f/38/15/0f3815e59ec1ab026baab9cfd95eefcb.png" /></span>
                    <span><img className="red" src="https://images.vexels.com/media/users/3/137380/isolated/preview/1b2ca367caa7eff8b45c09ec09b44c16-icono-de-instagram-logo-by-vexels.png" /></span>
                    <span><img className="red" src="https://images.vexels.com/media/users/3/137419/isolated/preview/b1a3fab214230557053ed1c4bf17b46c-icono-de-twitter-logo-by-vexels.png" /></span>
                    <span><img className="red" src="https://images.vexels.com/media/users/3/137425/isolated/preview/f2ea1ded4d037633f687ee389a571086-icono-de-youtube-logo-by-vexels.png" /></span>

                </div>
            </div>
            <div className="col-4"></div>
        </div>
        <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
                <div className="container">

                    <span><a href="#">Índice</a></span>
                    <span><a href="#">Ayuda</a></span>
                    <span><a href="#">Obtener Lime App</a></span>
                    <span><a href="#">Empresa</a></span>
                    <span><Link to="/developers">Desarrolladores</Link></span>
                    <span><a href="#">Servicio</a></span>
                </div>
            </div>
            <div className="col-2"></div>
        </div>
        <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
                <div className="container">

                    <span></span>
                    <span><a href="#">Accesibilidad</a></span>
                    <span><a href="#">Nosotros</a></span>
                    <span><Link to="/contact">Contactar</Link></span>
                    <span><a href="#">Privacidad</a></span>
                    <span><a href="#">RRHH</a></span>
                </div>
            </div>
            <div className="col-2"></div>
        </div>
        <div className="row">

            <div className="col-3 company">
                <span id="hola">LIME®</span>
            </div>

        </div>
        <div className="row">
            <div className="col-5"></div>
            <div className="col-2">
                <h6>© 2020 Plataforma5</h6>
            </div>
            <div className="col-5"></div>
        </div>
    </div>
);