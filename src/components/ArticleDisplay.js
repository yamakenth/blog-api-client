import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import _ from 'underscore';
import moment from 'moment';

import CommentSection from './CommentSection';

function ArticleDisplay() {
  const { id } = useParams();

  const [article, setArticle] = useState({
    title: '',
    text: '',
    author: { username: '' },
    createdAt: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:1000/blog/articles/${id}`)
      .then((res) => {
        setArticle(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }, [id]);

  return (
    <div>
      <div className='main-article mb-5'>
        <h2>{_.unescape(article.title)}</h2>
        <p className='text-muted mb-0'>By {_.unescape(article.author.username)}</p>
        <p className='text-muted mb-0'>
          <i className="bi bi-clock me-1"></i>
          {moment(article.createdAt).format('MMMM Do YYYY')}
        </p>
        <hr />
        <p>{_.unescape(article.text)}</p>
      </div>
      <CommentSection articleid={id}/>
    </div>
  );
}

export default ArticleDisplay;