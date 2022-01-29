import React from 'react';

import './../../design/UI/Error404.css';
import gifSad from '../../assets/img_triste.gif';

const Error404 = () => {
    return (
        <div className='content_404'>
            <div className="text">
                <h1> Pagina No Encontrada. Error 404 </h1>
                <p> Asegurate que el URL Ingresado <b> ({ window.location.href }) </b> sea Correcto </p>
            </div>
            <div className="img">
                <img src={ gifSad } alt='triste' />
            </div>
        </div>
    )
};

export default Error404;
