import Todo from "../components/Todo";
import { useState } from "react";
import styled from "styled-components";
import Icon from "../components/Icon";
import FilterDropdown from "../components/FilterDropdown";
import DeleteDropdown from "../components/DeleteDropdown";
import CreateModal from "../components/CreateModal";
import EditModal from "../components/EditModal";

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
    border-top: 1px solid ${({ theme }) => theme.color.lightGray};
    border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
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
    background: ${({ theme }) => theme.color.point2};
    border-radius: 50%;
  }
`;

const TodoContainer = ({ data }) => {
  const [createOpen, setCreateOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [filter, setFilter] = useState("전체");

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
        <FilterDropdown
          filter={filter}
          setFilter={setFilter}
        />
        <DeleteDropdown />
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
                setEditOpen={setEditOpen}
              />
            );
          })
        )}
      </ul>
      {createOpen && (
        <CreateModal
          isOpen={createOpen}
          setIsOpen={setCreateOpen}
        />
      )}
      {editOpen && (
        <EditModal
          isOpen={editOpen}
          setIsOpen={setEditOpen}
        />
      )}
      <button
        type="button"
        className="btn-add-todo"
        onClick={() => setCreateOpen(true)}
      >
        <Icon
          name="add"
          fontSize="6.2rem"
          color={(props) => props.theme.color.white}
        />
      </button>
    </StyledTodoContainer>
  );
};

export default TodoContainer;
