import React, { useState } from 'react'
import { Container,Row, Col, Form, Button } from 'react-bootstrap'

import { redirect, useNavigate } from 'react-router-dom'


export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEamil] = useState(null)
  const [password, setPassword] = useState(null)
  function submitHeandler(e)
  {
    e.preventDefault();
    console.log(email);
    console.log(password);
    if(email === 'hari@gmail.com')
    {

      navigate('/welcome')
    }
    console.log('ok');
  }
  return (
    <>
     <section className='hero  align-items-center'>
            <Container>
                <Row>
                    <Col lg="8">
                        
                    </Col>
                    <Col lg="4">
                        <Form onSubmit={(e)=>submitHeandler(e)}>
                          <Form.Group className='mb-12'>
                            <Form.Label>
                              Email 
                            </Form.Label>
                            <Form.Control type="email" onChange={(e)=>setEamil(e.target.value)}>

                            </Form.Control>
                          </Form.Group>
                          <Form.Group className="lg-12">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" onChange={(e)=>setPassword(e.target.value)}>

                            </Form.Control>
                          </Form.Group>
                          
                          <Button variant='primary' className='mt-2' type="submit">Submit</Button>
                          
                        </Form>
                    </Col>
                </Row>
                </Container>
                </section>
    </>
  )
}
