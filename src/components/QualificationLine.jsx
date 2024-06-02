import React from 'react';
import './../css/qualificationLine.css';
import Qualification from './Qualification';

function QualificationLine(props){
    return(
        <div className="qualificationLine">
            <Qualification  qualification={props.one} />
            <Qualification  qualification={props.two} />
            <Qualification  qualification={props.three} />
            <Qualification  qualification={props.four} />
            <Qualification  qualification={props.five} />
        </div>
    )
}

export default QualificationLine;