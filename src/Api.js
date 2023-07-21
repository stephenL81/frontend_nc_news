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

export const increaseVote = (article_id) => {
    return axios
    .patch(`https://stephennc-news.onrender.com/api/articles/${article_id}`, { inc_votes : 1 })
    .then((response)=> {
        return response.data;
    })
    }

export const decreaseVote = (article_id) => {
    return axios
    .patch(`https://stephennc-news.onrender.com/api/articles/${article_id}`, { inc_votes : -1 })
    .then(response => {
        return response.data
    })
}
// an object in the form { inc_votes: newVote }.
// newVote will indicate how much the votes property in the database should be updated by, e.g.
// { inc_votes : 1 } would increment the current article's vote property by 1
// { inc_votes : -100 } would decrement the current article's vote property by 100