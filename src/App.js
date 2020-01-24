import React from "react";
import { Button, Accordion, Card, Alert } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>React Bootstrap</h1>
      <Button variant="primary" onClick={() => alert("Hello")} size="lg">
        Click
      </Button>

      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      <Alert variant="danger">This is a Danger alert—check it out!</Alert>
    </div>
  );
}

export default App;
