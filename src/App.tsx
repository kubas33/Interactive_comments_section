
import "./styles/App.scss";
import CommentsList from "./components/CommentsList";
import { Container } from "react-bootstrap";

function App() {


  return (
    <div className="App">
      <Container>
        <CommentsList />
      </Container>
    </div>
  );
}

export default App;
