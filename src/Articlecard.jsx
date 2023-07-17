import "../src/css/Articlecard.css";


const Articlecard = ({ title, author, created_at, votes , showArticle, article_id}) => {
  
    const articleClicked = () =>{
        console.log(article_id)
        showArticle(article_id)
    }
  
    return (
    <section onClick={articleClicked} className="Articlecard">
      <label htmlFor="title">Title: </label>
      <h3 id="title">{title}</h3>
      <label htmlFor="author">By: </label>
      <p id="author">{author}</p>
      <label htmlFor="created_at">Created: </label>
      <p id="created_at">{created_at}</p>
      <label htmlFor="votes">Votes</label>
      <p>{votes}</p>
    </section>
  );
};
export default Articlecard;
