import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={4}>
            <p>© 2024 Your Company. All rights reserved.</p>
          </Col>     
                 </Row>
      </Container>
    </footer>
  );
}

export default Footer;
