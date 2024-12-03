import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import fantasy from "./data/fantasy.json";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container fluid>
      <MyNav />
      <div className="content-container">
        <Welcome />
        {}
        <BookList books={fantasy} />
      </div>
      <MyFooter />
    </Container>
  );
}

export default App;
