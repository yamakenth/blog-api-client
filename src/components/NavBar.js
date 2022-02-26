function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">Blog</a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">
              <i className='bi bi-person-fill'>&#9;Signup</i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <i className='bi bi-box-arrow-in-left'>&#9;Login</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;