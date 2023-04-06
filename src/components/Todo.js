import { useState } from "react";
import styled from "styled-components";
import Icon from "../style/Icon";
import TodoDropdown from "./TodoDropdown";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTarget } from "../actions";

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

const Todo = ({ todo, openModal }) => {
  const dispatch = useDispatch();
  const [isDone, setIsDone] = useState(todo.done);

  const handleOnDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleOnUpdateTarget = (e) => {
    dispatch(updateTarget(todo.id));
    openModal(e);
  };

  const optionsDropdown = {
    title: null,
    icon: {
      name: "more_horiz",
      color: "var(--gray)",
    },
    children: [
      { title: "수정하기", onClick: handleOnUpdateTarget },
      { title: "삭제하기", onClick: handleOnDelete },
    ],
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
        {todo.count.total === 1 ? (
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
        {todo.count.total !== 1 ? (
          <p className="todo-count">{`${todo.count.current}/${todo.count.total}`}</p>
        ) : (
          <></>
        )}
      </div>
      <TodoDropdown list={optionsDropdown} />
    </StyledTodo>
  );
};

export default Todo;
