import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <section id="header">
      <div className="container">
        <NavContainer>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/volunteers">Volunteers</NavLink>
            </li>
          </ul>
        </NavContainer>
      </div>
    </section>
  );
};
const NavContainer = styled.div`
  position: fixed;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
  border-radius: 50px;
  ul {
    display: flex;
    align-items: center;
    gap: 1rem;
    a {
      color: var(--text-color);
    }
    a.active {
      color: var(--primary-color);
    }
  }
`;
export default Header;
