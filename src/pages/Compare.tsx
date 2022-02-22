import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Container } from '../components/styled';
import mixins from '../styles/mixins';
import { Header } from './Memo';

const CompareGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(11, minmax(100px, auto));
  gap: 8px 0;
  overflow: auto;
  white-space: nowrap;
  margin-top: 24px;
`;

const CompareGridHeader = styled.li`
  ${mixins.fontStyle.body_04};
  padding: 2px 24px; 
  text-align: center;
  color: ${({ theme }) => theme.colors.grayscale_05};;
  background-color: ${({ theme }) => theme.colors.blue_gray_02};;
  border-right: 1px solid ${({ theme }) => theme.colors.grayscale_07};
  border-radius: 4px;

  &:nth-child(1) {
    position: sticky; 
    left: 0;
    margin-right: 12px;
  }
`;

const CompareGridCell = styled.li`
  ${mixins.fontStyle.body_04};
  padding: 28px 12px; 
  text-align: center;
  color: ${({ theme }) => theme.colors.grayscale_05};
  background-color: ${({ theme }) => theme.colors.white};
  border-right: 1px solid ${({ theme }) => theme.colors.grayscale_07};
  border-radius: 4px;

  &:nth-child(11n-10) {
    position: sticky;
    left: 0;
    text-align: left;
    padding-left: 20px;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.blue_02};
    border-radius: 4px;
  }

  &:nth-child(11n) {
    ${mixins.fontStyle.body_07};
    color: ${({ theme }) => theme.colors.grayscale_02};
    background-color: ${({ theme }) => theme.colors.blue_gray_02};
    border-radius: 4px;
  }
`;

const Groups = styled.ul`
  display: flex;
  gap: 8px;
  margin-top: 24px;
`;

const Group = styled.li` 
  ${mixins.fontStyle.body_03};
  color: ${({ theme }) => theme.colors.blue_02};
  background-color: ${({ theme }) => theme.colors.white};
  padding: 4px 12px;
  border: 1px solid ${({ theme }) => theme.colors.blue_02};
  border-radius: 30px;
`;

function Compare({ selectedCardIds, setSelectedCardIds }: {
  selectedCardIds: number[],
  setSelectedCardIds: React.Dispatch<React.SetStateAction<number[]>>
}) {
  const navigate = useNavigate();

  const cells = new Array(121).fill(1).map((v, i) => v + i);
  const [groups, setGroups] = useState<string[]>([]);

  const handleClickSave = () => {
    const newGroup = prompt('그룹명을 입력하세요');
    setGroups([...groups, String(newGroup)]);
  };

  return (
    <Container>
      <Header>
        <button onClick={() => navigate(-1)}>
          {'<'}
        </button>
        <div>비교하기</div>
        <button onClick={handleClickSave}>저장</button>
      </Header>
      {groups && <Groups>
        {groups.map(group => (
          <Group>
            {group}
          </Group>
        ))}
      </Groups>}
      <CompareGrid>
        <CompareGridHeader>기업명</CompareGridHeader>
        <CompareGridHeader>직무</CompareGridHeader>
        <CompareGridHeader>마감일</CompareGridHeader>
        <CompareGridHeader>지역</CompareGridHeader>
        <CompareGridHeader>경력</CompareGridHeader>
        <CompareGridHeader>고용 형태</CompareGridHeader>
        <CompareGridHeader>학력</CompareGridHeader>
        <CompareGridHeader>연봉 </CompareGridHeader>
        <CompareGridHeader>상장 여부</CompareGridHeader>
        <CompareGridHeader>지원자 수</CompareGridHeader>
        <CompareGridHeader>메모</CompareGridHeader>
        {cells.map(cell => (
          <CompareGridCell key={cell}>
            {cell}
          </CompareGridCell>
        ))}
      </CompareGrid>
    </Container>
  );
}

export default Compare;

