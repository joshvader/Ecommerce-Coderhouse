import { useState } from "react";
import LogoSneakes from "@/assets/images/logo.svg";
import AvatarImage from "@/assets/images/image-avatar.png";
import MenuIcon from "../icons/MenuIcon";
import CartWidget from "../icons/CartWidget";
import CloseIcon from "../icons/CloseIcon";
import { Link, NavLink } from "react-router-dom";






const Navbar = () => {

  const [navClass, setNavClass] = useState("hidden font-bold md:static md:mr-auto md:flex md:flex-row md:gap-4 md:p-0");


  const handleOpenMenu = () => {
    setNavClass("absolute top-0 left-0 flex h-full w-4/5 flex-col gap-y-[21px] bg-gray-200 p-8 font-bold md:static md:mr-auto md:flex md:flex-row md:gap-4 md:p-0")
  };
  const handleCloseMenu = () => {
    setNavClass(
      "hidden font-bold md:static md:mr-auto md:flex md:flex-row md:gap-4 md:p-0"
    )
  };
  return (
    <>
      <header className=" container bg-slate-100 mx-auto flex items-center gap-8 px-4 py-8 ">
        <button className=" md:hidden" onClick={handleOpenMenu}>
          <MenuIcon />
        </button>
        <Link to={"/"}>
        <img
          src={LogoSneakes}
          alt="Logo sneakers"
          className="mr-auto mb-1 md:mr-0 "
        />
        </Link>
        <nav
          className={navClass}
        >
          <button className="mb-12 md:hidden" onClick={handleCloseMenu}>
            <CloseIcon />
          </button>
          <NavLink to="/">Collections</NavLink>
          <NavLink to="/productos/men">Men</NavLink>
          <NavLink to="/productos/women">Women</NavLink>
          <NavLink to="/">About</NavLink>
          <NavLink to="/">Contact</NavLink>
        </nav>
        <div className="flex gap-4">
          <button>
          {/* Componente CartWidget */}
            <CartWidget />
          </button>
          <img src={AvatarImage} alt="" className="w-10" />
        </div>
      </header>
      
    </>
  )
}

export default Navbar