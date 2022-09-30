import axios from "axios";
import "./App.css";

const newsApi = axios.create({
  baseURL: "https://emiles-nc-news.herokuapp.com/api",
});

export const getArticlesByTopic = (input) => {
  return newsApi
    .get("/articles", { params: { topic: input } })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getArticlesById = (id) => {
  return newsApi.get(`/articles/${id}`).then(({ data }) => {
    return data.result;
  });
};

export const getTopics = () => {
  return newsApi.get("/topics").then((res) => {
    return res.data;
  });
};

export const addVotes = (id) => {
  return newsApi.patch(`/articles/${id}`, { inc_votes: 1 }).then((res) => {
    console.log(res);
  });
};
