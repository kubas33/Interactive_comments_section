import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import CommentsList from "./components/CommentsList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <CommentsList />
    </div>
  );
}

export default App;
