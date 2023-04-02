import { Link } from "react-router-dom";
import styled from "styled-components";
import Icon from "./style/Icon";

const StyledNavBg = styled.div`
  width: 100%;
  height: 100vh;
  opacity: 0;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  right: 0;
  transition: all 0.5s;
  z-index: -1;
  visibility: hidden;

  &.open {
    visibility: visible;
    opacity: 1;
    z-index: 9;
  }
`;
const StyledNav = styled.nav`
  width: 50%;
  height: 100%;
  padding: 1em;
  background: var(--white);
  position: fixed;
  top: 0;
  right: -100%;
  display: flex;
  flex-direction: column;
  z-index: 9;
  transition: all 0.5s;

  .btn-nav-close {
    align-self: flex-end;
  }

  li {
    margin: 1em 0;
  }

  &.open {
    right: 0;
  }
`;

const Nav = ({ menuOpen, handleMenu }) => {
  // 메뉴들이 들어가는 네비게이션
  // 오늘의 할일, 통계, 만든사람
  return (
    <>
      <StyledNavBg
        className={menuOpen ? "open" : ""}
        onClick={menuOpen ? handleMenu : undefined}
      />
      <StyledNav className={menuOpen ? "open" : ""}>
        <button
          type="button"
          className="btn-nav-close"
          onClick={handleMenu}
        >
          <Icon name="close" />
        </button>
        <ul>
          <li>
            <Link to="/">오늘의 할일</Link>
          </li>
          <li>
            <Link to="/statistics">통계 보기</Link>
          </li>
          <li>
            <Link to="/makerinfo">만든 사람</Link>
          </li>
        </ul>
      </StyledNav>
    </>
  );
};

export default Nav;
