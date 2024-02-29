import { useRootContext } from "@/context/context";
import headerData from "@/data/headerData";
import useScroll from "@/hooks/useScroll";
import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import NavItem from "./NavItem";
import { PopupButton } from "react-calendly";
const { logo, navData } = headerData;
import Calendly from "../Calendly";

const Header = () => {
  const { scrollTop } = useScroll(100);
  const { toggleMenu, menuStatus } = useRootContext();

  return (
    <header className="site-header header-one ">
      <nav
        className={`navbar navbar-expand-lg navbar-light header-navigation stricky animated ${
          scrollTop ? "stricked-menu stricky-fixed slideInDown" : "original"
        }`}
      >
        <div className="container clearfix">
          <div className="logo-box clearfix">
            <Link href="/">
              <a className="navbar-brand">
                <Image
                  src={logo.src}
                  className="main-logo"
                  width={66}
                  alt="Awesome Image"
                />
              </a>
            </Link>
            <button onClick={toggleMenu} className="menu-toggler">
              <span className="fa fa-bars"></span>
            </button>
          </div>
          <div
            className={`main-navigation ${
              menuStatus ? "showen d-block animated fadeInDown" : "d-none"
            }`}
          >
            <ul className="navigation-box one-page-scroll-menu">
              {navData.map((navItems) => (
                <NavItem navItem={navItems} key={navItems.id} />
              ))}
            </ul>
          </div>
          <div className="right-side-box">
           
               <div className="App">
      <PopupButton
        url="https://calendly.com/udevesh721/meet" className="thm-btn header-one__btn"
      
        rootElement={document ? document.getElementById("root") : " "}
        text="Click here to schedule!"
      />
        {/* <div className="container">
      <h1>Schedule an Appointment</h1>
      <Calendly url="https://calendly.com/olivemonk/interview" />
    </div>
     */}
    </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
