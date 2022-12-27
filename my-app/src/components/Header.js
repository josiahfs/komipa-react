import React from "react";
import { Link } from "react-router-dom";
import BrandIcon from "../elements/IconText";
export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location?.pathname === path ? " active" : "";
  };

  return (
    <header className="border-b-2 bg-orange w-full h-[102px] flex items-center mb-20 rounded-b-[20px]">
      <div className="w-full">
        <nav className="flex justify-between px-[46px]">
          <BrandIcon />
          <div className="flex items-center">
            <ul className="flex flex-row text-white font-inter">
              <li className="pl-4">
                <Link
                  link={getNavLinkClass("/")}
                  href="/"
                  className="font-[48px]"
                >
                  Beranda
                </Link>
              </li>
              <li className="pl-8">
                <Link
                  link={getNavLinkClass("/tentang-kami")}
                  href="/tentang-kami"
                  className="font-[48px]"
                >
                  Tentang Kami
                </Link>
              </li>
              <li className="pl-8">
                <Link type="link" href="/" className="font-[48px]">
                  Menu
                </Link>
              </li>
              <li className="pl-8">
                <Link type="link" href="/" className="font-[48px]">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
