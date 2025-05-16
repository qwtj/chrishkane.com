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
          <NavLink className="navlink" to="/jobs" >Job History</NavLink>
          <span> | </span>
          <NavLink className="navlink" to="/certifications" >Prior Certifications</NavLink>
          <span> | </span>
          <a href={Resume} target="_blank" rel="noopener noreferrer">Resume</a>
          <a href="/inventoryApp/index.html" target="_blank" rel="noopener noreferrer">Home Inventory</a>
          <a href="/interactive-ebook/index.html" target="_blank" rel="noopener noreferrer">Gemini E-Book Writer</a>
        </nav>
        <main>
          <Outlet /> {/* Child routes will render here */}
        </main>
        <footer>
          <p>Contact: <a href="https://calendly.com/chrishkane" target="_blank" rel="noopener noreferrer">Calendly: Schedule a Call</a></p>
          <p>&copy; 2023 Christopher Kane</p>
        </footer>
      </>
    );
  };
  
export default Layout;