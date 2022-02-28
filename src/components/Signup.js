import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handlePasswordConfirmChange(e) {
    setPasswordConfirm(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      username,
      password,
      passwordConfirm
    };

    console.log(user);

    setUsername('');
    setPassword('');
    setPasswordConfirm('');
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
      <Form.Group className='mb-3'>
        <Form.Label htmlFor='password-confirm'>Password Confirmation:</Form.Label>
        <Form.Control 
          type='password'
          id='password-confirm'
          name='password-confirm'
          required
          value={passwordConfirm}
          onChange={handlePasswordConfirmChange}
        />
      </Form.Group>
      <button type='submit' className='btn btn-primary align-self-center'>Signup</button>
    </Form>
  );
}

export default Signup;