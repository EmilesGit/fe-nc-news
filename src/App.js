import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { AllArticles } from "./components/AllArticles";
import { Home } from "./components/Home";
import { AllUsers } from "./components/AllUsers";
import { Topics } from "./components/Topics";
import { SingleTopic } from "./components/SingleTopic";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>NC News!</h1>
          <nav className="Nav">
            <Link to="/">Home</Link>
            <Link to="/articles">Articles</Link>
            <Link to="/users">Users</Link>
          </nav>
        </header>
        <section className="RouteHolder">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/articles" element={<AllArticles />} />
            <Route path="/users" element={<AllUsers />} />
            <Route path="/topics" element={<Topics />}></Route>
            <Route path="/topics/:topic_slug" element={<SingleTopic />} />
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
