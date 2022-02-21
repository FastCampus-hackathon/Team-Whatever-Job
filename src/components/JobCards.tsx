import './JobCards.css';

import { useState } from 'react';
import TinderCard from 'react-tinder-card';
import styled from 'styled-components';

import { Container } from '../components/styled';
import mixins from '../styles/mixins';

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  workType: string;
  job: string;
  expiration: string;
  dDay: string;
  applyCount: number;
  imageUrl: string;
}

const JobCardContainer = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 5vh;
`;

const JobCard = styled.li`
  position: relative; 
  width: 600px;
  max-width: 80vw;
  margin-bottom: 56px;
  padding-bottom: 24px;
  background-size: cover;
  background-position: center;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const JobImageWrapper = styled.div`
  position: relative;

  img {
    width: 100%;
    border-radius: 8px 8px 0 0;
  }
`;

const JobApplyConut = styled.div`
  ${mixins.fontStyle.body_07};
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 2px 10px 0 2px;
  color: white;
  background: rgba(33, 33, 33, 0.6);
  border-radius: 4px;

  img {
    width: 20px;
    height: 20px;
    margin-left: 8px;
  }
`;

const JobTitle = styled.h3`
  ${mixins.fontStyle.body_02};
  width: 80%;
  margin-top: 20px;
`;

const JobCompanyName = styled.div`
  ${mixins.fontStyle.body_07};
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.grayscale_03};
`;

const JobTags = styled.ul`
  display: flex;
  gap: 4px;
  margin-top: 8px;
`;

const JobTag = styled.li`
  ${mixins.fontStyle.body_09};
  padding: 0 4px;
  color: ${({ theme }) => theme.colors.grayscale_04};
  border: 0.8px solid ${({ theme }) => theme.colors.grayscale_06};
  box-sizing: border-box;
  border-radius: 4px;
`;

const JobExpirationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px; 
`;

const JobExpiration = styled.div`
  ${mixins.fontStyle.body_08};
  color: ${({ theme }) => theme.colors.grayscale_03};
`;

const JobDDay = styled.div`
  ${mixins.fontStyle.body_03};
  color: ${({ theme }) => theme.colors.blue_01};
`;


function JobCards() {
  const getRandomInt = () => {
    return Math.floor(Math.random() * 200) + 1;
  };
  const [cards, setCards] = useState([
    {
      title: '[사람인] 시각디자인/서비스디자인 신입 및 경력 직원 모집',
      company: '사람인',
      location: '서울 구로구',
      workType: '정규직',
      job: '개발',
      expiration: '02/23(수) 23시 59분 마감',
      dDay: 'D-1',
      applyCount: 999,
      imageUrl: `https://picsum.photos/id/${getRandomInt()}/500`,
    },
    {
      title: '[사람인] 시각디자인/서비스디자인 신입 및 경력 직원 모집',
      company: '사람인',
      location: '서울 구로구',
      workType: '정규직',
      job: '개발',
      expiration: '02/23(수) 23시 59분 마감',
      dDay: 'D-1',
      applyCount: 999,
      imageUrl: `https://picsum.photos/id/${getRandomInt()}/500`,
    },
    {
      title: '[사람인] 시각디자인/서비스디자인 신입 및 경력 직원 모집',
      company: '사람인',
      location: '서울 구로구',
      workType: '정규직',
      job: '개발',
      expiration: '02/23(수) 23시 59분 마감',
      dDay: 'D-1',
      applyCount: 999,
      imageUrl: `https://picsum.photos/id/${getRandomInt()}/500`,
    },
    {
      title: '[사람인] 시각디자인/서비스디자인 신입 및 경력 직원 모집',
      company: '사람인',
      location: '서울 구로구',
      workType: '정규직',
      job: '개발',
      expiration: '02/23(수) 23시 59분 마감',
      dDay: 'D-1',
      applyCount: 999,
      imageUrl: `https://picsum.photos/id/${getRandomInt()}/500`,
    },
    {
      title: '[사람인] 시각디자인/서비스디자인 신입 및 경력 직원 모집',
      company: '사람인',
      location: '서울 구로구',
      workType: '정규직',
      job: '개발',
      expiration: '02/23(수) 23시 59분 마감',
      dDay: 'D-1',
      applyCount: 999,
      imageUrl: `https://picsum.photos/id/${getRandomInt()}/500`,
    },
  ]);
  const selected: string[] = [];

  const handleSwipeCard = (direction: string, card: JobCardProps) => {
    if (direction === 'left') {
      console.log(card.title, '탈락');
    }

    if (direction === 'right') {
      console.log(card.title);
      selected.push(card.title);
    }
    console.log('selected: ', selected);
  };

  return (
    <Container>
      <JobCardContainer>
        {cards.map(card => {
          const {
            title,
            company,
            location,
            workType,
            job,
            expiration,
            dDay,
            applyCount,
            imageUrl,
          } = card;

          return (
            <TinderCard
              className="swipe"
              key={title}
              preventSwipe={['up', 'down']}
              onSwipe={(direction) => handleSwipeCard(direction, card)}
            >
              <JobCard>
                <JobImageWrapper>
                  <img src={imageUrl} alt="기업 사진" />
                  <JobApplyConut>
                    <img src="images/icon_person.svg" alt="지원자 수" />
                    <div>{applyCount}</div>
                  </JobApplyConut>
                </JobImageWrapper>
                <Container>
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
              </JobCard>
            </TinderCard>
          );
        })}
      </JobCardContainer>
    </Container>
  );
}

export default JobCards;
