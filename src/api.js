import axios from "axios";
import "./App.css";

const newsApi = axios.create({
  baseURL: "https://emiles-nc-news.herokuapp.com/api",
});

export const getArticles = (input) => {
  return newsApi
    .get("/articles", { params: { topic: input } })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getTopics = () => {
  return newsApi.get("/topics").then((res) => {
    return res.data;
  });
};
