import { Menu } from "lucide-react";
import React from "react";

const NavItem = ({ href, children }) => {
  return (
    <li className="bg-red-400 px-5 py-2">
      <a href={href}>{children}</a>
    </li>
  );
};
const Navbar = () => {
  return (
    <nav className="flex flex-col items-center justify-around gap-6 py-2 lg:flex-row lg:gap-40">
      <div className="nav-left flex w-full justify-around gap-40 lg:w-min">
        <div className="logo">LOGO</div>
        <button className="hamburger">
          <Menu />
        </button>
      </div>
      <div className="nav-right w-full lg:w-min">
        <ul className="flex w-full flex-col gap-4 lg:flex-row">
          <NavItem href="home">Home</NavItem>
          <NavItem href="">About</NavItem>
          <NavItem href="">Sponsors</NavItem>
          <NavItem href="">Registration</NavItem>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
