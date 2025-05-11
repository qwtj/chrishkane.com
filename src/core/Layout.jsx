import { Outlet, NavLink } from "react-router-dom";
import Resume from "assets/resume.pdf";
import "./Layout.css"; // Import your CSS file for styling

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
        <hr />
        <main>
          <Outlet /> {/* Child routes will render here */}
        </main>
        <footer>
          <p>&copy; 2023 Chrsistosfsfpher Kane</p>
        </footer>
      </>
    );
  };
  
export default Layout;