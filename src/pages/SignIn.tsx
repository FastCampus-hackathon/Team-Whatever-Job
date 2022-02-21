import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import {
  Container,
  Header,
  Input,
  InputBox,
  Label,
  SubmitButton,
} from '../components/styled';
import useInput from '../hooks/useInput';

const Form = styled.form`
  margin-top: 136px;
`;

const EncourageSignUp = styled.div`
  display: flex;
  gap: 4px;
`;

function SignIn() {
  const navigate = useNavigate();
  const [id, handleIdChange] = useInput('');
  const [password, handlePasswordChange] = useInput('');
  const [isSubmitActive, setIsSubmitActive] = useState(false);

  const handleClickLogIn: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    if (!id) {
      alert('아이디를 입력해주세요');
      return;
    }

    if (!password) {
      alert('비밀번호를 입력해주세요');
      return;
    }
    // TODO: 비동기 로그인 요청
    console.log('log in!');
    navigate('/');
  };

  useEffect(() => {
    if (id && password) {
      // TODO: 로그인 버튼 눌리도록
      setIsSubmitActive(true);
    } else {
      setIsSubmitActive(false);
    }
  }, [id, password]);

  return (
    <>
      <Header>로그인</Header>
      <Container>
        <Form>
          <InputBox>
            <Label htmlFor="id">아이디</Label>
            <Input
              name="id"
              type="text"
              value={id}
              onChange={handleIdChange}
            />
          </InputBox>
          <InputBox>
            <Label htmlFor="password">비밀번호</Label>
            <Input
              name="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </InputBox>
          <SubmitButton
            type="submit"
            onClick={handleClickLogIn}
            isActive={isSubmitActive}
          >
            로그인
          </SubmitButton>
        </Form>
        <EncourageSignUp>
          <div>아직 계정이 없으신가요?</div>
          <Link to="/signup">회원가입</Link>
        </EncourageSignUp>
      </Container>
    </>
  );
}

export default SignIn;
