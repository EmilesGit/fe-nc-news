import axios from "axios";
import "./App.css";

const newsApi = axios.create({
  baseURL: "https://emiles-nc-news.herokuapp.com/api",
});

export const getArticles = () => {
  return newsApi
    .get("/articles")
    .then(({ data }) => {
      return data.articles;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getArticlesByTopic = (topic_slug) => {
  return newsApi
    .get(`/articles?topic=${topic_slug}`)
    .then(({ data }) => {
      return data.articles;
    })
    .catch((err) => {
      console.log(err);
    });
};
