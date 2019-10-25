import React, { Component } from 'react'
import {Button,Modal,Form,} from 'react-bootstrap'

export default class Models extends Component {
    state={
        show:false,
        firstName:""
    }
    handleClose=()=>{
        this.setState({show:false})
    }
    handleShow=()=>{
        this.setState({show:!this.state.show})
    }
    onChangeName=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    render() {
        return (
            <>
              <Button className="ml-5" variant="primary" onClick={this.handleShow}>
                Update
              </Button>
        
              <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form.Label>Input  First Name</Form.Label>
                  <Form.Control placeholder="Enter FirstName" name="firstName" onChange={this.props.onChangeName} value={this.props.firstName} ></Form.Control>
                  <Form.Label>Input Last Name</Form.Label>
                  <Form.Control placeholder="Enter LastName" name="lastName" onChange={this.props.onChangeName} value={this.props.lastName} />
                  <Form.Label>Input Job</Form.Label>
                  <Form.Control placeholder="Enter Job" name="job" onChange={this.props.onChangeName} value={this.props.job} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={this.handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          );
    }
}
