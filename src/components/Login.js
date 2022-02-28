import React, { useState } from 'react';
import { Form, Alert } from 'react-bootstrap';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      username,
      password
    };

    axios.post(`http://localhost:1000/blog/users/login`, user)
      .then((res) => {
        console.log(res.data);
        if (res.data.message) {
          setError(res.data.message);
        } else {
          // window.location.replace('/');
        }
      });

    setUsername('');
    setPassword('');
  }

  function ErrorMessage() {
    if (error.length > 0) {
      return (
        <Alert variant='danger' className='mt-3'>{error}</Alert>
      );
    }
    return null;
  }

  
  return (
    <Form className='col-sm-4 offset-sm-4 d-flex flex-column' onSubmit={handleSubmit}>
      <Form.Group className='mb-3'>
        <Form.Label htmlFor='username'>Username:</Form.Label>
        <Form.Control 
          type='text'  
          id='username' 
          name='username'
          required
          value={username}
          onChange={handleUsernameChange}
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label htmlFor='password'>Password:</Form.Label>
        <Form.Control 
          type='password'
          id='password'
          name='password'
          required
          value={password}
          onChange={handlePasswordChange}
        />
      </Form.Group>
      <button type='submit' className='btn btn-primary align-self-center'>Submit</button>
      <ErrorMessage />
    </Form>
  );
}

export default Login;

/*
import React, { useState } from 'react';
import { Form, Card } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CommentCreate() {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const { id } = useParams();
  
  function handleAuthorChange(e) {
    setAuthor(e.target.value);
  }

  function handleTextChange(e) {
    setText(e.target.value);
  }

  function handleSubmit() {
    const comment = {
      author,
      text
    };

    axios.post(`http://localhost:1000/blog/articles/${id}/comments`, comment)
      .then((res) => {
        console.log(res);
      });

    setAuthor('');
    setText('');
  }

  return (
    <Card className='mb-2'>
      <Card.Body  className='py-2'>
        <Form className='d-flex flex-column' onSubmit={handleSubmit}>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='author'>Display Name:</Form.Label>
            <Form.Control 
              type='text' 
              placeholder='Anonymous Lizard' 
              id='author' 
              name='author'
              value={author}
              onChange={handleAuthorChange}
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='text'>Comment:</Form.Label>
            <Form.Control 
              as='textarea' 
              rows={3} 
              placeholder='Let us know your thoughts' 
              name='text'
              value={text}
              onChange={handleTextChange}
            />
          </Form.Group>
          <button type='submit' className='btn btn-primary align-self-end'>Submit</button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default CommentCreate;
*/