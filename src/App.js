import logo from "./logo.svg";
import "./App.css";
import HeaderComp from "./Componnets/HeaderComp";
import FormComp from "./Componnets/FormComp";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: "#c5cae9" }}>
        <HeaderComp />
      </header>
      <main>
        <FormComp />
      </main>
    </div>
  );
}

export default App;
