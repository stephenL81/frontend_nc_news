import React, { useState } from "react";
import { Link } from "react-router-dom";

const Articlecard = ({
  title,
  author,
  created_at,
  votes,
  showArticle,
  article_id,
  body,
  article_img_url,
  backToArticles,
  //canBeClicked = true,
}) => {
  return (
 
      <Link to={`/api/articles/${article_id}`} className="Articlecard">
        <img
          src={article_img_url}
          alt="image for article"
          className="article-img"
        />
        <div className="article-info">
          <label htmlFor="title">Title:</label>
          <h3 className="article-title">{title}</h3>

          <label htmlFor="author">By:</label>
          <p className="article-author">{author}</p>

          <label htmlFor="created">Created:</label>
          <p className="article-created">{created_at}</p>

          <label htmlFor="votes">Votes:</label>
          <p className="article-votes">{votes}</p>
        </div>
      </Link>

  );
};
export default Articlecard;
