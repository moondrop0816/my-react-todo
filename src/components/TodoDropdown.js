import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Icon from "../style/Icon";

const StyledTodoOptions = styled.div`
  position: relative;

  button {
    display: flex;
    align-items: center;
    padding: 0.5em;
    border-radius: 0.5em;
    font-size: 1.8rem;
    font-weight: 500;
    transition: all 0.5s;

    &:hover,
    &.on {
      background: var(--main-1);
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
    border: 1px solid var(--lightGray);
    border-radius: 0.5em;
    padding: 0.5em;
    background: var(--white);
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
        background: var(--main-1);
      }
    }
  }
`;

const TodoDropdown = ({ list }) => {
  const [isOpen, setIsOpen] = useState(false);
  const optionsRef = useRef();

  useEffect(() => {
    const handleOutsideClose = (e) => {
      // useRef current에 담긴 엘리먼트 바깥을 클릭 시 드롭메뉴 닫힘
      if (isOpen && !optionsRef.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener("click", handleOutsideClose);

    return () => document.removeEventListener("click", handleOutsideClose);
  }, [isOpen]);

  return (
    <StyledTodoOptions>
      <button
        type="button"
        className={isOpen ? "on" : ""}
        ref={optionsRef}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon
          name={list.icon.name}
          color={list.icon.color}
        />
        {true && list.title}
      </button>
      <ul>
        {list.children.map((child, idx) => {
          return (
            <li
              key={idx}
              onClick={child.onClick}
            >
              {child.title}
            </li>
          );
        })}
      </ul>
    </StyledTodoOptions>
  );
};

export default TodoDropdown;
