import React, { useEffect, useState } from 'react';
import axios from 'axios';
import _ from 'underscore';
import moment from 'moment';

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1000/blog/articles')
      .then((res) => {
        setArticles(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  
  return (
    <div>
      {
        articles
          // .filter((article) => article.published === true)
          .map((article) => {
            return (
              <div key={article._id}>
                <p><strong>Title:</strong> {_.unescape(article.title)}</p>
                <p><strong>Author:</strong> {_.unescape(article.author.username)}</p>
                <p><strong>Written on:</strong> {moment(article.createdAt).format('MMMM Do YYYY')}</p>
                <p><strong>Published (only for testing):</strong> {String(article.published)}</p>
                <p><strong>Text:</strong> {_.unescape(article.text)}</p>
                <br />
              </div>
            );
          })
      }
    </div>
  );
}

export default ArticleList;