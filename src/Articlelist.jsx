import { useEffect, useState } from "react";
import "../src/css/Articlelist.css";
import Articlecard from "./Articlecard";
import "./css/Articlecard.css"
import { getAllArticles } from "../src/Api"
import { getComments } from "../src/Api";


const Articlelist = () => {
const [articles, setArticles] = useState([]);
const [showSingle, setShowSingle] = useState(null);
const [isLoading, setIsLoading] = useState(true);


useEffect(() => {
  getAllArticles().then((data) =>{
    setArticles(data)
    setIsLoading(false)
  })
}, []);


const backToArticles = () => {
setShowSingle(null);
};

if(isLoading) return (<h1>Loading...</h1>);

if (articles.length === 0){
  return<h1>No articles to display</h1>
}

return (
<div className="articleList">
{articles.map(
({ title, created_at, author, votes, article_id, article_img_url }) => (
<Articlecard
key={article_id}
article_id={article_id}
title={title}
author={author}
created_at={created_at}
votes={votes}
article_img_url={article_img_url}
/>
)
)}
</div>
);
};


export default Articlelist;


