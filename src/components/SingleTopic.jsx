import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticlesByTopic } from "../api";
import LoadingSpinner from "../loading";

export const SingleTopic = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [topic, setTopic] = useState([]);
  const { topic_slug } = useParams();
  useEffect(() => {
    setIsLoading(true);
    getArticlesByTopic(topic_slug).then((topicData) => {
      setIsLoading(false);
      setTopic(topicData);
    });
  }, [topic_slug]);

  return (
    <div>
      <h2>Articles</h2>
      <fieldset>
        <legend>Topics</legend>
        <Link to="/articles">All</Link>
        <Link to="/topics/coding">Coding</Link>
        <Link to="/topics/cooking">Cooking</Link>
        <Link to="/topics/football">Football</Link>
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
};
