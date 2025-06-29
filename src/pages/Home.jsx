import Header from '../components/Header';
import Footer from '../components/Footer';

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
      </main>
      <Footer />
    </div>
  );
};

export default Home;