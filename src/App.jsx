import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Articlelist from "./Articlelist";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <Articlelist />
      </div>
    </>
  );
}

export default App;
