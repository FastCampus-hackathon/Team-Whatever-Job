import { useEffect, useState } from 'react';
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
  const [id, handleIdChange] = useInput('');
  const [password, handlePasswordChange] = useInput('');
  const [isAgreed, setIsAgreed] = useState(false);

  const handleClickSubmit: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    // TODO: 비동기 회원가입 요청
    console.log('sign up!');
  };

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
            onClick={handleClickSubmit}
          >
            가입
          </SubmitButton>
        </Form>
      </Container>
    </>
  );
}

export default SignUp;
