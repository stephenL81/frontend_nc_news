import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Articlelist from "./Articlelist";
import { Routes, Route } from 'react-router-dom';
import SingleArticle from './SingleArticle';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <Routes>
        <Route path = "/" element={<Articlelist />} />
        <Route path = "/api/articles/:article_id" element={<SingleArticle />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
///api/articles/:article_id'