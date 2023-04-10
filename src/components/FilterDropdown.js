import { useState, useRef, useEffect } from "react";
import Icon from "./Icon";
import styled from "styled-components";

const StyledDropdown = styled.div`
  ${({ theme }) => theme.components.dropdown}
`;

const FilterDropdown = () => {
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
    <StyledDropdown className="filter-dropdown">
      <button
        type="button"
        className={isOpen ? "on" : ""}
        ref={optionsRef}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon name="filter_alt" />
        전체
      </button>
      <ul>
        <li>전체</li>
        <li>미완료</li>
        <li>완료</li>
      </ul>
    </StyledDropdown>
  );
};

export default FilterDropdown;
