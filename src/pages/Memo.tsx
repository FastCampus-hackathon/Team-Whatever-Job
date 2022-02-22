import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Container } from '../components/styled';
import mixins from '../styles/mixins';

export const Header = styled.h1`
  ${mixins.fontStyle.headline_03};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 56px; 
  padding: 12px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayscale_07};

  button {
    ${mixins.fontStyle.body_03};
    color: ${({ theme }) => theme.colors.blue_01};
    background: inherit; 
    border: none; 
    cursor: pointer;

    a {
      text-decoration: none; 
      color: inherit;
    }
  }
`;

const JobTitle = styled.h3`
  ${mixins.fontStyle.body_02};
  margin-top: 24px;
  margin-left: 8 px;
`;

const MemoArea = styled.textarea`
  ${mixins.fontStyle.body_07};
  width: 100%;
  height: 200px;
  margin-top: 20px;
  padding: 12px 20px;
  border: 1px solid ${({ theme }) => theme.colors.grayscale_07};
  box-sizing: border-box;
  border-radius: 8px;
  resize: none;
`;

function Memo() {
  const location = useLocation();
  const navigate = useNavigate();
  // id 받아오기
  const { pathname } = location;

  return (
    <Container>
      <Header>
        <button onClick={() => navigate(-1)}>
          {'<'}
        </button>
        <div>메모</div>
        <button>확인</button>
      </Header>
      <JobTitle>job title</JobTitle>
      <MemoArea
        placeholder="메모를 입력하세요"
      />
    </Container>
  );
}

export default Memo;
