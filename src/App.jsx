import "./App.css";
import Header from "./Header";
import Articlelist from "./Articlelist";
import { Routes, Route } from 'react-router-dom';
import SingleArticle from './SingleArticle';
import Comments from "./Comments";

function App() {

  return (
    <>
      <div>
        <Header />
        <Routes>
        <Route path = "/" element={<Articlelist />} />
        <Route path = "/api/articles/:article_id" element={<SingleArticle />}/>
        <Route path = "/api/articles/:article_id/comments" element ={<Comments />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
