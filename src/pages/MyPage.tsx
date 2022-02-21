import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {
  JobCompanyName,
  JobDDay,
  JobExpiration,
  JobExpirationWrapper,
  JobTag,
  JobTags,
  JobTitle,
} from '../components/JobCards';
import { Container } from '../components/styled';
import mixins from '../styles/mixins';

interface MyJobCardProps {
  id: number;
  title: string;
  company: string;
  location: string;
  workType: string;
  job: string;
  expiration: string;
  dDay: string;
  myGroup: string;
  memo: string;
}

const Header = styled.div`
  ${mixins.fontStyle.headline_01};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  margin-top: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayscale_07};

  div {
    display: flex;
    gap: 20px;
    width: 24px;
    height: 24px;
    margin-right: 40px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const Guide = styled.div`
  ${mixins.fontStyle.body_07};
  color: ${({ theme }) => theme.colors.grayscale_04 };
  margin-top: 28px; 
`;

const MyCards = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  margin-top: 12px;
`;

const MyCard = styled.li`
  position: relative;
  padding-top: 20px;
  background: #FFFFFF;
  box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const JobMemo = styled.div`
  ${mixins.fontStyle.body_04};
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row-reverse;
  gap: 12px;
  margin-top: 20px;
  padding: 8px 24px;
  color: ${({ theme }) => theme.colors.blue_01};
  background-color: ${({ theme }) => theme.colors.blue_gray_02};

  button {
    width: 64px;
    color: inherit;
    background: inherit; 
    border: none; 
    cursor: pointer;
  }

  div {
    ${mixins.fontStyle.body_08};
    padding: 8px 0;
    color: ${({ theme }) => theme.colors.grayscale_03};
    text-align: left;
  }
`;

const JobCheckBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 28px;
  height: 28px;
`;

const ButtonBox = styled.div`
  position: sticky;
  bottom: 12px;
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 8px;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.colors.white};

  button { 
    border: none; 
    border-radius: 8px;
    cursor: pointer;
  }
`;

const DeleteButton = styled.button`
  background-color: ${({ theme }) => theme.colors.blue_gray_02};

  img {
    width: 100%;
    height: 100%;
  }
`;

const CompareButton = styled.button<any>`
  ${mixins.fontStyle.body_02};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, isActive }) => (
    isActive
      ? theme.colors.blue_02
      : theme.colors.blue_03
  )};
`;

function MyPage() {
  const [cards, setCards] = useState<MyJobCardProps[]>([
    {
      id: 1,
      title: '[사람인] 시각디자인/서비스디자인 신입 및 경력 직원 모집',
      company: '사람인',
      location: '서울 구로구',
      workType: '정규직',
      job: '개발',
      expiration: '02/23(수) 23시 59분 마감',
      dDay: 'D-1',
      myGroup: '',
      memo: '',
    },
    {
      id: 2,
      title: '[사람인] 시각디자인/서비스디자인 신입 및 경력 직원 모집',
      company: '사람인',
      location: '서울 구로구',
      workType: '정규직',
      job: '개발',
      expiration: '02/23(수) 23시 59분 마감',
      dDay: 'D-1',
      myGroup: '',
      memo: '',
    },
    {
      id: 3,
      title: '[사람인] 시각디자인/서비스디자인 신입 및 경력 직원 모집',
      company: '사람인',
      location: '서울 구로구',
      workType: '정규직',
      job: '개발',
      expiration: '02/23(수) 23시 59분 마감',
      dDay: 'D-1',
      myGroup: '',
      memo: '회사 위치가 구로구라 집에서 출퇴근 하기 용이 할 것 같음. 최근 출시된 점핏 서비스 보고...',
    },
    {
      id: 4,
      title: '[사람인] 시각디자인/서비스디자인 신입 및 경력 직원 모집',
      company: '사람인',
      location: '서울 구로구',
      workType: '정규직',
      job: '개발',
      expiration: '02/23(수) 23시 59분 마감',
      dDay: 'D-1',
      myGroup: '',
      memo: '',
    },
    {
      id: 5,
      title: '[사람인] 시각디자인/서비스디자인 신입 및 경력 직원 모집',
      company: '사람인',
      location: '서울 구로구',
      workType: '정규직',
      job: '개발',
      expiration: '02/23(수) 23시 59분 마감',
      dDay: 'D-1',
      myGroup: '',
      memo: '',
    },
  ]);
  const [selectedCardIds, setSelectedCardIds] = useState<number[]>([]);

  const handleToggleCheck = (id: number) => {
    if (selectedCardIds.includes(id)) {
      setSelectedCardIds(selectedCardIds.filter(item => item !== id));
      return;
    }
    setSelectedCardIds(
      [
        ...selectedCardIds,
        id,
      ],
    );
  };

  return (
    <Container>
      <Header>
        관심 공고
        <div>
          <img src="images/icon_file.svg" alt="그룹" />
          <img src="images/icon_close-blue.svg" alt="닫기" />
        </div>
      </Header>
      <Guide>
        비교하고 싶은 공고를 선택해 그룹을 만들어보세요
      </Guide>
      <MyCards>
        {cards.map(card => {
          const {
            id,
            title,
            company,
            location,
            workType,
            job,
            expiration,
            dDay,
            myGroup,
            memo,
          } = card;

          return (
            <MyCard key={id}>
              <Container>
                <JobCheckBox onClick={() => {
                  handleToggleCheck(id);
                }}>
                  {selectedCardIds.includes(id)
                    ? <img src="images/icon_checkbox-checked.svg" alt="체크 됨" />
                    : <img src="images/icon_checkbox-unchecked.svg" alt="체크 안 됨" />
                  }
                </JobCheckBox>
                <JobTitle>{title}</JobTitle>
                <JobCompanyName>{company}</JobCompanyName>
                <JobTags>
                  <JobTag>{location}</JobTag>
                  <JobTag>{workType}</JobTag>
                  <JobTag>{job}</JobTag>
                </JobTags>
                <JobExpirationWrapper>
                  <JobExpiration>{expiration}</JobExpiration>
                  <JobDDay>{dDay}</JobDDay>
                </JobExpirationWrapper>
              </Container>
              {memo
                ? <JobMemo>
                  <button>수정</button>
                  <div>{memo}</div>
                </JobMemo>
                : <JobMemo>
                  <button>
                    <Link to={`/memo/${id}`}>메모하기</Link>
                  </button>
                </JobMemo>
              }
            </MyCard>
          );
        })}
      </MyCards>
      <ButtonBox>
        <DeleteButton>
          <img src="images/button_delete.png" alt="삭제" />
        </DeleteButton>
        <CompareButton isActive={selectedCardIds.length}>
          비교하기
        </CompareButton>
      </ButtonBox>
    </Container>
  );
}

export default MyPage;
