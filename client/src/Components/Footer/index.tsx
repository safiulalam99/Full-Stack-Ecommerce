import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container
        style={{ minHeight: "6vh", alignItems:"center", justifyContent:"center" }}
      >
        <Row>
          <Col className="text-center py-3">Copyright &copy; Safiul Alam</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
