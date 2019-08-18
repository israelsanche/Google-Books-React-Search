import React from "react";
import { ListItem } from "../List";
// import "./style.css";
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'

function Book({ title, subtitle, authors, link, description, image, Button }) {
  return (
    <ListItem>
      <Card border="light">
      <Row >
        <Col md="10">
          <Card.Header className="font-italic" >
            <Card.Title >
            <Card.Link href={link}>
          {title}   
          </Card.Link> 
            </Card.Title>
          
          </Card.Header>
         
          {subtitle && <Card.Title className="font-italic">{subtitle}</Card.Title>}
        </Col>
        <Col size="md-2">
          <div className="btn-container">
            <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={link}>
              View
            </a>
            <Button />
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <p className="font-italic small">Written by {authors}</p>
        </Col>
      </Row>
      <Row>
        <Col md="3">
        <ResponsiveEmbed aspect="a4by3" style={{ width: 200, height: 280 }}>
          <Image rounded src={image} alt={title} />
          </ResponsiveEmbed>
        </Col>
        <Col size="12 sm-8 md-10">
          <Card.Text>{description}</Card.Text>
        </Col>
      </Row>
      </Card>
    </ListItem>
  );
}

export default Book;

// border="primary"