import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { AllArticles } from "./components/AllArticles";
import { Home } from "./components/Home";
import { AllUsers } from "./components/AllUsers";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>NC News!</h1>
        </header>
        <nav className="Nav">
          <Link to="/">Home</Link>
          <Link to="/api/articles">Articles</Link>
          <Link to="/api/users">Users</Link>
        </nav>
        <section className="RouteHolder">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/api/articles" element={<AllArticles />} />
            <Route path="api/users" element={<AllUsers />} />
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
