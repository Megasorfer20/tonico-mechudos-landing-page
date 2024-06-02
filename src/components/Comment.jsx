import React from 'react';

import './../css/comment.css';
import QualificationLine from './QualificationLine';

function Comment({username, comment, q1, q2, q3, q4, q5, bg}){

    const profileBg = username.substr(0,1);
    return(
        <div className="comment">
            <div className="commentData">
                <div className="profileBg" style={{background: bg}}>{profileBg}</div>
                <div className="userData">
                    <h2>{username}</h2>
                    <QualificationLine one={q1} two={q2} three={q3} four={q4} five={q5} />
                </div>
            </div>
            <p>{comment}</p>
        </div>
    )
}

export default Comment;
 