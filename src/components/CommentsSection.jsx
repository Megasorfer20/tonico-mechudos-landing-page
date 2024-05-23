import { CommentsData } from '../app/commentsData';
import './../css/commentsSection.css';
import Comment from "./Comment";
import CommentsBar from './CommentsBar';

function CommentsSection(){
    return(
        <div>
            <CommentsBar />
            <div className="commentsSection">
                {
                    CommentsData.map((comment, index)=>(
                        <Comment key={index} username={comment.username} q1={comment.q1} q2={comment.q2} q3={comment.q3} q4={comment.q4} q5={comment.q5} comment={comment.comment} bg={comment.bg} />
                    ))
                }
            </div>
        </div>
    )
}

export default CommentsSection;