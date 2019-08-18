import React, { Component } from "react";


// import Form from "../components/Form";
import Book from "../components/Book";

import API from "../utils/API";

import { List } from "../components/List";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'

class Home extends Component {
  state = {
    books: [],
    q: "",
    message: "Search For A Book To Begin!"
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getBooks = () => {
    API.getBooks(this.state.q)
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(() =>
        this.setState({
          books: [],
          message: "No New Books Found, Try a Different Query"
        })
      );
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getBooks();
  };

  handleBookSave = id => {
    const book = this.state.books.find(book => book.id === id);

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(() => this.getBooks());
  };

  render() {
    return (
      <div>


        <Container>
          <Row>
            <Col md="12">
              <Card >
                <Card.Header className="text-center">
              <Card.Title>
                 Search and Save your Favorite Books!   
              </Card.Title>
                </Card.Header>
                <Card.Body className="justify-content-md-center">

                  <Card title="Book Search" icon="far fa-book">
                    <Card.Body>
                      <Col md="12" className="justify-content-md-center">
                        <Form>
                          <Row  className="justify-content-md-center">
                          <Col md="6">
                            <Form.Group controlId="formBasicText" className="text-center">
                              <Form.Label >Book you want to search?</Form.Label>
                              <Form.Control
                                className="text-center"
                                id="Title"
                                type="text"
                                value={this.state.q}
                                placeholder="Example: Lord of the Rings"
                                name="q"
                                onChange={this.handleInputChange}
                                required
                              />

                            </Form.Group>
                          </Col>

                          <Col md="1">
                          <Button 
                          variant="outline-primary"
                          onClick={this.handleFormSubmit}
                          type="submit"
                          >
                            
                            Submit</Button>
                            </Col>
                            </Row>
                        </Form>
                      </Col>
                    </Card.Body>



                  </Card>

                </Card.Body>
              </Card>
            </Col>
          </Row>





          <Row>
            <Col md="12">
              <Card>


                <Card title="Results">
                  {this.state.books.length ? (
                    <List>
                      {this.state.books.map(book => (
                        <Book
                          key={book.id}
                          title={book.volumeInfo.title}
                          subtitle={book.volumeInfo.subtitle}
                          link={book.volumeInfo.infoLink}
                          authors={book.volumeInfo.authors.join(", ")}
                          description={book.volumeInfo.description}
                          image={book.volumeInfo.imageLinks.thumbnail}
                          Button={() => (
                            <button
                              onClick={() => this.handleBookSave(book.id)}
                              className="btn btn-primary ml-2"
                            >
                              Save
                        </button>
                          )}
                        />
                      ))}
                    </List>
                  ) : (
                      <Card>
                        <Card.Header></Card.Header>
                        <Card.Body>

                          <h2 className="text-center">{this.state.message}</h2>

                        </Card.Body>
                      </Card>
                    )
                  }
                </Card>



              </Card>
            </Col>
          </Row>

        </Container>


      </div>
    );
  }
}

export default Home;
