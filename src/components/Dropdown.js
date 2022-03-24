import React from "react";
import { menuData } from "../data/MenuData";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import Logo1 from "../images/logo.svg";

const DropdownContainer = styled.div`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #12b886;
display grid;
align-items: center;
top: 0;
left: 0;
transition: 1s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const CloseIcon = styled(FaTimes)`
  color: #000d1a;
`;

const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`;

const LogoLink = styled(Link)`
  display: flex;
  background: #000;
  border-radius: 10px;
  border: 5px white solid;
  padding: 0.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  color: #fff;
  font-size: clamp(2rem, 8vw, 5rem);
  img {
    height: 30vh;
    background-color: #fff;

  }

  p {
      margin-top: 5px;
  }
`;

const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  color: #fff;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-shadow: 1px 1px 2px black;


  &:hover {
    color: #000d1a;
  }
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;

  Button {
    background: #;
    text-shadow: 1px 1px 2px black;

  }
`;

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          <LogoLink to="/">
            <img src={Logo1} />
            <p>
              KEYSTONE
              <br />
              THERAPIES
            </p>
          </LogoLink>

          <br />
          <br />
          {menuData.map((item, index) => (
            <DropdownLink to={item.link} key={index}>
              {item.title.toUpperCase()} <br />
              <br />
            </DropdownLink>
          ))}
        </DropdownMenu>
        <BtnWrap>
          <Button round="true" big="true" to="/booking">
            BOOKING{" "}
          </Button>
        </BtnWrap>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
