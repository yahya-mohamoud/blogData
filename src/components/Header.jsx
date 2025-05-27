import {NavLink} from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="hero">
        <h1>My Blog</h1>
      <nav className="navLinks">
        <NavLink to={'/home'}  className={({ isActive }) => isActive ? 'active-nav-link' : 'nav-link'}>Home</NavLink>
        <NavLink to={'/posts'}  className={({ isActive }) => isActive ? 'active-nav-link' : 'nav-link'}>Main content</NavLink>
      </nav>
      </div>
    </header>
  )
}

export default Header