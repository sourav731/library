import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import BookImage from "../images/books.svg";

function LibraryCard(props) {
  return (
    <React.Fragment>
      <Card
        style={{
          width: "350px",
          height: "500px",
          backgroundColor: "#3D5884",
          color: "white"
        }}
      >
        <Card.Body>
          <span style={{ paddingLeft: "32.5%" }}>
            <Image src={BookImage} width="100" height="100" />
          </span>

          <Card.Title
            style={{
              textAlign: "center",
              fontSize: "30px"
            }}
          >
            Library card {props.cardNumber}
          </Card.Title>
          <hr style={{ borderTop: "1px solid white" }} />
          <Card.Text style={{ fontSize: "large" }}>
            Book :
            <span
              style={{
                backgroundColor: "#5575A8",
                color: "white",
                marginLeft: "9px",
                paddingLeft: "5px",
                paddingRight: "5px",
                paddingTop: "3px",
                paddingBottom: "3px"
              }}
            >
              {props.bookName}
            </span>
          </Card.Text>
          <Card.Text
            style={{
              fontSize: "large"
            }}
          >
            Author :
            <span
              style={{
                backgroundColor: "#5575A8",
                color: "white",
                marginLeft: "9px",
                paddingLeft: "5px",
                paddingRight: "5px",
                paddingTop: "3px",
                paddingBottom: "3px"
              }}
            >
              {props.author}
            </span>
          </Card.Text>
          <Card.Text style={{ fontSize: "large" }}>
            Issue Date :
            <span
              style={{
                backgroundColor: "#5575A8",
                color: "white",
                marginLeft: "9px",
                paddingLeft: "5px",
                paddingRight: "5px",
                paddingTop: "3px",
                paddingBottom: "3px"
              }}
            >
              {props.issueDate}
            </span>
          </Card.Text>
          <Card.Text style={{ fontSize: "large" }}>
            Submission Date :
            <span
              style={{
                backgroundColor: "#5575A8",
                color: "white",
                marginLeft: "9px",
                paddingLeft: "5px",
                paddingRight: "5px",
                paddingTop: "3px",
                paddingBottom: "3px"
              }}
            >
              {props.submissionDate}
            </span>
          </Card.Text>
          <Card.Text style={{ fontSize: "large" }}>
            Accession No. :
            <span
              style={{
                backgroundColor: "#5575A8",
                color: "white",
                marginLeft: "9px",
                paddingLeft: "5px",
                paddingRight: "5px",
                paddingTop: "3px",
                paddingBottom: "3px"
              }}
            >
              {props.accNum}
            </span>
          </Card.Text>
          <Card.Text style={{ fontSize: "large" }}>
            Class No. :
            <span
              style={{
                backgroundColor: "#5575A8",
                color: "white",
                marginLeft: "9px",
                paddingLeft: "5px",
                paddingRight: "5px",
                paddingTop: "3px",
                paddingBottom: "3px"
              }}
            >
              {props.classNum}
            </span>
          </Card.Text>

          <Card.Text style={{ fontSize: "large" }}>
            Department :
            <span
              style={{
                backgroundColor: "#5575A8",
                color: "white",
                marginLeft: "9px",
                paddingLeft: "5px",
                paddingRight: "5px",
                paddingTop: "3px",
                paddingBottom: "3px"
              }}
            >
              {props.department}
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}

export default LibraryCard;
