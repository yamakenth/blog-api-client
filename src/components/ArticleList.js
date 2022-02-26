import React, { useEffect, useState } from 'react';
import axios from 'axios';
import _ from 'underscore';
import moment from 'moment';
import { Card, Row, Col } from 'react-bootstrap';

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
      <h4 className='mb-3'>{`Posts (${articles.length})`}</h4>
      {
        articles
          // .filter((article) => article.published === true)
          .map((article) => {
            return (
              <Card style={{ width: '20rem' }} key={article._id}>
                <Card.Body>
                  <Card.Title>{_.unescape(article.title)}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {_.unescape(article.author.username)}&nbsp;
                    |&nbsp;&nbsp;{moment(article.createdAt).format('MMMM Do YYYY')}
                  </Card.Subtitle>
                  <Card.Text>
                    {_.unescape(article.text).split(' ').slice(0, 20).join(' ') + '...'}
                  </Card.Text>
                  <Card.Link href="/">Read More</Card.Link>
                </Card.Body>
              </Card>
            );
          })
      }
    </div>
  );
}

export default ArticleList;