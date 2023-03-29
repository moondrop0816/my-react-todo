import Nav from "./Nav";
import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: var(--white);

  & > div {
    width: 90%;
    display: flex;
    justify-content: flex-end;
    padding: 1em;
  }
`;

const Header = () => {
  // header
  // nav와 다크모드 버튼 포함
  return (
    <StyledHeader>
      <div>
        <button type="button">
          <span className="material-icons-round">light_mode</span>
          <span className="material-icons-round">dark_mode</span>
        </button>
        <button type="button">
          <span className="material-icons-round">menu</span>
        </button>
      </div>
      {/* <Nav /> */}
    </StyledHeader>
  );
};

export default Header;
