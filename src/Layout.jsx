import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
    return (
      <div>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <span> | </span>
          <NavLink to="/resume">Resume</NavLink>
        </nav>
        <hr />
        <main>
          <Outlet /> {/* Child routes will render here */}
        </main>
        <footer>
          <p>&copy; 2023 Christopher Kane</p>
        </footer>
      </div>
    );
  };
  
export default Layout;