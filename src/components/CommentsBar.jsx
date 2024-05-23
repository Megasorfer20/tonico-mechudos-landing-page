import './../css/commentsBar.css';
import { FaPlus } from "react-icons/fa6";
import Loading from './Loading';
import { useState } from 'react';


function CommentsBar(){

    const [loading, setLoading] = useState(false);


    return(
        <div className="commentsBar">
            <h2>Comentarios</h2>
            <button onClick={()=> setLoading(true)}>Agregar Comentario <FaPlus /> </button>
            <Loading display={loading} setDisplay={setLoading} />
        </div>
    )
}

export default CommentsBar;