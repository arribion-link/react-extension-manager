import { Link } from "react-router-dom"
const NavBar = () => {
  return (
    <header>
        <div className="logo">
            Extensions
        </div>
          <nav>
              <Link to="/extensions">Extensions</Link>
          </nav>
        <div className="light-mode-container">
            
        </div>
    </header>
  )
}

export default NavBar
