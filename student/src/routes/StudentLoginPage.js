import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import NavigationBar from "../components/navbar1";
import StudentImage from "../images/student.svg";

function StudentLogin(props) {
  return (
    <div style={{ backgroundColor: "#A4B1D7", height: "100vh" }}>
      <NavigationBar />
      <Container style={{ textAlign: "center", marginTop: "2%" }}>
        <Image src={StudentImage} width="200" height="200" />
      </Container>

      <Container style={{ textAlign: "center", marginTop: "1%" }}>
        <h2>Student Login</h2>
      </Container>

      <div
        style={{
          paddingTop: "3%",
          paddingLeft: "8%",
          paddingRight: "8%",
          paddingBottom: "3%",
          backgroundColor: "rgb(18,42,81,0.95)",
          border: "0px solid black",
          borderRadius: "4px",
          marginLeft: "33%",
          marginRight: "33%"
        }}
      >
        <Form>
          <Form.Group controlId="formCard">
            <Form.Label style={{ color: "white" }}>Card Number</Form.Label>
            <Form.Control type="text" placeholder="Library Card Number*" />
            <Form.Text className="text-muted">
              *Contact library in case you don't have a library card.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formName">
            <Form.Label style={{ color: "white" }}>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>

          <Container style={{ textAlign: "center", padding: "9px" }}>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Container>
        </Form>
      </div>
    </div>
  );
}

export default StudentLogin;
