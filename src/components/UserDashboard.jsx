import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Form,
  Button,
} from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";

const UserDashboard = () => {
  const tools = [
    {
      id: 1,
      name: "Drill Machine X200",
      status: "Available",
      location: "Warehouse A, Shelf 3",
    },
    {
      id: 2,
      name: "Impact Wrench M50",
      status: "In Use",
      location: "Section B, Team 2",
    },
    {
      id: 3,
      name: "Angle Grinder G700",
      status: "Available",
      location: "Tool Room C",
    },
  ];

  return (
    <div className="user-dashboard">
      <Header />

      <Container className="py-5">
        {/* Dashboard Overview */}
        <Card className="mb-4 shadow">
          <Card.Body>
            <Card.Title className="d-flex align-items-center">
              <i className="fas fa-gauge-high me-3 text-warning"></i>
              Dashboard Overview
            </Card.Title>
            <Card.Text className="text-muted">
              Welcome back, John! Here's your tool tracking status at a glance.
            </Card.Text>

            <Row className="mt-4">
              <Col md={4}>
                <Card className="bg-primary text-white mb-3 mb-md-0">
                  <Card.Body className="d-flex justify-content-between align-items-center">
                    <div>
                      <i className="fas fa-toolbox fa-3x opacity-75"></i>
                    </div>
                    <div className="text-end">
                      <h2 className="display-4 fw-bold">125</h2>
                      <p className="mb-0">Total Tools</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4}>
                <Card className="bg-success text-white mb-3 mb-md-0">
                  <Card.Body className="d-flex justify-content-between align-items-center">
                    <div>
                      <i className="fas fa-check-circle fa-3x opacity-75"></i>
                    </div>
                    <div className="text-end">
                      <h2 className="display-4 fw-bold">98</h2>
                      <p className="mb-0">Available</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4}>
                <Card className="bg-warning text-white">
                  <Card.Body className="d-flex justify-content-between align-items-center">
                    <div>
                      <i className="fas fa-handshake fa-3x opacity-75"></i>
                    </div>
                    <div className="text-end">
                      <h2 className="display-4 fw-bold">27</h2>
                      <p className="mb-0">In Use</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Quick Actions */}
        <Card className="mb-4 shadow">
          <Card.Body>
            <Card.Title className="d-flex align-items-center">
              <i className="fas fa-bolt me-3 text-warning"></i>
              Quick Actions
            </Card.Title>

            <Row className="g-3 mt-3">
              <Col sm={6} md={3}>
                <Button variant="primary" className="w-100 py-3">
                  <i className="fas fa-plus-circle me-2"></i>
                  Add Tool
                </Button>
              </Col>
              <Col sm={6} md={3}>
                <Button variant="success" className="w-100 py-3">
                  <i className="fas fa-exchange-alt me-2"></i>
                  Issue/Return
                </Button>
              </Col>
              <Col sm={6} md={3}>
                <Button variant="info" className="w-100 py-3">
                  <i className="fas fa-file-export me-2"></i>
                  Generate Report
                </Button>
              </Col>
              <Col sm={6} md={3}>
                <Button variant="warning" className="w-100 py-3">
                  <i className="fas fa-search me-2"></i>
                  Search Tools
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Recent Tool Activity */}
        <Card className="mb-4 shadow">
          <Card.Body>
            <Card.Title className="d-flex align-items-center">
              <i className="fas fa-clock-rotate-left me-3 text-warning"></i>
              Recent Tool Activity
            </Card.Title>

            <Table striped bordered hover responsive className="mt-3">
              <thead>
                <tr>
                  <th>Tool Name</th>
                  <th>Status</th>
                  <th>Location</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tools.map((tool) => (
                  <tr key={tool.id}>
                    <td>{tool.name}</td>
                    <td>
                      <span
                        className={`badge ${
                          tool.status === "Available"
                            ? "bg-success"
                            : "bg-danger"
                        }`}
                      >
                        {tool.status}
                      </span>
                    </td>
                    <td>{tool.location}</td>
                    <td>
                      <Button variant="primary" size="sm" className="me-2">
                        <i className="fas fa-eye"></i>
                      </Button>
                      <Button variant="warning" size="sm" className="me-2">
                        <i className="fas fa-edit"></i>
                      </Button>
                      <Button variant="danger" size="sm">
                        <i className="fas fa-trash"></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <div className="text-end mt-3">
              <Button variant="link" className="text-warning">
                View All Tools <i className="fas fa-arrow-right ms-2"></i>
              </Button>
            </div>
          </Card.Body>
        </Card>

        {/* Add New Tool */}
        <Card className="mb-4 shadow">
          <Card.Body>
            <Card.Title className="d-flex align-items-center">
              <i className="fas fa-plus-square me-3 text-warning"></i>
              Add New Tool
            </Card.Title>

            <Form className="mt-3">
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Tool Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="e.g., Torque Wrench"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Status</Form.Label>
                    <Form.Select>
                      <option>Available</option>
                      <option>Issued</option>
                      <option>Under Maintenance</option>
                      <option>Lost</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Location/Assigned To</Form.Label>
                <Form.Control type="text" placeholder="e.g., Workshop B" />
              </Form.Group>

              <div className="text-end">
                <Button variant="primary" type="submit" className="px-4">
                  <i className="fas fa-save me-2"></i>
                  Save Tool
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>

        {/* Reports & Analytics */}
        <Card className="shadow">
          <Card.Body>
            <Card.Title className="d-flex align-items-center">
              <i className="fas fa-chart-pie me-3 text-warning"></i>
              Reports & Analytics
            </Card.Title>
            <Card.Text className="text-muted">
              Gain insights into your tool inventory and usage patterns.
            </Card.Text>

            <Row className="mt-4">
              <Col md={6}>
                <Card className="mb-3">
                  <Card.Body>
                    <h5>Tool Status Distribution</h5>
                    <p className="text-muted small">
                      Visual breakdown of tool availability.
                    </p>
                    <div className="bg-light p-4 text-center rounded">
                      <i className="fas fa-chart-pie fa-3x text-muted mb-2"></i>
                      <p>Chart Placeholder</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6}>
                <Card>
                  <Card.Body>
                    <h5>Usage Trends (30 Days)</h5>
                    <p className="text-muted small">
                      Identify frequently used tools.
                    </p>
                    <div className="bg-light p-4 text-center rounded">
                      <i className="fas fa-chart-line fa-3x text-muted mb-2"></i>
                      <p>Line Chart Placeholder</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <div className="text-end mt-4">
              <Button variant="warning" className="px-4">
                <i className="fas fa-download me-2"></i>
                Download Full Report
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>

      <Footer />
    </div>
  );
};

export default UserDashboard;
