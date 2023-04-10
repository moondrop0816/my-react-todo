import styled from "styled-components";
import Icon from "./Icon";
import { useDispatch } from "react-redux";
import { updateTodo } from "../actions";
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

const Todo = ({ todo, setEditOpen }) => {
  const dispatch = useDispatch();

  const handleChecked = (e) => {
    e.preventDefault();
    const checkTodo = {
      ...todo,
    };

    if (!checkTodo.isDone) {
      checkTodo.count.current += 1;
      if (checkTodo.count.current === checkTodo.count.total) {
        checkTodo.isDone = true;
      }
    } else {
      checkTodo.count.current -= 1;
      checkTodo.isDone = false;
    }

    dispatch(updateTodo(checkTodo));
  };

  return (
    <StyledTodo>
      <label
        className="todo-check"
        onClick={(e) => handleChecked(e)}
      >
        <input type="checkbox" />
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
      <EditDropdown
        id={todo.id}
        setEditOpen={setEditOpen}
      />
    </StyledTodo>
  );
};

export default Todo;
