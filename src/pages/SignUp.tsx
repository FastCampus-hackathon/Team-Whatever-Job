import useInput from '../hooks/useInput';

function SignUp() {
  const [id, handleIdChange] = useInput('');
  const [password, handlePasswordChange] = useInput('');

  const handleClickSubmit: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    // TODO: 비동기 회원가입 요청
    console.log('sign up!');
  };

  return (
    <>
      <h1>회원가입</h1>
      <hr />
      <form action="">
        <div>
          <label htmlFor="id">아이디</label>
          <input
            name="id"
            type="text"
            value={id}
            onChange={handleIdChange}
          />
          <div>{id}</div>
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            name="password"
            type="text"
            value={password}
            onChange={handlePasswordChange}
          />
          <div>{password}</div>
        </div>
        <label htmlFor="agree">개인정보 수집 및 이용에 동의합니다</label>
        <input
          name="agree"
          type="checkbox"
        />
        <button
          type="submit"
          onClick={handleClickSubmit}
        >
          가입
        </button>
      </form>
    </>
  );
}

export default SignUp;
