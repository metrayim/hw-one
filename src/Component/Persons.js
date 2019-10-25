import React from 'react';
import './Persons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Card ,Col, Modal} from 'react-bootstrap';
// import Models from './Models'

class Persons extends React.Component{
    
    
    render() {
        // console.log(this.props.index)
        return (
            
            <Col lg={3} className="person" >
             <Card>
                 <Card.Img variant="top" src="https://image.flaticon.com/icons/svg/145/145867.svg" />
                 <Card.Body>
                     <Card.Title>{this.props.firstName} {this.props.lastName}</Card.Title>
                     <Card.Text>
                       JOb: {this.props.job}
                     </Card.Text>
                     <Button variant="primary" onClick={this.props.click}>Delete</Button>
                     
                 </Card.Body>
             </Card>
             </Col>

         )
    }

    
}

export default Persons
