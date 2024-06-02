import React from 'react';

import { useEffect } from 'react';
import './../css/loading.css';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

function Loading({ display, setDisplay }) {

    useEffect(() => {
        if (display) {
            setTimeout(() => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "HUBO UN ERROR, INTENTELO DE NUEVO",
                  });
                setDisplay(false);
            }, 5000);
        }
    }, [display, setDisplay]);

    return (
        <div className="modal_loading" style={display ? { display: 'flex' } : { display: 'none' }}>
            <div className="loading">
                <AiOutlineLoading3Quarters />
                <h2>Cargando...</h2>
            </div>
        </div>
    )
}

Loading.propTypes = {
    display: PropTypes.bool.isRequired,
    setDisplay: PropTypes.func.isRequired,
}

export default Loading;