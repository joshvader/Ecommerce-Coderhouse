import { useContext, useState } from "react";

import LogoSneakes from "@/assets/images/logo.svg";
import AvatarImage from "@/assets/images/image-avatar.png";

import MenuIcon from "../icons/MenuIcon";
import CartWidget from "../icons/CartWidget";
import CloseIcon from "../icons/CloseIcon";
import { Link, NavLink } from "react-router-dom";
import CartDetail from "./CartDetail";
import { useCartDetails } from "../../context/useCartDetails";

const Navbar = () => {

  const { totalQuantityProduct } = useContext(useCartDetails)
  
  const [navClass, setNavClass] = useState("hidden font-bold md:static md:mr-auto md:flex md:flex-row md:gap-4 md:p-0");
  const [isOpenDetailsCart, setDetailsCart] = useState(false)

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
          <NavLink to="/" className="border-b-2 border-orange-500 border-opacity-0 hover:border-opacity-100 hover:text-orange-500 duration-200 cursor-pointer active">Collections</NavLink>
          <NavLink to="/productos/men" className="border-b-2 border-orange-500 border-opacity-0 hover:border-opacity-100 hover:text-orange-500 duration-200 cursor-pointer active">Men</NavLink>
          <NavLink to="/productos/women" className="border-b-2 border-orange-500 border-opacity-0 hover:border-opacity-100 hover:text-orange-500 duration-200 cursor-pointer active">Women</NavLink>
          <NavLink to="/" className="border-b-2 border-orange-500 border-opacity-0 hover:border-opacity-100 hover:text-orange-500 duration-200 cursor-pointer active">About</NavLink>
          <NavLink to="/" className="border-b-2 border-orange-500 border-opacity-0 hover:border-opacity-100 hover:text-orange-500 duration-200 cursor-pointer active">Contact</NavLink>
        </nav>
        <div className="flex gap-4">
          <button  className="relative" onClick={() => setDetailsCart(!isOpenDetailsCart)}>
            {/* Componente CartWidget */}
            <CartWidget />
            <span className="absolute top-0 right-0 translate-x-1 bg-orange-400 px-2 text-xs rounded-full font-bold text-white">
              {totalQuantityProduct}
            </span>
          </button>
          <img src={AvatarImage} alt="" className="w-10" />
          {
            isOpenDetailsCart && <CartDetail/>
          }
        
        </div>
      </header>

    </>
  )
}

export default Navbar