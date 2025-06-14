import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
    return (
      <>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink className="navlink" to="/about" >About Me</NavLink>
          <NavLink className="navlink" to="/certifications" >Prior Certifications</NavLink>
          <a href="https://github.com/qwtj" target="_blank" rel="noopener noreferrer">Github</a>
          <a href="/inventoryApp/index.html" target="_blank" rel="noopener noreferrer">Home Inventory</a>
          <a href="/interactive-ebook/index.html" target="_blank" rel="noopener noreferrer">Gemini E-Book Writer</a>
          <a href="https://calendly.com/chrishkane" target="_blank" rel="noopener noreferrer">Schedule a Call</a>
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