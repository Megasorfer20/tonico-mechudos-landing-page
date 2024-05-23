import './../css/productDescription.css';
import photo from './../assets/img/description.png';
function ProductDescription(){
    return(
        <div className="productDescription">
            <img src={photo} alt="description" />
        </div>
    )
}

export default ProductDescription;