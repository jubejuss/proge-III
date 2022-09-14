import Link from 'next/link';
export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <span className="logo">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
