import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { addVotes, getArticlesById, getTopics } from "../api";
import LoadingSpinner from "../loading";
import { PageNotFound } from "./PageNotFound";

export const ViewArticle = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [article, setArticle] = useState([]);
  const { id } = useParams();
  const [topicLink, setTopicLink] = useState([]);
  const [error, setError] = useState(null);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    getArticlesById(id)
      .then((data) => {
        setIsLoading(false);
        setArticle(data);
        setLikes(data.votes);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
        console.log(err);
      });
  }, [id]);

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
          <section>
            <li key={article.article_id}>
              <h3>Title - {article.title}</h3>
              <h4>Author - {article.author}</h4>
              <p>Topic - {article.topic}</p>
              <p>{article.body}</p>
              <hr></hr>
              <p> Likes - {likes}</p>
              <button
                onClick={() => {
                  addVotes(article.article_id);
                  setLikes((previousLikes) => {
                    return previousLikes + 1;
                  });
                }}
              >
                Like
              </button>
            </li>
          </section>{" "}
        </ul>
      )}
    </div>
  );
};
