const Todo = () => {
  // 개별 투두
  // 수정 삭제 및 할일 내용이 표시됨
  return (
    <li>
      <input type="checkbox" />
      <div>
        <p>물마시기 5번</p>
        <span>0/5</span>
      </div>
      <button type="button">삭제</button>
    </li>
  );
};

export default Todo;
