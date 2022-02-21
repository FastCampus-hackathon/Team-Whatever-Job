import styled from 'styled-components';

import useInput from '../hooks/useInput';
import mixins from '../styles/mixins';

function SignUp() {
  const [id, handleIdChange] = useInput('');
  const [password, handlePasswordChange] = useInput('');

  const handleClickSubmit: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    // TODO: 비동기 회원가입 요청
    console.log('sign up!');
  };

  const Header = styled.h1`
    ${mixins.fontStyle.headline_03};
    padding: 12px 0;
    text-align: center; 
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayscale_07};
  `;

  const Container = styled.div`
    position: relative;
    margin: 0 24px;
  `;

  const Form = styled.form`
    margin-top: 96px;
  `;

  const InputBox = styled.div`
    margin-bottom: 16px;
  `;

  const Label = styled.label`
    ${mixins.fontStyle.body_07};
    display: block;
    margin-bottom: 4px;
  `;

  const Input = styled.input`
    ${mixins.fontStyle.body_07};
    width: 100%;
    height: 50px;
    padding: 12px 16px;
    box-sizing: border-box;
    border: 1px solid #E5E5E5;
    border-radius: 10px;
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

  const SubmitButton = styled.button`
    ${mixins.fontStyle.body_02};
    position: fixed;
    bottom: 48px;
    left: 50%;
    transform: translate(-50%, 0);
    display: block;
    width: 90%;
    height: 52px;
    background-color: ${({ theme }) => theme.colors.blue_02};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    border-radius: 8px;
  `;

  return (
    <>
      <Header>회원가입</Header>
      <Container>
        <Form action="">
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
