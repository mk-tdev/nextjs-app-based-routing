import Link from "next/link";

const MainHeader = () => {
  return (
    <header className="">
      <nav className="p-3 bg-gray-800 text-white shadow-lg ">
        <ul className="flex gap-5 items-center md:flex-row md:justify-between">
          <li>
            <Link href="/news">News</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
