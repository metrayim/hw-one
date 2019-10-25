import React, { Component } from 'react';
import {  Row, Col, Button, Form } from 'react-bootstrap';

export default class FormData extends Component {
    render() {
        return (
            <Row>
            <h1>Your Information</h1>
            <Col lg={2}></Col>
            <Col lg={7}>

              <Form onSubmit={this.props.onSubmit}>
                <Form.Group controlId="formBasicEmail" >
                  <Form.Label>Input  First Name</Form.Label>
                  <Form.Control placeholder="Enter FirstName" name="firstName" onChange={this.props.onChangeName} value={this.props.firstName} />
                  <Form.Label>Input Last Name</Form.Label>
                  <Form.Control placeholder="Enter LastName" name="lastName" onChange={this.props.onChangeName} value={this.props.lastName} />
                  <Form.Label>Input Job</Form.Label>
                  <Form.Control placeholder="Enter Job" name="job" onChange={this.props.onChangeName} value={this.props.job} />
                  <Form.Text className="text-muted">
                    We'll never share your profile with anyone else.
                    <p>{this.props.name}</p>
                  </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit" value="Submit">
                  Submit
           </Button>
              </Form>
            </Col>
            <Col lg={3}></Col>
          </Row>
        )
    }
}
