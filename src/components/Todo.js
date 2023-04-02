import { useState } from "react";
import styled from "styled-components";
import Icon from "../style/Icon";
import TodoDropdown from "./TodoDropdown";

const StyledTodo = styled.li`
  display: flex;
  align-items: center;

  .todo-check {
    flex: 0 0 40px;
    input {
      display: none;
    }
  }

  .todo-content-box {
    display: flex;
    align-items: center;
    flex: 1 0 0;

    .todo-count {
      padding: 0 0.5em;
    }
  }

  .btn-options-todo {
    flex: 0 0 40px;
  }
`;

const Todo = ({ todo }) => {
  // 개별 투두
  // 수정 삭제 및 할일 내용이 표시됨
  const [isDone, setIsDone] = useState(todo.done);
  const optionsDropdown = {
    title: null,
    icon: {
      name: "more_horiz",
      color: "var(--gray)",
    },
    children: [{ title: "수정하기" }, { title: "삭제하기" }],
  };
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
      <div className="todo-content-box">
        <p className="todo-content">{todo.content}</p>
        {todo.count !== null ? (
          <p className="todo-count">{`${todo.count.current}/${todo.count.total}`}</p>
        ) : (
          <></>
        )}
      </div>
      <TodoDropdown list={optionsDropdown} />
      {/* <button
        type="button"
        className="btn-options-todo"
      >
        <Icon
          name="more_horiz"
          color="var(--gray)"
        />
      </button> */}
    </StyledTodo>
  );
};

export default Todo;
