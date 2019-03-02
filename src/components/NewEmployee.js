import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

class NewEmployee extends Component {

render(){
  return(
    <Form>
    <h1>New Employee</h1>
      <Row>
        <Col md={6}>
          <Form.Control placeholder="First name" />
        </Col>
        <Col md={6}>
          <Form.Control placeholder="Last name" />
        </Col>
        <Col md={6}>
          <Form.Control placeholder="Email" />
        </Col>
        <Col md={6}>
          <Form.Control placeholder="Password" />
        </Col>
        <Col md={6}>
          <Button type="submit">Create</Button>
        </Col>
      </Row>
    </Form>
    );
  }
}

export default NewEmployee;
