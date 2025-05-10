import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
      <div>
        {/* Common UI elements like a Navbar could go here */}
        <nav>
          {/* Example navigation */}
          <a href="/">Home</a> | <a href="/resume">Resume</a>
        </nav>
        <hr />
        <main>
          <Outlet /> {/* Child routes will render here */}
        </main>
        <footer>
          {/* Common footer content */}
          <p>&copy; 2023 Your Name</p>
        </footer>
      </div>
    );
  };
  
export default Layout;