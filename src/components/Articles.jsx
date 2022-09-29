import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getArticles, getTopics } from "../api";
import LoadingSpinner from "../loading";
import { PageNotFound } from "./PageNotFound";

export const AllArticles = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const { topic_slug } = useParams();
  const [topicLink, setTopicLink] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic_slug)
      .then((articles) => {
        setIsLoading(false);
        setArticles(articles);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
        console.log(err);
      });
  }, [topic_slug]);

  useEffect(() => {
    getTopics().then((data) => {
      setTopicLink(data.topics);
    });
  }, []);

  if (error) {
    return <PageNotFound message={error} />;
  }
  return (
    <div>
      <h2>Articles</h2>
      <fieldset>
        <legend>Topics</legend>
        <Link to="/articles">All</Link>
        {topicLink.map((topic) => {
          return (
            <Link
              to={`/articles/${topic.slug}`}
              key={topic.slug}
            >{`${topic.slug}`}</Link>
          );
        })}
      </fieldset>

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ul>
          {articles.map((article) => {
            return (
              <section>
                <li key={article.article_id}>
                  <h3>Title - {article.title}</h3>
                  <h4>Author - {article.author}</h4>
                  <p>Topic - {article.topic}</p>
                  <hr></hr>
                </li>
              </section>
            );
          })}{" "}
        </ul>
      )}
    </div>
  );
};
