import Todo from "../components/Todo";
import TodoModal from "../components/TodoModal";
import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Icon from "../style/Icon";
import TodoDropdown from "../components/TodoDropdown";

const StyledTodoContainer = styled.div`
  .todo-task-box {
    margin-bottom: 1.5em;
    h2 {
      font-size: 3.2rem;
      font-weight: 700;
      margin-bottom: 0.7em;
    }

    h3 {
      font-size: 2.4rem;
      font-weight: 500;
    }
  }

  .todo-options-box {
    border-top: 1px solid var(--lightGray);
    border-bottom: 1px solid var(--lightGray);
    padding: 0.5em;
    display: flex;
    justify-content: flex-end;
  }

  .todo-list {
    padding: 1.5rem 1rem;
  }

  .btn-add-todo {
    position: fixed;
    right: 0;
  }
`;

const TodoContainer = () => {
  // Todo 컴포넌트들을 감싼 페이지
  const [todos, setTodos] = useState([]);
  const filterDropdown = {
    title: "전체",
    icon: {
      name: "filter_alt",
    },
    children: [{ title: "전체" }, { title: "미완료" }, { title: "완료" }],
  };
  const deleteDropdown = {
    title: null,
    icon: {
      name: "delete_sweep",
    },
    children: [{ title: "전체 삭제" }, { title: "완료한 할일만 삭제" }],
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/todos");
        setTodos(data);
      } catch (err) {
        throw new Error(err);
      }
    })();
  }, []);

  const getDate = () => {
    const d = new Date();
    const week = [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ];

    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const date = d.getDate();
    const day = week[d.getDay()];

    return `${year}년 ${month}월 ${date}일 ${day}`;
  };

  return (
    <StyledTodoContainer>
      <div className="todo-task-box">
        <h2>{getDate()}</h2>
        <h3>남은 할일 {todos.filter((el) => !el.done).length}개</h3>
      </div>
      <div className="todo-options-box">
        {/* <select className="todo-filter">
          <option value="전체">전체</option>
          <option value="미완료">미완료</option>
          <option value="완료">완료</option>
        </select> */}
        <TodoDropdown list={filterDropdown} />
        <TodoDropdown list={deleteDropdown} />
        {/* <button type="button">옵션</button>
        <div className="todo-options">
          <ul>
            <li>완료한 할일만 삭제</li>
            <li>전체 삭제</li>
          </ul>
        </div> */}
      </div>
      <ul className="todo-list">
        {todos.length === 0 ? (
          <li>할일이 없습니다.</li>
        ) : (
          todos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
              />
            );
          })
        )}
      </ul>
      <TodoModal />
      <button
        type="button"
        className="btn-add-todo"
      >
        <Icon
          name="add_circle"
          fontSize="6.2rem"
          color="var(--point-2)"
        />
      </button>
    </StyledTodoContainer>
  );
};

export default TodoContainer;
