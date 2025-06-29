import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <div className="d-flex justify-content-center mb-3">
              <img
                src="https://cdn.freelogovectors.net/wp-content/uploads/2020/09/hindalco_logo.png"
                alt="Hindalco Logo"
                style={{ maxHeight: "80px" }}
              />
            </div>
            <h4 className="mb-3">
              <i className="fas fa-share-alt me-2"></i>
              Connect With Us
            </h4>
            <div className="d-flex justify-content-center flex-wrap gap-3 mb-3">
              {[
                "facebook-f",
                "twitter",
                "youtube",
                "linkedin-in",
                "instagram",
              ].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="text-white bg-secondary rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "40px", height: "40px" }}
                >
                  <i className={`fab fa-${icon}`}></i>
                </a>
              ))}
            </div>
          </Col>
        </Row>

        <Row className="g-4">
          <Col xs={12} sm={6} md={3}>
            <h5 className="text-warning mb-3">Company</h5>
            <ul className="list-unstyled">
              {["About Us", "Careers", "Leadership", "Sustainability"].map(
                (item) => (
                  <li key={item} className="mb-2">
                    <a href="#" className="text-white text-decoration-none">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <h5 className="text-warning mb-3">Products</h5>
            <ul className="list-unstyled">
              {["Aluminium", "Copper", "Rolled Products", "Extrusions"].map(
                (item) => (
                  <li key={item} className="mb-2">
                    <a href="#" className="text-white text-decoration-none">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <h5 className="text-warning mb-3">Services</h5>
            <ul className="list-unstyled">
              {[
                "Customer Support",
                "Technical Services",
                "Quality Assurance",
                "Logistics",
              ].map((item) => (
                <li key={item} className="mb-2">
                  <a href="#" className="text-white text-decoration-none">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <h5 className="text-warning mb-3">Contact</h5>
            <ul className="list-unstyled">
              {[
                "Head Office",
                "Regional Offices",
                "Plant Locations",
                "Support",
              ].map((item) => (
                <li key={item} className="mb-2">
                  <a href="#" className="text-white text-decoration-none">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="text-center text-muted">
            <p className="mb-0">&copy; 2025 Hindalco Industries Limited. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
