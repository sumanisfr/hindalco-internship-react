import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Hardcoded credentials for demo purposes
    const validCredentials = {
      'admin@hindalco.com': { password: 'password', role: 'admin', redirect: '/admin' },
      'manager@hindalco.com': { password: 'password', role: 'manager', redirect: '/manager' },
      'user@hindalco.com': { password: 'password', role: 'user', redirect: '/user' }
    };

    const user = validCredentials[formData.email];
    
    if (user && user.password === formData.password) {
      // Store user session
      sessionStorage.setItem('currentUser', JSON.stringify({
        email: formData.email,
        role: user.role
      }));
      
      // Redirect based on role
      navigate(user.redirect);
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <div className="p-4 shadow rounded bg-white">
            <h2 className="text-center mb-4">
              <i className="fas fa-user-shield me-2 text-primary"></i>
              Welcome
            </h2>
            <p className="text-center text-muted mb-4">Sign in to your account to continue</p>
            
            {error && <Alert variant="danger">{error}</Alert>}
            
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>
                  <i className="fas fa-envelope me-2 text-primary"></i>
                  Email
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="admin/manager/user@hindalco.com"
                  value={formData.email}
                  onChange={handleChange}
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
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mb-3">
                <i className="fas fa-sign-in-alt me-2"></i>
                Sign In
              </Button>

              <div className="text-center">
                <Link to="/register" className="text-primary">
                  <i className="fas fa-user-plus me-1"></i>
                  Don't have an account? Register here
                </Link>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;