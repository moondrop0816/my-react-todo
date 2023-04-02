import { useState } from "react";
import styled from "styled-components";
import Icon from "../style/Icon";

const StyledTodo = styled.li`
  display: flex;
  align-items: center;

  .todo-check {
    input {
      display: none;
    }
  }

  .todo-content {
    display: flex;
  }

  .btn-delete-todo {
  }
`;

const Todo = ({ todo }) => {
  const [isDone, setIsDone] = useState(todo.done);
  // 개별 투두
  // 수정 삭제 및 할일 내용이 표시됨
  const handleChecked = (e) => {
    setIsDone(e.target.checked);
  };
  return (
    <StyledTodo>
      <label className="todo-check">
        <input
          type="checkbox"
          checked={isDone}
          onChange={handleChecked}
        />
        {todo.count === null ? (
          isDone ? (
            <Icon
              name="check_box"
              fontSize="3.6rem"
              color="var(--point-2)"
            />
          ) : (
            <Icon
              name="check_box_outline_blank"
              fontSize="3.6rem"
            />
          )
        ) : todo.count.current === todo.count.total ? (
          <Icon
            name="check_box"
            fontSize="3.6rem"
            color="var(--point-2)"
          />
        ) : (
          <Icon
            name="add_box"
            fontSize="3.6rem"
            color="var(--main-1)"
          />
        )}
      </label>
      <div className="todo-content">
        <p>{todo.content}</p>
        {todo.count !== null ? (
          <span>{`${todo.count.current}/${todo.count.total}`}</span>
        ) : (
          <></>
        )}
      </div>
      <button
        type="button"
        className="btn-delete-todo"
      >
        <Icon
          name="delete"
          color="var(--point-1)"
        />
      </button>
    </StyledTodo>
  );
};

export default Todo;
