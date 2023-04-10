import { useState } from "react";
import styled from "styled-components";
import Icon from "./Icon";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTarget, updateTodo } from "../actions";
import EditDropdown from "./EditDropdown";

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
  const [isChecked, setIsChecked] = useState(todo.isDone);

  const handleOnDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleOnUpdateTarget = (e) => {
    dispatch(updateTarget(todo.id));
    openModal(e);
  };

  // const optionsDropdown = {
  //   title: null,
  //   icon: {
  //     name: "more_horiz",
  //     color: "var(--gray)",
  //   },
  //   children: [
  //     { title: "수정하기", onClick: handleOnUpdateTarget },
  //     { title: "삭제하기", onClick: handleOnDelete },
  //   ],
  // };

  const handleChecked = () => {
    const checkTodo = {
      ...todo,
    };

    const current = checkTodo.count.current;
    const total = checkTodo.count.total;
    if (current < total) {
      checkTodo.count.current += 1;
      if (current === total) {
        setIsChecked(true);
        checkTodo.isDone = isChecked;
      }
    } else {
      checkTodo.count.current -= 1;
      setIsChecked(false);
      checkTodo.isDone = isChecked;
    }

    dispatch(updateTarget(todo.id));
    dispatch(updateTodo(checkTodo));
  };

  return (
    <StyledTodo>
      <label
        className="todo-check"
        onClick={handleChecked}
      >
        <input
          type="checkbox"
          onChange={handleChecked}
        />
        {todo.count.total === 1 ? (
          todo.isDone ? (
            <Icon
              name="check_box"
              fontSize={(props) => props.theme.fontSize.iconXl}
              color={(props) => props.theme.color.point2}
            />
          ) : (
            <Icon
              name="check_box_outline_blank"
              fontSize={(props) => props.theme.fontSize.iconXl}
            />
          )
        ) : todo.count.current === todo.count.total ? (
          <Icon
            name="check_box"
            fontSize={(props) => props.theme.fontSize.iconXl}
            color={(props) => props.theme.color.point2}
          />
        ) : (
          <Icon
            name="add_box"
            fontSize={(props) => props.theme.fontSize.iconXl}
            color={(props) => props.theme.color.main1}
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
      <EditDropdown />
    </StyledTodo>
  );
};

export default Todo;
