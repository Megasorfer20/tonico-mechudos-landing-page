import './../css/resultCheck.css';
import { FaCheckSquare } from "react-icons/fa";

function ResultCheck(){
    return(
        <div className="resultCheck">
            <div>
                <FaCheckSquare />
                <p>Mezcla de ingredientes naturales que nutren</p>
            </div>
            <div>
                <FaCheckSquare />
                <p>Fortalece y activa el folículo piloso</p>
            </div>
            <div>
                <FaCheckSquare />
                <p>Contiene Romero y Cebolla Roja</p>
            </div>
            <div>
                <FaCheckSquare />
                <p>Fortalece tu cabello dandole un aspecto natural</p>
            </div>
            <div>
                <FaCheckSquare />
                <p>Es facil de usar</p>
            </div>
            <div>
                <FaCheckSquare />
                <p>Resultados en tan solo 90 días</p>
            </div>
        </div>
    )
}

export default ResultCheck;