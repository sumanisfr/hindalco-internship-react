import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-0">
      {/* Main Footer Content */}
      <div className="py-0">
        <Container>
          {/* Top Section - Company Info */}
          <Row className="mb-4 justify-content-center justify-content-lg-between align-items-center text-lg-start text-center">
            <Col lg={6} className="text-center text-lg-start mb-4 mb-lg-0">
              <div className="d-flex justify-content-center justify-content-lg-start align-items-center mb-3">
                <img
                  src="https://cdn.freelogovectors.net/wp-content/uploads/2020/09/hindalco_logo.png"
                  alt="Hindalco Logo"
                  style={{ maxHeight: "60px" }}
                  className="me-3"
                />
                <div>
                  <h4 className="mb-1 text-white">Hindalco Industries Limited</h4>
                  <p className="text-white mb-0">Leading Aluminum & Copper Solutions</p>
                </div>
              </div>
              <p className="text-white mb-3">
                Pioneering sustainable metal solutions with cutting-edge technology 
                and unwavering commitment to excellence.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-2 text-white small">
                <span><i className="fas fa-map-marker-alt me-2 text-warning"></i>Mumbai, India</span>
                <span><i className="fas fa-phone-alt me-2 text-warning"></i>+91 22 6691 7000</span>
                <span><i className="fas fa-envelope me-2 text-warning"></i>info@hindalco.com</span>
              </div>
            </Col>
            
            <Col lg={6} className="text-center">
              <div className="mb-4">
                <i className="fas fa-globe fa-3x text-warning mb-3"></i>
                <h5 className="mb-3 text-white">Explore Our Digital World</h5>
                <p className="text-white mb-3">
                  Discover our innovative products, sustainable practices, and global reach.
                </p>
                <a
                  href="#"
                  className="btn btn-warning btn-lg text-dark fw-bold px-4"
                >
                  <i className="fas fa-external-link-alt me-2"></i>
                  Visit Website
                </a>
              </div>
              
              {/* Social Media */}
              <div>
                <h6 className="mb-3 text-white">
                  <i className="fas fa-share-alt me-2 text-warning"></i>
                  Follow Us
                </h6>
                <div className="d-flex justify-content-center gap-3">
                  {[
                    { icon: "facebook-f", color: "#1877f2" },
                    { icon: "twitter", color: "#1da1f2" },
                    { icon: "linkedin-in", color: "#0077b5" },
                    { icon: "youtube", color: "#ff0000" },
                    { icon: "instagram", color: "#e4405f" }
                  ].map((social) => (
                    <a
                      key={social.icon}
                      href="#"
                      className="text-white d-flex align-items-center justify-content-center rounded-circle social-icon"
                      style={{ 
                        width: "45px", 
                        height: "45px",
                        backgroundColor: social.color,
                        transition: "transform 0.3s ease"
                      }}
                      onMouseEnter={(e) => e.target.style.transform = "translateY(-3px)"}
                      onMouseLeave={(e) => e.target.style.transform = "translateY(0)"}
                    >
                      <i className={`fab fa-${social.icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </Col>
          </Row>

          {/* Footer Links */}
          <Row className="g-4">
            <Col xs={6} md={3}>
              <h6 className="text-warning mb-3 fw-bold">
                <i className="fas fa-building me-2"></i>Company
              </h6>
              <ul className="list-unstyled">
                {["About Us", "Leadership", "Careers", "Sustainability", "Investor Relations"].map(
                  (item) => (
                    <li key={item} className="mb-2">
                      <a 
                        href="#" 
                        className="text-white text-decoration-none footer-link"
                        style={{ transition: "color 0.3s ease" }}
                        onMouseEnter={(e) => e.target.style.color = "#ffc107"}
                        onMouseLeave={(e) => e.target.style.color = "#ffffff"}
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </Col>

            <Col xs={6} md={3}>
              <h6 className="text-warning mb-3 fw-bold">
                <i className="fas fa-industry me-2"></i>Products
              </h6>
              <ul className="list-unstyled">
                {["Primary Aluminium", "Rolled Products", "Extrusions", "Copper", "Alloys"].map(
                  (item) => (
                    <li key={item} className="mb-2">
                      <a 
                        href="#" 
                        className="text-white text-decoration-none footer-link"
                        style={{ transition: "color 0.3s ease" }}
                        onMouseEnter={(e) => e.target.style.color = "#ffc107"}
                        onMouseLeave={(e) => e.target.style.color = "#ffffff"}
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </Col>

            <Col xs={6} md={3}>
              <h6 className="text-warning mb-3 fw-bold">
                <i className="fas fa-cogs me-2"></i>Services
              </h6>
              <ul className="list-unstyled">
                {["Technical Support", "Quality Control", "Logistics", "R&D", "Consulting"].map(
                  (item) => (
                    <li key={item} className="mb-2">
                      <a 
                        href="#" 
                        className="text-white text-decoration-none footer-link"
                        style={{ transition: "color 0.3s ease" }}
                        onMouseEnter={(e) => e.target.style.color = "#ffc107"}
                        onMouseLeave={(e) => e.target.style.color = "#ffffff"}
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </Col>

            <Col xs={6} md={3}>
              <h6 className="text-warning mb-3 fw-bold">
                <i className="fas fa-phone me-2"></i>Support
              </h6>
              <ul className="list-unstyled">
                {["Contact Us", "Help Center", "Documentation", "Site Map", "Privacy Policy"].map(
                  (item) => (
                    <li key={item} className="mb-2">
                      <a 
                        href="#" 
                        className="text-white text-decoration-none footer-link"
                        style={{ transition: "color 0.3s ease" }}
                        onMouseEnter={(e) => e.target.style.color = "#ffc107"}
                        onMouseLeave={(e) => e.target.style.color = "#ffffff"}
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-top border-secondary py-3">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start">
              <p className="mb-0 text-white small">
                &copy; 2025 Hindalco Industries Limited. All rights reserved.
              </p>
            </Col>
            <Col md={6} className="text-center text-white text-md-end">
              <div className="d-flex justify-content-center justify-content-md-end gap-3">
                <a href="#" className="text-white text-decoration-none small">Terms of Use</a>
                <span className="text-white">|</span>
                <a href="#" className="text-white text-decoration-none small">Privacy Policy</a>
                <span className="text-white">|</span>
                <a href="#" className="text-white text-decoration-none small">Cookies</a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
