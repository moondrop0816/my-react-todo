const color = {
  white: "#fff",
  black: "#333",
  gray: "#aaa",
  lightGray: "#ddd",
  base: "#fad09f",
  main1: "#ffb300",
  main2: "#ff6b01",
  point1: "#d42926",
  point2: "#7d8600",
};

const fontSize = {
  xs: "1.2rem",
  sm: "1.4rem",
  base: "1.6rem",
  md: "1.8rem",
  lg: "2rem",
  icon: "2.4rem",
  iconLg: "3rem",
  iconXl: "3.6rem",
};

const components = {
  dropdown: `
  position: relative;

  button {
    display: flex;
    align-items: center;
    padding: 0.5em;
    border-radius: 0.5em;
    font-size: ${fontSize.md};
    font-weight: 500;
    transition: all 0.5s;

    &:hover,
    &.on {
      background: ${color.main1};
    }

    &.on + ul {
      display: block;
    }
  }

  ul {
    display: none;
    position: absolute;
    width: max-content;
    top: 105%;
    right: 0;
    border: 1px solid ${color.lightGray};
    border-radius: 0.5em;
    padding: 0.5em;
    background: ${color.white};
    z-index: 9;

    li {
      border-radius: 0.5em;
      padding: 0.5em 1em;
      margin-bottom: 0.5em;
      cursor: pointer;
      transition: all 0.5s;

      &:last-child {
        margin-bottom: 0;
      }

      &:hover {
        background: ${color.main1};
      }
    }
  }
`,
  modal: `
position: absolute;
background: rgba(0, 0, 0, 0.5);
top: 0;
left: 0;
right: 0;
bottom: 0;
display: none;
justify-content: center;
align-items: center;
z-index: 9;

&.on {
  display: flex;
}

.modal-content {
  width: 50%;
  background: ${color.white};
  padding: 1em;
  border-radius: 0.5em;
  display: flex;
  flex-direction: column;
}

.modal-title-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2em;

  .modal-title {
    display: flex;
    align-items: center;
    font-size: 2.4rem;
    font-weight: 600;

    span:first-of-type {
      margin-right: 0.2em;
      border-radius: 50%;
      padding: 0.1em;
    }
  }
}

.modal-txt-box {
  margin-bottom: 1em;

  &:last-of-type {
    margin-bottom: 2em;
  }

  label {
    display: block;

    p {
      font-size: 1.8rem;
      font-weight: 500;
      margin-bottom: 0.5em;
    }

    input {
      font-size: 1.8rem;
      width: 100%;
      padding: 0.3em 0.5em;
      border: 1px solid ${color.gray};
      border-radius: 0.2em;
    }
  }
}

button[type="submit"] {
  border: 2px solid ${color.main1};
  border-radius: 0.5em;
  font-size: 1.8rem;
  padding: 0.5em;
  font-weight: 500;
  transition: all 0.5s;

  &:hover {
    background: ${color.main1};
    border-color: transparent;
  }
}
`,
};

const theme = {
  color,
  fontSize,
  components,
};

export default theme;
