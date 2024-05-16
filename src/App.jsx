import "./App.css";
import Book from "./components/Book";
import { Data } from "./components/Data";

function App() {
  return (
    <>
      <header className="heading">Book Store</header>
      <section className="container">
        {Data.map((props) => {
          return (
            <Book
              key={props.Code}
              bookName={props.bookName}
              authorName={props.authorName}
              posterUrl={props.posterUrl}
              releaseDate={props.releaseDate}
              pricing={props.pricing}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
