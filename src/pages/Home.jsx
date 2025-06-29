import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";


const Home = () => {
  const handleLogin = () => {
    // Redirect to login page
    window.location.href = './Login'
  };

  return (
    <div>
      <Header />
      <main>
        <section className="relative h-screen bg-gray-900 flex items-center justify-center">
          {/* Background Image */}
          <img
            src="/images/bg_img.png"
            alt="Modern Industry"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
            }}
          />

          {/* Text + Login Box */}
          <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left: Welcome Text */}
            <div className="text-white text-center lg:text-left max-w-xl">
              <h1 className="text-4xl font-bold mb-4">Welcome to Our Industry Solutions</h1>
              <p className="text-xl">Innovative technology for modern business</p>
            </div>

            {/* Right: Login Box */}
            <div className="w-full lg:w-96 h-[73vh] p-6 sm:p-8 lg:p-10 bg-white bg-opacity-95 rounded-xl shadow-2xl flex flex-col">
              <h2 className="text-gray-800 text-2xl sm:text-3xl mb-2 font-semibold flex items-center">
                <i className="fas fa-user-shield mr-3 text-purple-700"></i>Welcome
              </h2>
              <p className="text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base">
                Sign in to your account to continue
              </p>

              <form onSubmit={handleLogin}>
                <div className="mb-4 sm:mb-5">
                  <label
                    htmlFor="email"
                    className="block text-gray-800 font-semibold mb-2 text-sm flex items-center"
                  >
                    <i className="fas fa-envelope mr-2 text-purple-700"></i>Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="admin@hindalco.com"
                    required
                    className="w-full py-2 sm:py-3 px-3 sm:px-4 border-2 border-gray-300 rounded-md text-sm transition-colors duration-300 focus:outline-none focus:border-green-500 placeholder-gray-400"
                  />
                </div>

                <div className="mb-4 sm:mb-5">
                  <label
                    htmlFor="password"
                    className="block text-gray-800 font-semibold mb-2 text-sm flex items-center"
                  >
                    <i className="fas fa-lock mr-2 text-purple-700"></i>Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    required
                    className="w-full py-2 sm:py-3 px-3 sm:px-4 border-2 border-gray-300 rounded-md text-sm transition-colors duration-300 focus:outline-none focus:border-green-500 placeholder-gray-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2 sm:py-3 bg-purple-700 text-white border-none rounded-md text-sm sm:text-base font-semibold cursor-pointer transition-colors duration-300 hover:bg-purple-800 mb-4 sm:mb-5 flex items-center justify-center"
                >
                  <i className="fas fa-sign-in-alt mr-2"></i>Sign In
                </button>

                <div className="text-left text-gray-600 text-xs sm:text-sm">
                  Don't have an account?
                  <a
                    href="/register"
                    className="text-purple-700 no-underline hover:underline ml-1"
                  >
                    <i className="fas fa-user-plus mr-1"></i>Register here
                  </a>
                </div>
              </form>
            </div>
          </div>
        </section>
    
       {/* Home Page Content */}
      <div className="min-vh-100 bg-light">
        {/* Hero Section */}
        <section className="bg-primary text-white py-5">
          <Container>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h1 className="display-4 fw-bold mb-4">
                  Professional Tools Tracking System
                </h1>
                <p className="lead mb-4">
                  Efficiently manage, track, and monitor your tools inventory with our advanced tracking application.
                </p>
                <div className="d-flex gap-3">
                  <Link to="/register" className="btn btn-warning btn-lg">
                    Get Started
                  </Link>
                  <Link to="/about" className="btn btn-outline-light btn-lg">
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 text-center">
                <i className="fas fa-tools display-1 opacity-75"></i>
              </div>
            </div>
          </Container>
        </section>

        {/* About Section */}
        <section id="about" className="py-5">
          <Container>
            <div className="row">
              <div className="col-lg-12 text-center mb-5">
                <h2 className="fw-bold">About Our Platform</h2>
                <p className="lead text-muted">
                  Streamline your tool management with cutting-edge technology
                </p>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body text-center">
                    <i className="fas fa-search-location display-4 text-primary mb-3"></i>
                    <h5>Real-time Tracking</h5>
                    <p className="text-muted">Track tool locations and usage in real-time with GPS integration.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body text-center">
                    <i className="fas fa-chart-line display-4 text-success mb-3"></i>
                    <h5>Analytics Dashboard</h5>
                    <p className="text-muted">Get insights into tool usage patterns and maintenance schedules.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body text-center">
                    <i className="fas fa-shield-alt display-4 text-warning mb-3"></i>
                    <h5>Secure Management</h5>
                    <p className="text-muted">Secure access controls and audit trails for complete accountability.</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Services Section */}
        <section id="services" className="py-5 bg-white">
          <Container>
            <div className="row">
              <div className="col-lg-12 text-center mb-5">
                <h2 className="fw-bold">Our Services</h2>
                <p className="lead text-muted">Comprehensive tool tracking solutions</p>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <i className="fas fa-barcode display-6 text-primary"></i>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5>Barcode Integration</h5>
                    <p className="text-muted">Scan and track tools using barcode technology for quick identification.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <i className="fas fa-calendar-check display-6 text-success"></i>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5>Maintenance Scheduling</h5>
                    <p className="text-muted">Automated maintenance reminders and scheduling system.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <i className="fas fa-users display-6 text-warning"></i>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5>Multi-user Access</h5>
                    <p className="text-muted">Role-based access for teams and organizations.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <i className="fas fa-file-export display-6 text-info"></i>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5>Reports & Analytics</h5>
                    <p className="text-muted">Generate detailed reports and export data for analysis.</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-dark text-white">
          <Container>
          

      <Footer />
             </Container>
        </section>
      </div>
  </main>
    </div>
  );
};

export default Home;