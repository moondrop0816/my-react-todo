import Nav from "./Nav";
import styled from "styled-components";
import { useState } from "react";

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.white};
  position: fixed;
  z-index: 9;

  .header-btns {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1em;
  }
`;

const Header = ({ appTheme, setAppTheme }) => {
  const [nav, setNav] = useState(false);
  const handleMenu = () => {
    setNav(!nav);
  };
  const handleTheme = () => {
    setAppTheme(appTheme === "light" ? "dark" : "light");
  };

  return (
    <StyledHeader>
      <div className="header-btns">
        <button
          type="button"
          onClick={handleTheme}
        >
          {appTheme === "light" ? (
            <span className="material-icons-round">light_mode</span>
          ) : (
            <span className="material-icons-round">dark_mode</span>
          )}
        </button>
        <button
          type="button"
          onClick={handleMenu}
        >
          <span className="material-icons-round">menu</span>
        </button>
      </div>
      <Nav
        menuOpen={nav}
        handleMenu={handleMenu}
      />
    </StyledHeader>
  );
};

export default Header;
