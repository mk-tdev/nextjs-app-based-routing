import NavLink from "./nav-link";

const MainHeader = () => {
  return (
    <header className="">
      <nav className="p-3 bg-gray-800 text-white shadow-lg ">
        <ul className="flex gap-5 items-center md:flex-row justify-start">
          <NavLink href="news" routeName="News" />
          <NavLink href="archive" routeName="Archive" />
          <NavLink href="contact" routeName="Contact" />
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
