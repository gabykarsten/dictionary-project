import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary</h1>
        <main>
          <Dictionary defaultKeyword="beige" />
        </main>
      </div>
      <footer>
        Coded by{" "}
        <a
          href="https://github.com/gabykarsten"
          target="_blank"
          rel="noreferrer"
        >
          Gabriella Karsten
        </a>
      </footer>
    </div>
  );
}

export default App;
