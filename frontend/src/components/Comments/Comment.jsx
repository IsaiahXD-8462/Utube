import React, { useState } from 'react';
import CommentForm from './CommentForm';

const Comment = ({currentUser}) => {

    [comments, setComments] = useState([]);

    return (
        <div>Hi all</div> 
        // <CommentForm />
        // <button>Edit</button>
     );
}
 
export default Comment;