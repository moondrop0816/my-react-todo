import Nav from "./Nav";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-end;
`;

const Header = () => {
  // header
  // nav와 다크모드 버튼 포함
  return (
    <StyledHeader>
      <div>
        <button type="button">다크모드</button>
        <button type="button">메뉴</button>
      </div>
      <Nav />
    </StyledHeader>
  );
};

export default Header;
