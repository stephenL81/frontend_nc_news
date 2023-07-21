import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getSingleArticle , getComments, increaseVote, decreaseVote} from './Api';
import './css/SingleArticle.css'
import Comments from './Comments';

const SingleArticle = () => {

    const { article_id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true)
    const [comments , setComments] =useState(null)
    const [showComments, setShowComments] = useState(false)
    const [voted, setVoted] = useState(false)
    const [voteErr, setVoteErr] = useState(false)
    const [voteCount, setVoteCount] = useState(0)
    const [initialVoteCount, setInitialVoteCount] = useState(0)

    useEffect(() => {
        getSingleArticle(article_id)
        .then((data) => {
            setArticle(data)
            setInitialVoteCount(data.votes)
            setLoading(false)
        })
    },[article_id,voted])

    if(loading) {
        return <h1>Loading...</h1>
    }

    const commentsClicked = () => {
        getComments(article_id)
        .then((commentsData) =>{
            setComments(commentsData);
            setShowComments(true)
        
        })
}

const optimisticVote = (value) => {
    if ((value === 1 && !voted) || (value === -1 && voted)) {
      setVoteCount((prevVoteCount) => prevVoteCount + value);
      setVoted((prevVoted) => !prevVoted);

      if (value === 1) {
        increaseVote(article_id).catch(() => {
          setVoteCount((prevVoteCount) => prevVoteCount - value);
          setVoted((prevVoted) => !prevVoted);
        });
      } else {
        decreaseVote(article_id).catch(() => {
          setVoteCount((prevVoteCount) => prevVoteCount - value);
          setVoted((prevVoted) => !prevVoted);
7"
        });
      }
    }
  };
  
const upVote = () => {
    optimisticVote(1)
    // increaseVote(article_id)
    // .then(()=>{
    //     setVoted(true)
    //}
    //)
}

const downVote = () => {
    optimisticVote(-1)
    // decreaseVote(article_id)
    // .then(()=>{
    //     setVoted(false)
    // })
}


    const {title,author,created_at, votes, body, article_img_url,} = article;
    
    return (
    
    <div>
    <h1>{title}</h1>
    <img src = {article_img_url}/>
    <p>{body}</p>
    <label style={{ color: 'blue' }} htmlFor='author'>By:</label>
    <p className='author'>{author}</p>
    <label style={{ color: 'blue' }} htmlFor='created_at'>Posted:</label>
    <p className='created_at'>{created_at}</p>
    <div>
        <label style={{ color: 'blue' }} htmlFor='votes'>Votes:</label>
        <p className='votes'>{initialVoteCount + voteCount}</p>
        {!voted &&<button onClick={upVote}>Click to Like Article</button>}
        {voted &&<button onClick={downVote}>Click to unlike Article</button>}
    </div>
    <Link to="/">Back to Articles</Link>
    <button onClick = {commentsClicked}>Comments</button>
    {showComments && <Comments comments={comments} />}
    </div>
        
)
}

export default SingleArticle;