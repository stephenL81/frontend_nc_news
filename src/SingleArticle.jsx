import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getSingleArticle } from './Api';
import './css/SingleArticle.css'

const SingleArticle = () => {

    const { article_id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getSingleArticle(article_id)
        .then((data) => {
            setArticle(data)
            setLoading(false)
        })
    },[article_id])

    if(loading) {
        return <h1>Loading...</h1>
    }

    const {title,author,created_at, votes, body, article_img_url} = article;
    
    return (
    <div>
    <h1>{title}</h1>
    <img src = {article_img_url}/>
    <p>{body}</p>
    <label style={{ color: 'blue' }} htmlFor='author'>By:</label>
    <p className='author'>{author}</p>
    <label style={{ color: 'blue' }} htmlFor='created_at'>Posted:</label>
    <p className='created_at'>{created_at}</p>
    <label style={{ color: 'blue' }} htmlFor='votes'>Votes:</label>
    <p className='votes'>{votes}</p>
    <Link to="/">Back to Articles</Link>
    </div>
)
}

export default SingleArticle;
