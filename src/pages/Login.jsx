import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple authentication logic
       if (email === "user@hindalco.com" && password === "password") {
      navigate("/dashboard/userDashboard");
    } else if (email === "manager@hindalco.com" && password === "password") {
      navigate("/dashboard/managerDashboard");
    } else if (email === "admin@hindalco.com" && password === "password") {
      navigate("/dashboard/AdminDashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div
      className="login-page"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Header />

      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <div className="text-white mb-5">
              <h1 className="gradient-text">Hindalco Industries</h1>
              <p className="lead">
                Hindalco has a major presence in the Sambalpur region of Odisha,
                anchored by its flagship Aditya Aluminium complex at Lapanga.
              </p>
            </div>
          </Col>

          <Col md={6} lg={4}>
            <Card className="shadow-lg">
              <Card.Body>
                <Card.Title className="text-center mb-4">
                  <i className="fas fa-user-shield me-2 text-primary"></i>
                  Welcome
                </Card.Title>
                <Card.Subtitle className="text-muted mb-4 text-center">
                  Sign in to your account to continue
                </Card.Subtitle>

                <Form onSubmit={handleLogin}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <i className="fas fa-envelope me-2 text-primary"></i>
                      Email
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="admin/manager/user@hindalco.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>
                      <i className="fas fa-lock me-2 text-primary"></i>
                      Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 mb-3"
                  >
                    <i className="fas fa-sign-in-alt me-2"></i>
                    Sign In
                  </Button>

                  <div className="text-center text-muted small">
                    Don't have an account?
                    <a href="/register" className="text-decoration-none ms-1">
                      <i className="fas fa-user-plus me-1"></i>
                      Register here
                    </a>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default Login;
