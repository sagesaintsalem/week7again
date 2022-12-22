import React from 'react';

const Comment = ({author, children}) => {
    return (
        <>
            <h4><em>{children}</em></h4>
            <p>- {author}</p>
        </>
    )
}

export default Comment;