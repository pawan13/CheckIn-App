import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import expoLogo from "../../assets/expoLogo.jpeg";
import { Footer } from "../../Components/Layout/Footer";
import Header from "../../Components/Layout/Header";

const Thankyou = () => {
  return (
    <>
      <Header />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="text-center">
            <p className="font-weight-bold display-4">
              Thank you for Checking In
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Thankyou;
