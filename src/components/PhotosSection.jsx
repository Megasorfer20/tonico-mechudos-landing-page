import { useState } from 'react';
import './../css/photosSection.css';

import gitOne from  './../assets/img/photosSection/gitOne.gif';
import gitTwo from  './../assets/img/photosSection/gitTwo.gif';
import gitThree from  './../assets/img/photosSection/gitThree.gif';
import gitFour from  './../assets/img/photosSection/gitFour.gif';
import gitFive from  './../assets/img/photosSection/gitFive.gif';
import gitSix from  './../assets/img/photosSection/gitSix.gif';

function PhotosSection(){

    const [photo, setPhoto] = useState(gitOne);

    const clickedPhoto = (ev) => {
        setPhoto(ev.target.src);
    };

    return(
        <div className="photosSection">
            <div className="sectionOne">
                <img src={photo} alt="img"/>
            </div>
            <div className="sectionTwo">
                <img src={gitOne} alt="img" onClick={clickedPhoto}/>
                <img src={gitTwo} alt="img" onClick={clickedPhoto}/>
                <img src={gitThree} alt="img" onClick={clickedPhoto}/>
                <img src={gitFour} alt="img" onClick={clickedPhoto}/>
                <img src={gitFive} alt="img" onClick={clickedPhoto}/>
                <img src={gitSix} alt="img" onClick={clickedPhoto}/>
            </div>
        </div>
    )
}

export default PhotosSection;