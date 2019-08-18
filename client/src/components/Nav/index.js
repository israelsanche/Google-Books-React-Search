import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'

class Navbars extends Component {



  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand  >Google Books</Navbar.Brand>
          <Nav className="mr-auto" >

          </Nav>
          <Container className="justify-content-md-end">
            <Row >

              <Col md="auto">
                <Nav  >
                  <Nav.Link  href="/">Search</Nav.Link>

                </Nav>
              </Col>
              <Col md="auto">
                <Nav>

                  <Nav.Link href="/saved">Saved</Nav.Link>
                </Nav>
              </Col>
            </Row>
          </Container>

        </Navbar>
      </div>
    );
  }
}

export default Navbars;

