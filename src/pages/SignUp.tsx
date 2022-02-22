import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { requestSignUp } from '../apis/auth';
import {
  Container,
  Header,
  Input,
  InputBox,
  Label,
  SubmitButton,
} from '../components/styled';
import useInput from '../hooks/useInput';
import mixins from '../styles/mixins';

const Form = styled.form`
    margin-top: 96px;
  `;

const AgreeLabel = styled.label`
    ${mixins.fontStyle.body_07};
    color: ${({ theme }) => theme.colors.grayscale_04};
    vertical-align: middle;
  `;

const CheckBox = styled.input`
    width: 18px;
    height: 18px;
    vertical-align: middle;
  `;

function SignUp() {
  const navigate = useNavigate();
  const [id, handleIdChange] = useInput('');
  const [password, handlePasswordChange] = useInput('');
  const [isAgreed, setIsAgreed] = useState(false);
  const [isSubmitActive, setIsSubmitActive] = useState(false);

  const handleClickSignUp: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();

    if (!id) {
      alert('아이디를 입력해주세요');
      return;
    }

    if (!password) {
      alert('비밀번호를 입력해주세요');
      return;
    }

    if (!isAgreed) {
      alert('개인정보 수집 및 이용에 동의해주세요');
      return;
    }

    const res = await requestSignUp(id, password);
    if (!res) {
      alert('중복된 아이디입니다!');
      return;
    }

    navigate('/signin');
  };

  useEffect(() => {
    if (id && password && isAgreed) {
      // TODO: 로그인 버튼 눌리도록
      setIsSubmitActive(true);
    } else {
      setIsSubmitActive(false);
    }
  }, [id, password, isAgreed]);

  return (
    <>
      <Header>회원가입</Header>
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
          {/* TODO: 비밀번호 확인 Input */}
          <InputBox>
            <AgreeLabel htmlFor="agree">
              개인정보 수집 및 이용에 동의합니다
            </AgreeLabel>
            <CheckBox
              name="agree"
              type="checkbox"
              checked={isAgreed}
              onChange={() => setIsAgreed(prev => !prev)}
            />
          </InputBox>
          <SubmitButton
            type="submit"
            onClick={handleClickSignUp}
            isActive={isSubmitActive}
          >
            가입
          </SubmitButton>
        </Form>
      </Container>
    </>
  );
}

export default SignUp;
