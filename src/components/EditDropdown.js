import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Icon from "./Icon";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTarget } from "../actions";

const StyledDropdown = styled.div`
  ${({ theme }) => theme.components.dropdown}
`;

const EditDropdown = ({ id, setEditOpen }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const optionsRef = useRef();

  const handleOnDelete = () => {
    dispatch(deleteTodo(id));
  };

  const handleOnUpdateTarget = () => {
    dispatch(updateTarget(id));
    setEditOpen(true);
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
        <Icon
          name="more_horiz"
          color={(props) => props.theme.color.gray}
        />
      </button>
      <ul>
        <li onClick={handleOnUpdateTarget}>수정하기</li>
        <li onClick={handleOnDelete}>삭제하기</li>
      </ul>
    </StyledDropdown>
  );
};

export default EditDropdown;
