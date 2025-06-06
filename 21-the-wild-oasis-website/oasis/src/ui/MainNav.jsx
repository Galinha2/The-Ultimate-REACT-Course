import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {HiOutlineCalendarDays, HiOutlineCog6Tooth, HiOutlineHome, HiOutlineHomeModern, HiOutlineUsers} from "react-icons/hi2";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Link = styled.a`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li className="sliderIcons">
          <span className="icons-slider"><HiOutlineHome/></span>
          <NavLink to="/dashboard">Home</NavLink>
        </li>
        <li className="sliderIcons">
          <span className="icons-slider"><HiOutlineCalendarDays/></span>
          <NavLink to="/bookings">Bookings</NavLink>
        </li>
        <li className="sliderIcons">
          <span className="icons-slider"><HiOutlineHomeModern/></span>
          <NavLink to="/bookings">Cabins</NavLink>
        </li>
        <li className="sliderIcons">
          <span className="icons-slider"><HiOutlineUsers/></span>
          <NavLink to="/bookings">Users</NavLink>
        </li>
        <li className="sliderIcons">
          <span className="icons-slider"><HiOutlineCog6Tooth/></span>
          <NavLink to="/bookings">Settings</NavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
