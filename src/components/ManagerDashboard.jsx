import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Form,
  Button,
  Nav,
} from "react-bootstrap";
import Header from "./Header";
import Footer from "./Header";

const ManagerDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const toolStatusData = [
    {
      id: "T001",
      name: "Drill Machine",
      status: "Available",
      assignedTo: "N/A",
      lastCheck: "2025-06-20",
    },
    {
      id: "T002",
      name: "Welding Torch",
      status: "In Use",
      assignedTo: "Ramesh Singh",
      lastCheck: "2025-06-25",
    },
    {
      id: "T003",
      name: "Grinder",
      status: "Maintenance",
      assignedTo: "N/A",
      lastCheck: "2025-06-22",
    },
  ];

  const recentActivityData = [
    {
      timestamp: "2025-06-27 10:30 AM",
      toolId: "T005",
      action: "Issued",
      by: "Manager A",
      to: "Priya Sharma",
    },
    {
      timestamp: "2025-06-27 09:45 AM",
      toolId: "T002",
      action: "Returned",
      by: "Ramesh Singh",
      to: "Manager B",
    },
  ];

  const toolsData = [
    {
      id: "T001",
      name: "Drill Machine",
      category: "Power Tools",
      condition: "Good",
      location: "Warehouse A",
      value: "₹15,000",
    },
    {
      id: "T002",
      name: "Welding Torch",
      category: "Welding",
      condition: "Excellent",
      location: "Workshop B",
      value: "₹25,000",
    },
  ];

  const usersData = [
    {
      id: "U001",
      name: "Rajesh Kumar",
      role: "Technician",
      department: "Maintenance",
      email: "rajesh.kumar@hindalco.com",
      status: "Active",
    },
    {
      id: "U002",
      name: "Priya Sharma",
      role: "Engineer",
      department: "Production",
      email: "priya.sharma@hindalco.com",
      status: "Active",
    },
  ];

  const reportsData = [
    {
      name: "Monthly Tool Usage Report",
      type: "Usage",
      date: "2025-06-01",
      status: "Generated",
    },
    {
      name: "Tool Maintenance Schedule",
      type: "Maintenance",
      date: "2025-06-15",
      status: "Pending",
    },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "Available":
        return "bg-success text-white";
      case "In Use":
        return "bg-warning text-dark";
      case "Maintenance":
        return "bg-danger text-white";
      default:
        return "bg-secondary text-white";
    }
  };

  return (
    <div className="manager-dashboard">
      <Header />

      <Container fluid className="px-0">
        <Row className="g-0">
          {/* Sidebar */}
          <Col md={3} lg={2} className="bg-dark text-white vh-100 sticky-top">
            <div className="p-3">
              <div className="d-flex align-items-center mb-4">
                <div className="bg-primary rounded-circle p-2 me-2">
                  <i className="fas fa-user-circle text-white"></i>
                </div>
                <span className="fw-bold">Manager</span>
              </div>

              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link
                    active={activeTab === "dashboard"}
                    onClick={() => setActiveTab("dashboard")}
                    className="text-white"
                  >
                    <i className="fas fa-tachometer-alt me-2"></i>
                    Dashboard
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    active={activeTab === "tools"}
                    onClick={() => setActiveTab("tools")}
                    className="text-white"
                  >
                    <i className="fas fa-tools me-2"></i>
                    Tools
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    active={activeTab === "users"}
                    onClick={() => setActiveTab("users")}
                    className="text-white"
                  >
                    <i className="fas fa-users me-2"></i>
                    Users
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    active={activeTab === "reports"}
                    onClick={() => setActiveTab("reports")}
                    className="text-white"
                  >
                    <i className="fas fa-chart-bar me-2"></i>
                    Reports
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </Col>

          {/* Main Content */}
          <Col md={9} lg={10} className="py-3">
            {activeTab === "dashboard" && (
              <>
                <h2 className="mb-4 d-flex align-items-center">
                  <i className="fas fa-tachometer-alt text-primary me-3"></i>
                  Manager Dashboard
                </h2>

                <Row className="mb-4 g-3">
                  <Col md={3}>
                    <Card className="h-100">
                      <Card.Body className="d-flex justify-content-between align-items-center">
                        <div>
                          <Card.Title className="text-muted small mb-1">
                            Total Tools
                          </Card.Title>
                          <Card.Text className="h3 fw-bold">500</Card.Text>
                        </div>
                        <i className="fas fa-toolbox text-primary fa-2x opacity-50"></i>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={3}>
                    <Card className="h-100">
                      <Card.Body className="d-flex justify-content-between align-items-center">
                        <div>
                          <Card.Title className="text-muted small mb-1">
                            Available Tools
                          </Card.Title>
                          <Card.Text className="h3 fw-bold">350</Card.Text>
                        </div>
                        <i className="fas fa-check-circle text-success fa-2x opacity-50"></i>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={3}>
                    <Card className="h-100">
                      <Card.Body className="d-flex justify-content-between align-items-center">
                        <div>
                          <Card.Title className="text-muted small mb-1">
                            In Use
                          </Card.Title>
                          <Card.Text className="h3 fw-bold">120</Card.Text>
                        </div>
                        <i className="fas fa-handshake text-warning fa-2x opacity-50"></i>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={3}>
                    <Card className="h-100">
                      <Card.Body className="d-flex justify-content-between align-items-center">
                        <div>
                          <Card.Title className="text-muted small mb-1">
                            Maintenance
                          </Card.Title>
                          <Card.Text className="h3 fw-bold">30</Card.Text>
                        </div>
                        <i className="fas fa-wrench text-danger fa-2x opacity-50"></i>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>

                <Row className="g-3">
                  <Col lg={8}>
                    <Card>
                      <Card.Body>
                        <Card.Title className="d-flex align-items-center">
                          <i className="fas fa-list-alt text-primary me-2"></i>
                          Tool Status
                        </Card.Title>
                        <div className="table-responsive">
                          <Table striped bordered hover>
                            <thead className="bg-primary text-white">
                              <tr>
                                <th>Tool ID</th>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Assigned To</th>
                                <th>Last Checked</th>
                              </tr>
                            </thead>
                            <tbody>
                              {toolStatusData.map((tool) => (
                                <tr key={tool.id}>
                                  <td>{tool.id}</td>
                                  <td>{tool.name}</td>
                                  <td>
                                    <span
                                      className={`badge ${getStatusClass(
                                        tool.status
                                      )}`}
                                    >
                                      {tool.status}
                                    </span>
                                  </td>
                                  <td>{tool.assignedTo}</td>
                                  <td>{tool.lastCheck}</td>
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col lg={4}>
                    <Card>
                      <Card.Body>
                        <Card.Title className="d-flex align-items-center">
                          <i className="fas fa-history text-primary me-2"></i>
                          Recent Activity
                        </Card.Title>
                        <div className="table-responsive">
                          <Table striped bordered hover>
                            <thead className="bg-primary text-white">
                              <tr>
                                <th>Timestamp</th>
                                <th>Tool ID</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {recentActivityData.map((activity, index) => (
                                <tr key={index}>
                                  <td>{activity.timestamp}</td>
                                  <td>{activity.toolId}</td>
                                  <td>{activity.action}</td>
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </>
            )}

            {activeTab === "tools" && (
              <div className="tools-section">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h2 className="d-flex align-items-center">
                    <i className="fas fa-tools text-primary me-3"></i>
                    Tools Management
                  </h2>
                  <Button variant="primary">
                    <i className="fas fa-plus me-2"></i>
                    Add Tool
                  </Button>
                </div>

                <Card>
                  <Card.Body>
                    <Row className="mb-3 g-2">
                      <Col md={4}>
                        <Form.Control
                          type="text"
                          placeholder="Search tools..."
                        />
                      </Col>
                      <Col md={4}>
                        <Form.Select>
                          <option>All Categories</option>
                          <option>Power Tools</option>
                          <option>Hand Tools</option>
                        </Form.Select>
                      </Col>
                      <Col md={4}>
                        <Form.Select>
                          <option>All Status</option>
                          <option>Available</option>
                          <option>In Use</option>
                        </Form.Select>
                      </Col>
                    </Row>

                    <div className="table-responsive">
                      <Table striped bordered hover>
                        <thead className="bg-primary text-white">
                          <tr>
                            <th>Tool ID</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Condition</th>
                            <th>Location</th>
                            <th>Value</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {toolsData.map((tool) => (
                            <tr key={tool.id}>
                              <td>{tool.id}</td>
                              <td>{tool.name}</td>
                              <td>{tool.category}</td>
                              <td>
                                <span
                                  className={`badge ${
                                    tool.condition === "Good"
                                      ? "bg-success"
                                      : "bg-info"
                                  }`}
                                >
                                  {tool.condition}
                                </span>
                              </td>
                              <td>{tool.location}</td>
                              <td>{tool.value}</td>
                              <td>
                                <Button
                                  variant="primary"
                                  size="sm"
                                  className="me-2"
                                >
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
                    </div>
                  </Card.Body>
                </Card>
              </div>
            )}

            {activeTab === "users" && (
              <div className="users-section">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h2 className="d-flex align-items-center">
                    <i className="fas fa-users text-primary me-3"></i>
                    Users Management
                  </h2>
                  <Button variant="primary">
                    <i className="fas fa-user-plus me-2"></i>
                    Add User
                  </Button>
                </div>

                <Card>
                  <Card.Body>
                    <Row className="mb-3 g-2">
                      <Col md={4}>
                        <Form.Control
                          type="text"
                          placeholder="Search users..."
                        />
                      </Col>
                      <Col md={4}>
                        <Form.Select>
                          <option>All Departments</option>
                          <option>Production</option>
                          <option>Maintenance</option>
                        </Form.Select>
                      </Col>
                      <Col md={4}>
                        <Form.Select>
                          <option>All Roles</option>
                          <option>Manager</option>
                          <option>Technician</option>
                        </Form.Select>
                      </Col>
                    </Row>

                    <div className="table-responsive">
                      <Table striped bordered hover>
                        <thead className="bg-primary text-white">
                          <tr>
                            <th>User ID</th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Department</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {usersData.map((user) => (
                            <tr key={user.id}>
                              <td>{user.id}</td>
                              <td>{user.name}</td>
                              <td>{user.role}</td>
                              <td>{user.department}</td>
                              <td>{user.email}</td>
                              <td>
                                <span
                                  className={`badge ${
                                    user.status === "Active"
                                      ? "bg-success"
                                      : "bg-danger"
                                  }`}
                                >
                                  {user.status}
                                </span>
                              </td>
                              <td>
                                <Button
                                  variant="primary"
                                  size="sm"
                                  className="me-2"
                                >
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
                    </div>
                  </Card.Body>
                </Card>
              </div>
            )}

            {activeTab === "reports" && (
              <div className="reports-section">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h2 className="d-flex align-items-center">
                    <i className="fas fa-chart-bar text-primary me-3"></i>
                    Reports & Analytics
                  </h2>
                  <Button variant="primary">
                    <i className="fas fa-plus me-2"></i>
                    Generate Report
                  </Button>
                </div>

                <Row className="mb-4 g-3">
                  <Col md={4}>
                    <Card>
                      <Card.Body className="d-flex justify-content-between align-items-center">
                        <div>
                          <Card.Title className="text-muted small mb-1">
                            Total Reports
                          </Card.Title>
                          <Card.Text className="h3 fw-bold">24</Card.Text>
                        </div>
                        <i className="fas fa-file-alt text-primary fa-2x opacity-50"></i>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card>
                      <Card.Body className="d-flex justify-content-between align-items-center">
                        <div>
                          <Card.Title className="text-muted small mb-1">
                            This Month
                          </Card.Title>
                          <Card.Text className="h3 fw-bold">8</Card.Text>
                        </div>
                        <i className="fas fa-chart-line text-success fa-2x opacity-50"></i>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card>
                      <Card.Body className="d-flex justify-content-between align-items-center">
                        <div>
                          <Card.Title className="text-muted small mb-1">
                            Last Month
                          </Card.Title>
                          <Card.Text className="h3 fw-bold">16</Card.Text>
                        </div>
                        <i className="fas fa-chart-bar text-warning fa-2x opacity-50"></i>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>

                <Card>
                  <Card.Body>
                    <div className="table-responsive">
                      <Table striped bordered hover>
                        <thead className="bg-primary text-white">
                          <tr>
                            <th>Report Name</th>
                            <th>Type</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {reportsData.map((report, index) => (
                            <tr key={index}>
                              <td>{report.name}</td>
                              <td>{report.type}</td>
                              <td>{report.date}</td>
                              <td>
                                <span
                                  className={`badge ${
                                    report.status === "Generated"
                                      ? "bg-success"
                                      : "bg-warning"
                                  }`}
                                >
                                  {report.status}
                                </span>
                              </td>
                              <td>
                                <Button
                                  variant="primary"
                                  size="sm"
                                  className="me-2"
                                >
                                  <i className="fas fa-download"></i>
                                </Button>
                                <Button variant="secondary" size="sm">
                                  <i className="fas fa-eye"></i>
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            )}
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default ManagerDashboard;
