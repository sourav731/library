import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import NavigationBar from "../components/navbar2";
import LibraryCard from "../components/libraryCard";

function CardStatus(props) {
  return (
    <div
      style={{
        backgroundColor: "#4A71B0"
      }}
    >
      <NavigationBar cardNumber="SL2039" />

      <div style={{ paddingTop: "8%", textAlign: "center", color: "white" }}>
        <h1>CARD STATUS</h1>
      </div>
      <Container>
        <Row style={{ paddingTop: "1%", paddingBottom: "2%" }}>
          <Col style={{ paddingTop: "5%" }}>
            <LibraryCard
              cardNumber="1"
              bookName="Concept of physics"
              author="H.C.Verma"
              issueDate="18.03.2020"
              submissionDate="02.04.2020"
              accNum="AC6549"
              classNum="BA-8"
              department="Information Tech"
            />
          </Col>

          <Col style={{ paddingTop: "5%" }}>
            <LibraryCard
              cardNumber="2"
              bookName="Algorithms"
              author="CLRS"
              issueDate="18.03.2020"
              submissionDate="02.04.2020"
              accNum="AC6549"
              classNum="BA-8"
              department="Information Tech"
            />
          </Col>

          <Col style={{ paddingTop: "5%" }}>
            <LibraryCard
              cardNumber="3"
              bookName="Let us C"
              author="Sourav Shukla"
              issueDate="18.03.2020"
              submissionDate="02.04.2020"
              accNum="AC6549"
              classNum="BA-8"
              department="Information Tech"
            />
          </Col>
        </Row>
        <Row
          style={{
            paddingBottom: "5%"
          }}
        >
          <Col style={{ paddingTop: "5%" }}>
            <LibraryCard
              cardNumber="4"
              bookName="Concept of physics"
              author="H.C.Verma"
              issueDate="18.03.2020"
              submissionDate="02.04.2020"
              accNum="AC6549"
              classNum="BA-8"
              department="Information Tech"
            />
          </Col>
          <Col style={{ paddingTop: "5%" }}>
            <LibraryCard
              cardNumber="5"
              bookName="Concept of physics"
              author="H.C.Verma"
              issueDate="18.03.2020"
              submissionDate="02.04.2020"
              accNum="AC6549"
              classNum="BA-8"
              department="Information Tech"
            />
          </Col>

          <Col style={{ paddingTop: "5%" }}>
            <LibraryCard
              cardNumber="6"
              bookName="Concept of physics"
              author="H.C.Verma"
              issueDate="18.03.2020"
              submissionDate="02.04.2020"
              accNum="AC6549"
              classNum="BA-8"
              department="Information Tech"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CardStatus;
