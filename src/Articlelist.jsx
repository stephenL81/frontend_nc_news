import { useEffect, useState } from "react";
import "../src/css/Articlelist.css";
import Articlecard from "./Articlecard";
import axios from "axios";

const Articlelist = () => {
    const [view , setView] = useState([])
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://stephennc-news.onrender.com/api/articles")
      .then(({ data }) => {
        setArticles(data.articles);
      });
  }, []);

const showArticle = (article_id) => {
    axios
    .get(`https://stephennc-news.onrender.com/api/articles/${article_id}`)
    .then(({data}) =>{
        console.log(data.article)
    //setArticles(data.article)
    })
}

  return (
    <div className="articlelist">
      {articles.map((articles) => {
        const { title, created_at, author, votes, article_id } = articles;
        return (
          <Articlecard
            key={article_id}
            title={title}
            author={author}
            created_at={created_at}
            votes={votes}
            showArticle={showArticle}
            article_id={article_id}
          />
        );
      })}
      ;
    </div>
  );
};

export default Articlelist;
