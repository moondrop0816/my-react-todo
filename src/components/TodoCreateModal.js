const TodoCreateModal = () => {
  // 투두 등록버튼 클릭시 나타날 팝업
  // 이름 더 좋은거 생각나면 바꾸기...
  return (
    <div>
      <div>
        <h3>할일등록하기</h3>
        <div>
          <label>내용</label>
          <input type="text" />
        </div>
        <div>
          <label>횟수</label>
          <input type="number" />
        </div>
        <button type="button">할일 등록</button>
      </div>
    </div>
  );
};

export default TodoCreateModal;
