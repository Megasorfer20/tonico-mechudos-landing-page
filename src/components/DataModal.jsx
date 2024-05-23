import './../css/dataModal.css';
import { IoCloseCircle } from 'react-icons/io5';
import Swal from 'sweetalert2'

import { ProductData } from '../app/productData';
import { useState } from 'react';
import axios from 'axios';

function DataModal({modal, setModal}) {

    const [producto, setProducto] = useState(ProductData[2]);
    const [client, setClient] = useState({
        name_product: "",
        name_client: "",
        phone_client: 0,
        address_client: ""
    });

    const handChange = (ev) => {
        const product = ProductData.filter((product) => {return product.title == ev.target.value});
        setProducto(product[0]);
        setClient({...client,[ev.target.name]: ev.target.value});
    }
    const formChange = (ev) => {
        setClient({...client,[ev.target.name]: ev.target.value});
    }

    const sendData = async (ev) => {
        ev.preventDefault();
        if(client.name_client == "" || client.phone_client == 0 || client.address_client == ""){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "LLENE TODOS LOS CAMPOS POR FAVOR",
              });
        }else{
            axios.post(`${import.meta.env.VITE_BACKEND_URL}/clients/api`, client); 
            setModal(false);
    
            Swal.fire({
                title: "PEDIDO",
                text: "GRACIAS POR TU PEDIDO, VUELVE PRONTO...",
                icon: "success"
            });
        }
    }

    return (
        <div className="modalTwo" style={modal ? { display: 'flex' } : { display: 'none' }}>
            <div className="modal_bgTwo">
                <div className="closeModal" onClick={() => {
                    setModal(false);
                }}><IoCloseCircle /></div>
                <form>
                    <div>
                        <label>SELECCIONA LA OFERTA</label>
                        <select name="name_product" onChange={handChange} defaultValue="TRES Tónicos + Shampoo Mechudos Anticaída GRATIS">
                            {
                                ProductData.map((product, index)=>(
                                    <option key={index} value={product.title}>{product.title}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div>
                        <label>Nombre Completo</label>
                        <input name="name_client" onChange={formChange} type="text" placeholder="Escribe tu nombre" />
                    </div>
                    <div>
                        <label>Número de télefono</label>
                        <input name="phone_client" onChange={formChange} type="number" placeholder="Escribe tu número" />
                    </div>
                    <div>
                        <label>Dirección de entrega</label>
                        <input name="address_client" onChange={formChange} type="text" placeholder="Casa, Calle, Barrio, Municipio..." />
                    </div>
                    <p className="modalPrice">TOTAL: {producto.price} <span>{producto.beforePrice}</span></p>
                    <p className="AHORRO">¿AHORRAR?, AHORRAR ES APROVECHAR ESTÁ SUPER PROMOCIÓN LIMITADA</p>
                    <button onClick={sendData}>HACER PEDIDO</button>
                </form>
            </div>
        </div>
    )
}

export default DataModal;