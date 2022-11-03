import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { AllArticles } from "./components/Articles";
import { Home } from "./components/Home";
import { AllUsers } from "./components/AllUsers";
import { Topics } from "./components/Topics";
import { PageNotFound } from "./components/PageNotFound";
import { ViewArticle } from "./components/ViewArticle";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <header className='App-header'>
          <h1>NC News</h1>
          <nav className='nav'>
            <Link to='/'>Home</Link>
            <Link to='/articles'>Articles</Link>
            <Link to='/users'>Users</Link>
          </nav>
        </header>
        <section className='RouteHolder'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/articles' element={<AllArticles />} />
            <Route path='/users' element={<AllUsers />} />
            <Route path='/topics' element={<Topics />}></Route>
            <Route path='/articles/:topic_slug' element={<AllArticles />} />
            <Route path='/articles/:topic_slug/:id' element={<ViewArticle />} />
            <Route path='*' element={PageNotFound} />
          </Routes>
        </section>
        <body></body>
      </div>
    </BrowserRouter>
  );
}

export default App;
