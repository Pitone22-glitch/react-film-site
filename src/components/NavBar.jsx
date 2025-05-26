import { Link } from 'react-router-dom'

function NavBar() {
  return <nav className="navnar">
    <div className="navbar-brand">
      <Link to="/">Movie App</Link>
    </div>
    <div className="navbar-links">
      <Link to="/" clasName="nav-link">Home</Link>
       <Link to="/favorites" clasName="nav-link">Favorites</Link>
    </div>
  </nav>
}

export default NavBar