import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://emiles-nc-news.herokuapp.com",
});

export const AllArticles = () => {
  <div>
    <h2>Articles</h2>
  </div>;
  return newsApi.get("/articles").then(({ data }) => {
    return data;
  });
};
