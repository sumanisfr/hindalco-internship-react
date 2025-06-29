import React, { useState, useEffect } from "react";
import { Chart } from "chart.js";
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Button,
  Modal,
  Form,
  Nav,
  Navbar,
} from "react-bootstrap";
import {
  FaTools,
  FaTachometerAlt,
  FaWrench,
  FaUsers,
  FaChartLine,
  FaCogs,
  FaSignOutAlt,
  FaSearch,
  FaPlus,
  FaUserPlus,
  FaEdit,
  FaCheckCircle,
  FaPeopleCarry,
  FaTrashAlt,
  FaBell,
  FaCircle,
  FaCalendarAlt,
  FaFileInvoice,
  FaExclamationTriangle,
} from "react-icons/fa";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [showAddToolModal, setShowAddToolModal] = useState(false);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Example data
  const [tools, setTools] = useState([
    {
      id: "T001",
      name: "Power Drill",
      status: "Available",
      location: "Warehouse A",
      assignedTo: "N/A",
      lastMaintenance: "2024-05-15",
    },
    {
      id: "T002",
      name: "Welding Machine",
      status: "In Use",
      location: "Workshop 3",
      assignedTo: "Ramesh Kumar",
      lastMaintenance: "2024-06-01",
    },
    {
      id: "T003",
      name: "Angle Grinder",
      status: "Under Repair",
      location: "Maintenance Dept.",
      assignedTo: "N/A",
      lastMaintenance: "2024-06-20",
    },
    {
      id: "T004",
      name: "Safety Helmet",
      status: "Available",
      location: "Safety Store",
      assignedTo: "N/A",
      lastMaintenance: "2024-04-10",
    },
    {
      id: "T005",
      name: "Torque Wrench",
      status: "In Use",
      location: "Assembly Line",
      assignedTo: "Priya Sharma",
      lastMaintenance: "2024-05-25",
    },
    {
      id: "T006",
      name: "Forklift",
      status: "Available",
      location: "Yard 1",
      assignedTo: "N/A",
      lastMaintenance: "2024-06-18",
    },
    {
      id: "T007",
      name: "Measuring Tape",
      status: "Available",
      location: "Tool Crib",
      assignedTo: "N/A",
      lastMaintenance: "2024-03-01",
    },
    {
      id: "T008",
      name: "Leveling Device",
      status: "In Use",
      location: "Site Office",
      assignedTo: "Amit Singh",
      lastMaintenance: "2024-06-10",
    },
    {
      id: "T009",
      name: "Scaffolding Set",
      status: "Available",
      location: "Storage Area",
      assignedTo: "N/A",
      lastMaintenance: "2024-05-01",
    },
    {
      id: "T010",
      name: "Impact Driver",
      status: "In Use",
      location: "Electric Shop",
      assignedTo: "Sunita Devi",
      lastMaintenance: "2024-06-22",
    },
    {
      id: "T011",
      name: "Hydraulic Jack",
      status: "Under Repair",
      location: "Maintenance Dept.",
      assignedTo: "N/A",
      lastMaintenance: "2024-06-25",
    },
    {
      id: "T012",
      name: "Pressure Washer",
      status: "Available",
      location: "Cleaning Section",
      assignedTo: "N/A",
      lastMaintenance: "2024-04-20",
    },
    {
      id: "T013",
      name: "Chain Hoist",
      status: "In Use",
      location: "Heavy Duty Bay",
      assignedTo: "Deepak Kumar",
      lastMaintenance: "2024-06-12",
    },
    {
      id: "T014",
      name: "Safety Goggles",
      status: "Available",
      location: "Safety Store",
      assignedTo: "N/A",
      lastMaintenance: "2024-03-15",
    },
    {
      id: "T015",
      name: "Digital Multimeter",
      status: "In Use",
      location: "Electronics Lab",
      assignedTo: "Preeti Singh",
      lastMaintenance: "2024-06-05",
    },
  ]);

  const [users, setUsers] = useState([
    {
      id: "U001",
      name: "Rajesh Kumar",
      email: "rajesh.kumar@hindalco.com",
      role: "Admin",
      department: "IT",
      toolsAssigned: 5,
    },
    {
      id: "U002",
      name: "Priya Sharma",
      email: "priya.sharma@hindalco.com",
      role: "User",
      department: "Production",
      toolsAssigned: 3,
    },
    {
      id: "U003",
      name: "Amit Singh",
      email: "amit.singh@hindalco.com",
      role: "User",
      department: "Maintenance",
      toolsAssigned: 7,
    },
    {
      id: "U004",
      name: "Sunita Devi",
      email: "sunita.devi@hindalco.com",
      role: "User",
      department: "Electrical",
      toolsAssigned: 2,
    },
    {
      id: "U005",
      name: "Deepak Kumar",
      email: "deepak.kumar@hindalco.com",
      role: "User",
      department: "Logistics",
      toolsAssigned: 4,
    },
    {
      id: "U006",
      name: "Neha Gupta",
      email: "neha.gupta@hindalco.com",
      role: "User",
      department: "Safety",
      toolsAssigned: 1,
    },
    {
      id: "U007",
      name: "Vikram Reddy",
      email: "vikram.reddy@hindalco.com",
      role: "Manager",
      department: "Operations",
      toolsAssigned: 0,
    },
    {
      id: "U008",
      name: "Sonia Prasad",
      email: "sonia.prasad@hindalco.com",
      role: "User",
      department: "Quality Control",
      toolsAssigned: 2,
    },
  ]);

  // Filter tools based on search term
  const filteredTools = tools.filter((tool) =>
    Object.values(tool).some((val) =>
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Filter users based on search term
  const filteredUsers = users.filter((user) =>
    Object.values(user).some((val) =>
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Pagination logic for tools
  const paginatedTools = filteredTools.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalToolPages = Math.ceil(filteredTools.length / itemsPerPage);

  // Pagination logic for users
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalUserPages = Math.ceil(filteredUsers.length / itemsPerPage);

  const nextPage = () => {
    if (
      currentPage < (activeTab === "tools" ? totalToolPages : totalUserPages)
    ) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  // Initialize charts
  useEffect(() => {
    if (activeTab === "overview") {
      renderCharts();
    }
  }, [activeTab]);

  const renderCharts = () => {
    // Tool Status Chart
    const toolStatusCtx = document.getElementById("toolStatusChart");
    if (toolStatusCtx) {
      new Chart(toolStatusCtx, {
        type: "doughnut",
        data: {
          labels: ["Available", "In Use", "Under Repair"],
          datasets: [
            {
              data: [
                tools.filter((t) => t.status === "Available").length,
                tools.filter((t) => t.status === "In Use").length,
                tools.filter((t) => t.status === "Under Repair").length,
              ],
              backgroundColor: ["#10B981", "#3B82F6", "#EF4444"],
              hoverOffset: 4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: "Tool Status Overview",
              font: {
                size: 16,
                weight: "bold",
              },
              color: "#333",
            },
          },
        },
      });
    }

    // Tools Assigned by Department Chart
    const departmentData = users.reduce((acc, user) => {
      acc[user.department] = (acc[user.department] || 0) + user.toolsAssigned;
      return acc;
    }, {});

    const departmentLabels = Object.keys(departmentData);
    const departmentToolsCount = Object.values(departmentData);

    const toolsByDeptCtx = document.getElementById("toolsByDeptChart");
    if (toolsByDeptCtx) {
      new Chart(toolsByDeptCtx, {
        type: "bar",
        data: {
          labels: departmentLabels,
          datasets: [
            {
              label: "Tools Assigned",
              data: departmentToolsCount,
              backgroundColor: [
                "#6B46C1",
                "#1e3a8a",
                "#F59E0B",
                "#06B6D4",
                "#8B5CF6",
              ],
              borderColor: [
                "#6B46C1",
                "#1e3a8a",
                "#F59E0B",
                "#06B6D4",
                "#8B5CF6",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: "Tools Assigned by Department",
              font: {
                size: 16,
                weight: "bold",
              },
              color: "#333",
            },
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Number of Tools",
                color: "#555",
              },
            },
            x: {
              title: {
                display: true,
                text: "Department",
                color: "#555",
              },
            },
          },
        },
      });
    }
  };

  const handleAddTool = (e) => {
    e.preventDefault();
    alert("Tool Added! (Functionality to be implemented)");
    setShowAddToolModal(false);
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    alert("User Added! (Functionality to be implemented)");
    setShowAddUserModal(false);
  };

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <div className="bg-primary text-white" style={{ width: "250px" }}>
        <div className="d-flex justify-content-center mb-4 pt-4">
          <img
            src="https://cdn.freelogovectors.net/wp-content/uploads/2020/09/hindalco_logo.png"
            alt="Hindalco Icon"
            className="img-fluid border border-warning"
            style={{ height: "100px", width: "120px" }}
          />
        </div>

        <Nav className="flex-column px-3">
          <Nav.Link
            className={`text-white mb-2 ${
              activeTab === "overview" ? "bg-dark" : ""
            }`}
            onClick={() => setActiveTab("overview")}
          >
            <FaTachometerAlt className="me-3 text-warning" />
            Dashboard Overview
          </Nav.Link>
          <Nav.Link
            className={`text-white mb-2 ${
              activeTab === "tools" ? "bg-dark" : ""
            }`}
            onClick={() => setActiveTab("tools")}
          >
            <FaWrench className="me-3 text-warning" />
            Tool Inventory
          </Nav.Link>
          <Nav.Link
            className={`text-white mb-2 ${
              activeTab === "users" ? "bg-dark" : ""
            }`}
            onClick={() => setActiveTab("users")}
          >
            <FaUsers className="me-3 text-warning" />
            Manage Users
          </Nav.Link>
          <Nav.Link
            className={`text-white mb-2 ${
              activeTab === "reports" ? "bg-dark" : ""
            }`}
            onClick={() => setActiveTab("reports")}
          >
            <FaChartLine className="me-3 text-warning" />
            Reports & Analytics
          </Nav.Link>
          <Nav.Link className="text-white mb-2">
            <FaCogs className="me-3 text-warning" />
            Settings
          </Nav.Link>
        </Nav>

        <div className="mt-auto pt-4 border-top border-light px-3 pb-4">
          <Nav.Link className="text-white bg-danger rounded" href="/">
            <FaSignOutAlt className="me-3 text-white" />
            Log Out
          </Nav.Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 bg-light" style={{ overflowY: "auto" }}>
        {/* Header */}
        <Navbar bg="white" expand="lg" className="shadow-sm py-3 px-4">
          <Container fluid>
            <Navbar.Brand className="d-flex align-items-center">
              <FaTools className="text-primary me-3 fs-4" />
              <span className="fw-bold text-dark">
                Tool Tracking Admin Dashboard
              </span>
            </Navbar.Brand>
            <div className="d-flex align-items-center">
              <span className="me-3 d-none d-sm-block">
                Welcome, Admin | Hirakud
              </span>
              <img
                src="https://cdn.freelogovectors.net/wp-content/uploads/2020/09/hindalco_logo.png"
                alt="Hindalco Logo"
                className="rounded-circle shadow-sm"
                style={{ width: "40px", height: "40px" }}
                title="Hindalco Industries Ltd."
              />
            </div>
          </Container>
        </Navbar>

        {/* Dashboard Content */}
        <Container fluid className="py-4">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="mb-4">
              <h2 className="mb-4 d-flex align-items-center">
                <FaTachometerAlt className="me-3 text-primary" />
                Dashboard Overview
              </h2>

              <Row className="mb-4 g-4">
                <Col md={3}>
                  <Card className="h-100">
                    <Card.Body className="d-flex justify-content-between align-items-center">
                      <div>
                        <Card.Subtitle className="text-muted mb-2">
                          Total Tools
                        </Card.Subtitle>
                        <Card.Title className="text-primary fs-3">
                          {tools.length}
                        </Card.Title>
                      </div>
                      <FaTools className="text-primary fs-3" />
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card className="h-100">
                    <Card.Body className="d-flex justify-content-between align-items-center">
                      <div>
                        <Card.Subtitle className="text-muted mb-2">
                          Tools Available
                        </Card.Subtitle>
                        <Card.Title className="text-success fs-3">
                          {tools.filter((t) => t.status === "Available").length}
                        </Card.Title>
                      </div>
                      <FaCheckCircle className="text-success fs-3" />
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card className="h-100">
                    <Card.Body className="d-flex justify-content-between align-items-center">
                      <div>
                        <Card.Subtitle className="text-muted mb-2">
                          Tools In Use
                        </Card.Subtitle>
                        <Card.Title className="text-info fs-3">
                          {tools.filter((t) => t.status === "In Use").length}
                        </Card.Title>
                      </div>
                      <FaPeopleCarry className="text-info fs-3" />
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card className="h-100">
                    <Card.Body className="d-flex justify-content-between align-items-center">
                      <div>
                        <Card.Subtitle className="text-muted mb-2">
                          Tools Under Repair
                        </Card.Subtitle>
                        <Card.Title className="text-danger fs-3">
                          {
                            tools.filter((t) => t.status === "Under Repair")
                              .length
                          }
                        </Card.Title>
                      </div>
                      <FaTools className="text-danger fs-3" />
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              <Row className="mb-4 g-4">
                <Col md={6}>
                  <Card className="h-100">
                    <Card.Body>
                      <div style={{ height: "300px" }}>
                        <canvas id="toolStatusChart"></canvas>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="h-100">
                    <Card.Body>
                      <div style={{ height: "300px" }}>
                        <canvas id="toolsByDeptChart"></canvas>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              <Card className="mb-4">
                <Card.Body>
                  <Card.Title className="d-flex align-items-center">
                    <FaBell className="me-3 text-warning" />
                    Recent Activity & Alerts
                  </Card.Title>
                  <ul className="list-unstyled">
                    <li className="mb-3 d-flex">
                      <FaCircle className="text-success mt-1 me-3 fs-6" />
                      <div>
                        <span className="fw-bold">T001 (Power Drill)</span>{" "}
                        returned by xyz. (2025-06-27 10:30 AM)
                      </div>
                    </li>
                    <li className="mb-3 d-flex">
                      <FaCircle className="text-primary mt-1 me-3 fs-6" />
                      <div>
                        <span className="fw-bold">T005 (Torque Wrench)</span>{" "}
                        assigned to abc. (2025-06-27 09:15 AM)
                      </div>
                    </li>
                    <li className="mb-3 d-flex">
                      <FaCircle className="text-danger mt-1 me-3 fs-6" />
                      <div>
                        <span className="fw-bold">T003 (Angle Grinder)</span>{" "}
                        moved to 'Under Repair'. (2025-06-26 04:00 PM)
                      </div>
                    </li>
                    <li className="d-flex">
                      <FaCircle className="text-warning mt-1 me-3 fs-6" />
                      <div>
                        Low stock alert for{" "}
                        <span className="fw-bold">Safety Gloves</span>. Order
                        more.
                      </div>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </div>
          )}

          {/* Tools Tab */}
          {activeTab === "tools" && (
            <div className="mb-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="d-flex align-items-center">
                  <FaWrench className="me-3 text-primary" />
                  Tool Inventory
                </h2>
                <Button
                  variant="primary"
                  onClick={() => setShowAddToolModal(true)}
                >
                  <FaPlus className="me-2" />
                  Add New Tool
                </Button>
              </div>

              <div className="mb-4">
                <div className="input-group">
                  <span className="input-group-text">
                    <FaSearch />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search tools..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <Card className="mb-4">
                <div className="table-responsive">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Tool ID</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Location</th>
                        <th>Assigned To</th>
                        <th>Last Maint.</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedTools.length > 0 ? (
                        paginatedTools.map((tool) => (
                          <tr key={tool.id}>
                            <td>{tool.id}</td>
                            <td>{tool.name}</td>
                            <td>
                              <span
                                className={`badge ${
                                  tool.status === "Available"
                                    ? "bg-success"
                                    : tool.status === "In Use"
                                    ? "bg-primary"
                                    : "bg-danger"
                                }`}
                              >
                                {tool.status}
                              </span>
                            </td>
                            <td>{tool.location}</td>
                            <td>{tool.assignedTo}</td>
                            <td>{tool.lastMaintenance}</td>
                            <td>
                              <Button
                                variant="link"
                                size="sm"
                                className="text-primary"
                              >
                                <FaEdit />
                              </Button>
                              <Button
                                variant="link"
                                size="sm"
                                className="text-danger"
                              >
                                <FaTrashAlt />
                              </Button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td
                            colSpan="7"
                            className="text-center text-muted py-4"
                          >
                            No tools found.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </div>
              </Card>

              <div className="d-flex justify-content-between align-items-center">
                <div className="d-none d-sm-block">
                  Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                  {Math.min(currentPage * itemsPerPage, filteredTools.length)}{" "}
                  of {filteredTools.length} results
                </div>
                <div className="d-flex gap-2">
                  <Button
                    variant="outline-secondary"
                    onClick={prevPage}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  <Button
                    variant="outline-secondary"
                    onClick={nextPage}
                    disabled={currentPage === totalToolPages}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Users Tab */}
          {activeTab === "users" && (
            <div className="mb-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="d-flex align-items-center">
                  <FaUsers className="me-3 text-primary" />
                  Manage Users
                </h2>
                <Button
                  variant="primary"
                  onClick={() => setShowAddUserModal(true)}
                >
                  <FaUserPlus className="me-2" />
                  Add New User
                </Button>
              </div>

              <div className="mb-4">
                <div className="input-group">
                  <span className="input-group-text">
                    <FaSearch />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <Card className="mb-4">
                <div className="table-responsive">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Department</th>
                        <th>Tools Assigned</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedUsers.length > 0 ? (
                        paginatedUsers.map((user) => (
                          <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                              <span
                                className={`badge ${
                                  user.role === "Admin"
                                    ? "bg-purple"
                                    : user.role === "User"
                                    ? "bg-secondary"
                                    : "bg-warning text-dark"
                                }`}
                              >
                                {user.role}
                              </span>
                            </td>
                            <td>{user.department}</td>
                            <td>{user.toolsAssigned}</td>
                            <td>
                              <Button
                                variant="link"
                                size="sm"
                                className="text-primary"
                              >
                                <FaEdit />
                              </Button>
                              <Button
                                variant="link"
                                size="sm"
                                className="text-danger"
                              >
                                <FaTrashAlt />
                              </Button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td
                            colSpan="7"
                            className="text-center text-muted py-4"
                          >
                            No users found.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </div>
              </Card>

              <div className="d-flex justify-content-between align-items-center">
                <div className="d-none d-sm-block">
                  Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                  {Math.min(currentPage * itemsPerPage, filteredUsers.length)}{" "}
                  of {filteredUsers.length} results
                </div>
                <div className="d-flex gap-2">
                  <Button
                    variant="outline-secondary"
                    onClick={prevPage}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  <Button
                    variant="outline-secondary"
                    onClick={nextPage}
                    disabled={currentPage === totalUserPages}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Reports Tab */}
          {activeTab === "reports" && (
            <div className="mb-4">
              <h2 className="mb-4 d-flex align-items-center">
                <FaChartLine className="me-3 text-primary" />
                Reports & Analytics
              </h2>

              <Row className="g-4 mb-4">
                <Col md={4}>
                  <Card className="h-100">
                    <Card.Body>
                      <Card.Title className="d-flex align-items-center">
                        <FaCalendarAlt className="me-3 text-primary" />
                        Tool Usage Trends
                      </Card.Title>
                      <Card.Text className="text-muted">
                        Visualize tool usage over time to identify peak periods
                        and popular tools.
                      </Card.Text>
                      <Button variant="primary">View Report</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="h-100">
                    <Card.Body>
                      <Card.Title className="d-flex align-items-center">
                        <FaFileInvoice className="me-3 text-success" />
                        Maintenance History Report
                      </Card.Title>
                      <Card.Text className="text-muted">
                        Access detailed records of all tool maintenance
                        activities.
                      </Card.Text>
                      <Button variant="success">View Report</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="h-100">
                    <Card.Body>
                      <Card.Title className="d-flex align-items-center">
                        <FaExclamationTriangle className="me-3 text-danger" />
                        Defective Tools Log
                      </Card.Title>
                      <Card.Text className="text-muted">
                        Track and manage tools marked as defective or
                        irreparable.
                      </Card.Text>
                      <Button variant="danger">View Report</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          )}
        </Container>
      </div>

      {/* Add Tool Modal */}
      <Modal show={showAddToolModal} onHide={() => setShowAddToolModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Tool</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddTool}>
            <Form.Group className="mb-3">
              <Form.Label>Tool Name</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tool ID</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select>
                <option value="Available">Available</option>
                <option value="In Use">In Use</option>
                <option value="Under Repair">Under Repair</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <div className="d-flex justify-content-end gap-2">
              <Button
                variant="secondary"
                onClick={() => setShowAddToolModal(false)}
              >
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                Add Tool
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Add User Modal */}
      <Modal show={showAddUserModal} onHide={() => setShowAddUserModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddUser}>
            <Form.Group className="mb-3">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="user@hindalco.com"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Role</Form.Label>
              <Form.Select>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
                <option value="Manager">Manager</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Department</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <div className="d-flex justify-content-end gap-2">
              <Button
                variant="secondary"
                onClick={() => setShowAddUserModal(false)}
              >
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                Add User
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AdminDashboard;
