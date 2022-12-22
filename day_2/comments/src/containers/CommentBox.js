import React, {useState} from 'react';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

const CommentBox = () => {

    const [comments, setComments] = useState(
        [
            {
                id: 1,
                author: "Rick Sanchez",
                text: "This sucks!"
            },
            {
                id: 2,
                author: "Valeria",
                text: "Do you mind if I smoke?"
            }
        ]
    )

    const addComment = (submittedComment) => {
        submittedComment.id = Date.now();
        const copyComments = [...comments, submittedComment];
        setComments(copyComments);
    }

    return (
        <>
            <h1>Abandon Hope!</h1>
            <CommentList comments={comments}/>
            <h2>Add a comment: </h2>
            <CommentForm onCommentSubmit={addComment}/>
        </>
    );

}




export default CommentBox;