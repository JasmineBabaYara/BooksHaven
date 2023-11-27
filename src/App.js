import "./App.css";
import Header from "./pages/landingPage/header";
import Content from "./pages/landingPage/content";
import Sort from "./pages/landingPage/sort";
import BooksDisplay from './pages/landingPage/booksDisplay';
import Footer from "./pages/landingPage/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Sort />
      <BooksDisplay />
      <Footer />
    </div>
  );
}

export default App;
