import Todo from "../components/Todo";
import TodoCreateModal from "../components/TodoCreateModal";
import axios from "axios";
import { useState, useEffect } from "react";

const TodoContainer = () => {
  // Todo 컴포넌트들을 감싼 페이지
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:3001/todos");
      setTodos(data);
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
    <div>
      <div>
        <h2>{getDate()}</h2>
        <h3>남은 할일 00개</h3>
      </div>
      <div>
        <select>
          <option value="전체">전체</option>
          <option value="미완료">미완료</option>
          <option value="완료">완료</option>
        </select>
        <button type="button">옵션</button>
        <div className="todo-options">
          <ul>
            <li>완료한 할일만 삭제</li>
            <li>전체 삭제</li>
          </ul>
        </div>
      </div>
      <ul>
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
            />
          );
        })}
      </ul>
      <TodoCreateModal />
      <button type="button">추가</button>
    </div>
  );
};

export default TodoContainer;
