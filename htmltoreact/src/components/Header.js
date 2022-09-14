import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <span class="logo">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
