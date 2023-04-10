import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Icon from "./Icon";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../actions";

const StyledDropdown = styled.div`
  ${({ theme }) => theme.components.dropdown}
`;

const DeleteDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const optionsRef = useRef();
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const handleDeleteAll = () => {
    data.forEach((el) => {
      dispatch(deleteTodo(el.id));
    });
  };
  const handleDeleteDone = () => {
    const filtered = data.filter((el) => el.isDone);
    filtered.forEach((el) => dispatch(deleteTodo(el.id)));
  };

  useEffect(() => {
    const handleOutsideClose = (e) => {
      // useRef current에 담긴 엘리먼트 바깥을 클릭 시 드롭메뉴 닫힘
      if (isOpen && !optionsRef.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener("click", handleOutsideClose);

    return () => document.removeEventListener("click", handleOutsideClose);
  }, [isOpen]);

  return (
    <StyledDropdown>
      <button
        type="button"
        className={isOpen ? "on" : ""}
        ref={optionsRef}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon name="delete_sweep" />
      </button>
      <ul>
        <li onClick={handleDeleteAll}>전체 삭제</li>
        <li onClick={handleDeleteDone}>완료한 할일만 삭제</li>
      </ul>
    </StyledDropdown>
  );
};

export default DeleteDropdown;
