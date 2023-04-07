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
    right: 1em;
    background: var(--point-2);
    border-radius: 50%;
  }
`;

const TodoContainer = ({ data }) => {
  const [modal, setModal] = useState({
    isOpen: false,
    mode: "",
  });
  const [filter, setFilter] = useState("전체");

  const filterDropdown = {
    title: filter,
    icon: {
      name: "filter_alt",
    },
    children: [
      { title: "전체", onClick: () => setFilter("전체") },
      { title: "미완료", onClick: () => setFilter("미완료") },
      { title: "완료", onClick: () => setFilter("완료") },
    ],
  };

  const deleteDropdown = {
    title: null,
    icon: {
      name: "delete_sweep",
    },
    children: [{ title: "전체 삭제" }, { title: "완료한 할일만 삭제" }],
  };

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

  const openModal = (e) => {
    const mode =
      e.currentTarget.className === "btn-add-todo" ? "create" : "edit";
    setModal({ isOpen: true, mode });
  };

  const filtered = data.filter((el) => {
    if (filter === "전체") return el;
    if (filter === "미완료") return !el.isDone;
    if (filter === "완료") return el.isDone;
  });
  return (
    <StyledTodoContainer>
      <div className="todo-task-box">
        <h2>{getDate()}</h2>
        <h3>남은 할일 {filtered.filter((el) => !el.isDone).length}개</h3>
      </div>
      <div className="todo-options-box">
        <TodoDropdown list={filterDropdown} />
        <TodoDropdown list={deleteDropdown} />
      </div>
      <ul className="todo-list">
        {filtered.length === 0 ? (
          <li>할일이 없습니다.</li>
        ) : (
          filtered.map((todo) => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                openModal={openModal}
              />
            );
          })
        )}
      </ul>
      <TodoModal
        options={modal}
        setOptions={setModal}
      />
      <button
        type="button"
        className="btn-add-todo"
        onClick={(e) => openModal(e)}
      >
        <Icon
          name="add"
          fontSize="6.2rem"
          color="var(--white)"
        />
      </button>
    </StyledTodoContainer>
  );
};

export default TodoContainer;
