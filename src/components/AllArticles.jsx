import axios from "axios";
import React, { useEffect, useState} from "react";

const newsApi = axios.create({
  baseURL: "https://emiles-nc-news.herokuapp.com/api",
});

export const AllArticles = () => {
  const [articles, setArticles] = useState([])
  
useEffect(() => {
  newsApi.get("/articles").then(({data}) => {
    //console.log(data.articles);
     setArticles(data.articles)
   }).catch((err) => {
     console.log(err);
   })
}, []) 

return (
  <div>
    <h2>Articles</h2>
    <ul>
      {articles.map((article) => {
        //console.log(article);
        return (
       <div>
        <li key={article.article_id}>

          <h3>Title - {article.title}</h3>
          <h4>Author - {article.author}</h4>
          <p>Topic - {article.topic}</p>
          <hr></hr>
          
        </li>
       </div> 
      )})}
    </ul>
  </div>
)
};


//axios.get('https://emiles-nc-news.herokuapp.com/api/articles')