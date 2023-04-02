import Nav from "./Nav";
import styled from "styled-components";
import { useState } from "react";

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: var(--white);
  position: fixed;

  .header-btns {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1em;
  }
`;

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleMenu = () => {
    setNav(!nav);
  };

  return (
    <StyledHeader>
      <div className="header-btns">
        <button type="button">
          {/* Todo: 라이트모드 / 다크모드 styled-component ThemeProvider로 처리할것 */}
          <span className="material-icons-round">light_mode</span>
          <span className="material-icons-round">dark_mode</span>
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
