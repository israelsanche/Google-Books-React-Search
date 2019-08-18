import React, { Component } from "react";
import API from "../utils/API";
import { List } from "../components/List";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Book from "../components/Book";

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() { this.getSavedBooks();}

  getSavedBooks = () => {
    API.getSavedBooks().then(res => this.setState({ books: res.data })).catch(err => console.log(err));};

  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
  };

  render() {
    return (
      <Container>

        <Row>
          <Col size="md-12">
            <Card >
            <Card.Header className="text-center" >
              <Card.Title>
                 My Saved Books!   
              </Card.Title>
          
              </ Card.Header>
            <Card.Body>
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      Button={() => (
                        <Button
                          onClick={() => this.handleBookDelete(book._id)}
                          variant="outline-primary"
                        >
                          Delete
                        </Button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Books</h2>
              )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
     
      </Container>
    );
  }
}

export default Saved;
