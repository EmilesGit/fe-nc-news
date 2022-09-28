import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { getArticles } from "../api";

export const Topics = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getArticles()
      .then((articles) => {
        setIsLoading(false);
        setArticles(articles);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h3>Welcome to topics</h3>
      <fieldset>
        <legend>Topics</legend>
        <Link to="/articles">All</Link>
        <Link to="/articles/coding">Coding</Link>
        <Link to="/articles/cooking">Cooking</Link>
        <Link to="/articles/football">Football</Link>
      </fieldset>
      <Routes>
        <Route path="/articles/topics" element={<Topics />}></Route>
      </Routes>
      <ul>
        {articles.map((article) => {
          return (
            <li>
              <h3>Title - {article.title}</h3>
              <h4>Author - {article.author}</h4>
              <p>Topic - {article.topic}</p>
              <hr></hr>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
