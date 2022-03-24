import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components/macro";
import { Link, useLocation } from "react-router-dom";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import { FaBars } from "react-icons/fa";
import Logo1 from "../images/logo.svg";

const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  transition: all ease 0.5s;
  border-radius: 5px;
  border: 2px solid transparent;
  text-shadow: 2px 2px 5px black;


  &:hover {
    color: #12b886;
    background: #000;
    border: 2px solid #fff;
  }
`;

const Logo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;


  img {
    height: 60px;
    width: 60px;
    border-radius: 5px;
    border: 2px solid white;
    margin-right: 2px;
    box-shadow: 0 0 2px;
    background-color:white;

  }

  p {
    ${NavLink}
    // font-weight: 700;
  }
`;

const MenuBars = styled(FaBars)`
  display: none;
  @media screen and (max-width: 850px) {
    display: block;
    color: white;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: abosulute;
    top: 0;
    right: 0;
    transform: translate(-0%, 5%);
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  margin-left: -65px;

  @media screen and (max-width: 850px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 850px) {
    display: none;
  }
`;

const Navbar = ({ toggle }) => {
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();

  const changeBackground = () => {
    if (window.pageYOffset >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", changeBackground);
    };

    watchScroll();

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  let style = {
    backgroundColor:
      navbar || location.pathname !== "/" ? "#000" : "transparent",
    borderBottom:
      navbar || location.pathname !== "/"
        ? "#fff solid 1px"
        : "transparent solid 1px",
    transition: "0.4s",
  };

  return (
    <Nav style={style}>
      <Logo to="/">
        {" "}
        <img src={Logo1} />
        <p>
          KEYSTONE <br /> THERAPIES
        </p>
      </Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/booking" primary="true">
          Booking
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
