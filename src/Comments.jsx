import React, { useEffect, useState} from 'react';
import { getComments } from './Api';
import { useParams } from 'react-router-dom';
import './css/Comments.css'

const Comments = ({ comments }) => {
//double check before I pull request, also look at import on App
return(
<div>
    <h3>Comments</h3>
{comments.map(({ comment_id ,body,author,created_at,votes }) => (
    <div key={comment_id}>
    <p>{body}</p>
    <p>By: {author}</p>
    <p>Created: {created_at}</p>
    <p>Votes: </p>
    <hr/>
    </div>
    
)
)}
</div>
)
}
export default Comments;