

import React, { useEffect, useState } from "react";
import  {getArticles} from "../api";
import LoadingSpinner from "../loading";


export const AllArticles = () => {  
const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
  setIsLoading(true)
  getArticles().then((articles) => {
    setIsLoading(false)
    console.log(articles);
setArticles(articles)

  }).catch((err) => {
      setIsLoading(false);
      console.log(err);
    })
  },[])

return (
  <div>
    {isLoading ? <LoadingSpinner /> : 
    <ul>
      {articles.map((article) => {
        return (
       <div>
        <li key={article.article_id}>

          <h3>Title - {article.title}</h3>
          <h4>Author - {article.author}</h4>
          <p>Topic - {article.topic}</p>
          <hr></hr>
        </li>
       </div>
      )}
       )}
</ul>
}
  </div>
)

}
    
