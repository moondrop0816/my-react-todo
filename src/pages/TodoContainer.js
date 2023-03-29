import Todo from "../components/Todo";
import TodoCreateModal from "../components/TodoCreateModal";

const TodoContainer = () => {
  // Todo 컴포넌트들을 감싼 페이지
  return (
    <div>
      <div>
        <div>2023년 04월 07일 금요일</div>
        <div>남은 할일 00개</div>
      </div>
      <div>
        <select>
          <option value="전체">전체</option>
          <option value="미완료">미완료</option>
          <option value="완료">완료</option>
        </select>
        <button type="button">옵션</button>
        <div>
          <ul>
            <li>완료한 할일만 삭제</li>
            <li>전체 삭제</li>
          </ul>
        </div>
      </div>
      <ul>
        <Todo />
      </ul>
      <TodoCreateModal />
      <button type="button">추가</button>
    </div>
  );
};

export default TodoContainer;
