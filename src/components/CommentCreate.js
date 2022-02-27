import React, { useEffect, useState } from 'react';
import { Form, Card } from 'react-bootstrap';

function CommentCreate() {
  return (
    <Card className='mb-2'>
      <Card.Body  className='py-2'>
        <Form className='d-flex flex-column'>
          
          <Form.Group className='mb-3'>
            <Form.Label>Display Name:</Form.Label>
            <Form.Control type='email' placeholder='Anonymous Lizard' />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Comment:</Form.Label>
            <Form.Control as='textarea' rows={3} placeholder='Let us know your thoughts' />
          </Form.Group>
          
          <button type='submit' className='btn btn-primary align-self-end'>Submit</button>

        </Form>
      </Card.Body>
    </Card>
  );
}

export default CommentCreate;