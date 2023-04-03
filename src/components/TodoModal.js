import styled from "styled-components";
import Icon from "../style/Icon";

const StyledTodoModal = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;

  .modal-content {
    width: 50%;
    background: var(--white);
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
        background-color: var(--point-2);
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
        border: 1px solid var(--gray);
        border-radius: 0.2em;
      }
    }
  }

  button[type="submit"] {
    border: 2px solid var(--main-1);
    border-radius: 0.5em;
    font-size: 1.8rem;
    padding: 0.5em;
    font-weight: 500;

    &:hover {
      background: var(--main-1);
      border-color: transparent;
    }
  }
`;
const TodoModal = () => {
  // 투두 등록, 수정 클릭시 나타날 팝업
  // 이름 더 좋은거 생각나면 바꾸기...
  return (
    <StyledTodoModal className="modal-bg">
      <form className="modal-content">
        <div className="modal-title-box">
          <h3 className="modal-title">
            <Icon
              name="add"
              fontSize="3rem"
              color="var(--white)"
            />
            <span>할일 등록 하기</span>
          </h3>
          <button
            type="button"
            className="btn-close"
          >
            <Icon
              name="close"
              fontSize="3rem"
            />
          </button>
        </div>
        <div className="modal-txt-box">
          <label>
            <p>내용</p>
            <input
              type="text"
              placeholder="할일의 내용을 입력해주세요."
            />
          </label>
        </div>
        <div className="modal-txt-box">
          <label>
            <p>횟수</p>
            <input
              type="number"
              defaultValue={1}
            />
          </label>
        </div>
        <button type="submit">할일 등록</button>
      </form>
    </StyledTodoModal>
  );
};

export default TodoModal;
