import { Link } from "react-router-dom";

const Nav = () => {
  // 메뉴들이 들어가는 네비게이션
  // 오늘의 할일, 통계, 만든사람
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">오늘의 할일</Link>
        </li>
        <li>
          <Link to="/statistics">통계 보기</Link>
        </li>
        <li>
          <Link to="/makerinfo">만든 사람</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
