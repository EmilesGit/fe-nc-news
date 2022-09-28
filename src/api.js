import axios from "axios";
import "./App.css";

const newsApi = axios.create({
  baseURL: "https://emiles-nc-news.herokuapp.com/api",
});

export const getArticles = (req, res, next) => {
  return newsApi
    .get("/articles")
    .then(({ data }) => {
      return data.articles;
    })
    .catch(next);
};

export const getArticlesByTopic = (topic_slug, res, next) => {
  return newsApi
    .get(`/articles?topic=${topic_slug}`)
    .then(({ data }) => {
      return data.articles;
    })
    .catch(next);
};

export const getTopics = (req, res, next) => {
  return newsApi
    .get("/topics")
    .then((res) => {
      return res.data;
    })
    .catch(next);
};
