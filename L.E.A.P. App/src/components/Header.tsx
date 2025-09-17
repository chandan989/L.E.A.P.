import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/" className="text-2xl font-bold">
          L.E.A.P.
        </Link>
        <div>
          <Link href="/about" className="p-2">
            About
          </Link>
          <Link href="/contact" className="p-2">
            Contact
          </Link>
          <Link href="/dashboard" className="p-2">
            Dashboard
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
