import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';


function Home() {
  const [keyword, setKeyword] = useState('');

  const handleInputChange = useCallback(
    (e) => {
      setKeyword(e.target.value);
    }, []);

  return (
    <div>
      <div>
        <button>
          <Link to="/signin">로그인</Link>
        </button>
        <button>
          <Link to="/signup">회원가입</Link>
        </button>
      </div>
      <div>
        로고
      </div>
      <form action="">
        <input
          type="text"
          placeholder="회사, 직무, 키워드 검색"
          value={keyword}
          onChange={handleInputChange}
        />
        <div>
          <div>
            직무
            <select name="" id="">
              <option value="">디자인</option>
              <option value="">개발</option>
              <option value="">마케팅</option>
            </select>
          </div>
          <div>
            지역
            <select name="" id="">
              <option value="">서울</option>
              <option value="">인천</option>
              <option value="">경기도 </option>
            </select>
          </div>
          <div>
            고용형태
            <select name="" id="">
              <option value="">정규직</option>
              <option value="">인턴</option>
              <option value="">파견직</option>
            </select>
          </div>
          <div>
            정렬
            <select name="" id="">
              <option value="">최신순</option>
              <option value="">인기순</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Home;
