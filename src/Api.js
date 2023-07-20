import axios from "axios";

export const getAllArticles =()=>{
   return axios
    .get("https://stephennc-news.onrender.com/api/articles")
    .then(({ data }) => {
    return data.articles;
    });
}

export const getSingleArticle = (article_id) => {
return axios
.get(`https://stephennc-news.onrender.com/api/articles/${article_id}`)
.then(({ data }) => {
    return data.article;
});
};

export const getComments = (article_id) =>{
    return axios
    .get(`https://stephennc-news.onrender.com/api/articles/${article_id}/comments`)
    .then(({data}) => {
        return data.comments;
    })
}