import { Outlet, NavLink } from "react-router-dom";
import Resume from "assets/resume.pdf";

const Layout = () => {
    return (
      <>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <span> | </span>
          <NavLink className="navlink" to="/about" >About Me</NavLink>
          <span> | </span>
          <NavLink className="navlink" to="/roles" >Job Roles</NavLink>
          <span> | </span>
          <NavLink className="navlink" to="/certifications" >Prior Certifications</NavLink>
          <span> | </span>
          <a href={Resume} target="_blank" rel="noopener noreferrer">Resume</a>
        </nav>
        <main>
          <Outlet /> {/* Child routes will render here */}
        </main>
        <footer>
          <p>&copy; 2023 Christopher Kane</p>
        </footer>
      </>
    );
  };
  
export default Layout;