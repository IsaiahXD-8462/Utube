import React, { useState } from 'react';
import CommentForm from './CommentForm';

const Comment = ({currentUser}) => {

    [comments, setComments] = useState([]);

    return (
        <div>Hi all 
        <CommentForm />
        <button>Edit</button>
        </div>
     );
}
 
export default Comment;