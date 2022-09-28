import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticlesByTopic, getTopics } from "../api";
import LoadingSpinner from "../loading";
import { PageNotFound } from "./PageNotFound";

export const SingleTopic = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [topic, setTopic] = useState([]);
  const { topic_slug } = useParams();
  const [topicLink, setTopicLink] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    getArticlesByTopic(topic_slug)
      .then((topicData) => {
        setIsLoading(false);
        setTopic(topicData);
      })
      .catch((err) => {
        setError(err);
      });
  }, [topic_slug]);

  useEffect(() => {
    getTopics().then((data) => {
      setTopicLink(data.topics);
    });
  }, []);

  if (error) {
    return <PageNotFound message={error} />;
  } else {
    return (
      <div>
        <h2>Articles</h2>
        <fieldset>
          <legend>Topics</legend>
          <Link to="/articles">All</Link>
          {topicLink.map((topic) => {
            return (
              <Link to={`/articles/${topic.slug}`}>{`${topic.slug}`}</Link>
            );
          })}
        </fieldset>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <ul>
            {topic.map((article) => {
              return (
                <div>
                  <li key={article.article_id}>
                    <h3>Title - {article.title}</h3>
                    <h4>Author - {article.author}</h4>
                    <p>Topic - {article.topic}</p>
                    <hr></hr>
                  </li>
                </div>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
};
