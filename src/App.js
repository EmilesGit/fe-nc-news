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
        <section className="RouteHolder">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/api/articles" element={<AllArticles />} />
            <Route path="api/articles" element={<AllUsers />} />
          </Routes>
          <p>END OF ROUTES SECTION</p>
        </section>
      </div>
    </BrowserRouter>
  );
}

{
  /* <nav>
  <Link to="/">Home</Link>
  <Link to="/articles">Articles</Link>
  <Link to="/users">Users</Link>
</nav>; */
}

export default App;
