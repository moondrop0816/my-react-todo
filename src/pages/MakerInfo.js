import styled from "styled-components";
import Icon from "../components/Icon";

const StyledReady = styled.div`
  ${({ theme }) => theme.components.ready}
`;

const MakerInfo = () => {
  return (
    <StyledReady>
      <Icon
        name="pending"
        fontSize="12rem"
      />
      <h2>준비중인 페이지 입니다.</h2>
    </StyledReady>
  );
};

export default MakerInfo;
