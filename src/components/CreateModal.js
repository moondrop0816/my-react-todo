import { useState } from "react";
import styled from "styled-components";
import Icon from "./Icon";
import shortid from "shortid";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";

const StyledModal = styled.div`
  ${({ theme }) => theme.components.modal}
`;

const CreateModal = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    id: shortid.generate(),
    content: "",
    count: {
      current: 0,
      total: 1,
    },
    isDone: false,
  });

  const closeModal = (e) => {
    if (
      e.target.classList.contains("modal-bg") ||
      e.currentTarget.className === "btn-close"
    )
      setIsOpen(false);
  };

  const handleOnChangeForm = (e) => {
    const { name, value } = e.target;
    if (name === "content") {
      setValues({
        ...values,
        [name]: value,
      });
    } else {
      setValues({
        ...values,
        count: {
          ...values.count,
          [name]: Number(value),
        },
      });
    }
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(values));
    setValues({
      id: shortid.generate(),
      content: "",
      count: {
        current: 0,
        total: 1,
      },
      isDone: false,
    });
    setIsOpen(false);
  };

  return (
    <StyledModal
      className={isOpen ? "modal-bg on" : "modal-bg"}
      onClick={(e) => closeModal(e)}
    >
      <form
        className="modal-content"
        onSubmit={(event) => handleOnSubmit(event)}
      >
        <div className="modal-title-box">
          <h3 className="modal-title">
            <Icon
              name="add"
              fontSize={(props) => props.theme.fontSize.iconLg}
              color={(props) => props.theme.color.white}
              bgColor={(props) => props.theme.color.point2}
            />
            할일 등록하기
          </h3>
          <button
            type="button"
            className="btn-close"
            onClick={(e) => closeModal(e)}
          >
            <Icon
              name="close"
              fontSize={(props) => props.theme.fontSize.iconLg}
            />
          </button>
        </div>
        <div className="modal-txt-box">
          <label>
            <p>할일 내용</p>
            <input
              type="text"
              name="content"
              placeholder="할일의 내용을 입력해주세요."
              value={values.content}
              onChange={(e) => handleOnChangeForm(e)}
              required
            />
          </label>
        </div>
        <div className="modal-txt-box">
          <label>
            <p>할일 완료 횟수</p>
            <input
              type="number"
              name="current"
              min={0}
              value={values.count.current}
              onChange={(e) => handleOnChangeForm(e)}
              placeholder="현재까지 완료한 횟수를 입력해주세요."
            />
          </label>
        </div>
        <div className="modal-txt-box">
          <label>
            <p>할일 총 횟수</p>
            <input
              type="number"
              name="total"
              min={0}
              placeholder="총 완료할 횟수를 입력해주세요."
              value={values.count.total}
              onChange={(e) => handleOnChangeForm(e)}
            />
          </label>
        </div>
        <button type="submit">할일 등록</button>
      </form>
    </StyledModal>
  );
};

export default CreateModal;
