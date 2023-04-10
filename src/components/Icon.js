import styled from "styled-components";

const StyledIcon = styled.span`
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: ${(props) => props.fontSize || props.theme.fontSize.icon};
  color: ${(props) => props.color || props.theme.color.black};
  background-color: ${(props) => props.bgColor || "transparent"};
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: "liga";
`;

const Icon = ({ name, ...rest }) => {
  return (
    <StyledIcon
      className="material-icons-round"
      {...rest}
    >
      {name}
    </StyledIcon>
  );
};

export default Icon;
