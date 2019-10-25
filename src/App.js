import React from 'react';
import './App.css';
import Persons from './Component/Persons'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import FormData from './Component/FormData';
import Navbars from './Component/NarBar'
class App extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    job: "",
    persons: []
  }

  onChangeName = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit = (e, index) => {
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const job = this.state.job;
    this.state.persons.push({ firstName: firstName, lastName: lastName, job: job });
    this.setState({ persons: this.state.persons })
    console.log(this.state.persons)
    this.setState({ firstName: "", lastName: "", job: "" })

    e.preventDefault();
  }
  deletePerson = (personIndex) => {
    const persons = [...this.state.persons]
    // console.log(persons)
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }
  render() {
    const style = {
      border: "2px solid #CCCC",
      boxShadow: "2px 3px 2px #CCCC",
      height: "450px",
      width: "500px",
      marginTop: "30px",
      padding: "30px"
    }
    return (
      <div >
        <Navbars></Navbars>
        <Container style={style}>
          <FormData
            onChangeName={this.onChangeName}
            deletePerson={this.deletePerson}
            onSubmit={this.onSubmit}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            job={this.state.job}
          />
        </Container>

        <Container>
          <Row >
            {this.state.persons.map((person, index) => (
              <Persons
                key={index}
                firstName={person.firstName}
                lastName={person.lastName}
                job={person.job}
                click={() => { this.deletePerson(index) }} s
              />
            ))}

          </Row>
        </Container>
      </div>
    );
  }

}

export default App;
