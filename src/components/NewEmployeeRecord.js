import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';

class NewEmployeeRecord extends Component {
  render(){
    return(
      <Form>
        <h1>New Employee Record</h1>
        <Form.Row>
          <Col md={12}>
            <Form.Control placeholder="Employee ID" />
          </Col>
          <Col md={2}>
            <Button variant="primary" type="submit">
              In
            </Button>
          </Col>
          <Col md={10}>
            <Form.Control />
          </Col>
          <Col md={2}>
            <Button variant="primary" type="submit">
              Out
            </Button>
          </Col>
          <Col md={10}>
            <Form.Control />
          </Col>
        </Form.Row>
      </Form>
    );
  }
}

export default NewEmployeeRecord;
