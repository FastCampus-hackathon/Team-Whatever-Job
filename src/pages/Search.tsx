import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import CategoryModal from '../components/CategoryModal';
import JobCards from '../components/JobCards';
import SearchBar from '../components/SearchBar';
import { Container } from '../components/styled';
import useInput from '../hooks/useInput';
import mixins from '../styles/mixins';
import {
  Form,
  SearchCategories,
  SearchCategory,
  SearchCategoryName,
  SearchCategorySelected,
} from './Home';

const Header = styled.div `
  display: flex;
  justify-content: space-between;
  height: 60px;
  margin-top: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayscale_07};
`;

const MyPageButton = styled.button`
  ${mixins.fontStyle.body_04};
  height: 60%;
  padding: 8px 20px;
  background: inherit;
  border: none;
`;

const LogoBox = styled.div`
  img {
    width: 124px;
  }
`;

const GestureTutorial = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;

  button {
    position: fixed;
    top: 24px;
    right: 24px;
    z-index: 200;
    background: inherit; 
    border: none; 
    cursor: pointer;
  }

  > img {
    width: 100%;
    height: 100%;
  }

  div {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 200;
  }
`;

// const SearchResult = styled.ul`

// `;

function Search() {
  // TODO: 하드 코딩함, Home과 겹치는 부분 리팩토링
  const [keyword, handleKeyword] = useInput('');
  const [job, setJob] = useState('');
  const [location, setLocation] = useState('');
  const [workType, setWorkType] = useState('');
  const [sort, setSort] = useState('최신순');

  const [isTutorialView, setIsTutorialView] = useState(false);
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isWorkTypeModalOpen, setIsWorkTypeModalOpen] = useState(false);
  const [isSortModalOpen, setIsSortModalOpen] = useState(false);

  const [result, setReult] = useState(new Array(10).fill(true));

  useEffect(() => {
    (function() {
      if (window.localStorage) {
        if (!localStorage.getItem('firstLoad')) {
          setIsTutorialView(true);
          localStorage['firstLoad'] = true;
        } else {
          setIsTutorialView(false);
        }
      }
    })();
  }, []);

  const openModal = (category: string) => {
    if (category === '직무') {
      setIsJobModalOpen(true);
    }

    if (category === '지역') {
      setIsLocationModalOpen(true);
    }

    if (category === '고용 형태') {
      setIsWorkTypeModalOpen(true);
    }

    if (category === '정렬') {
      setIsSortModalOpen(true);
    }
  };

  const closeModal = (category: string) => {
    if (category === '직무') {
      setIsJobModalOpen(false);
    }

    if (category === '지역') {
      setIsLocationModalOpen(false);
    }

    if (category === '고용 형태') {
      setIsWorkTypeModalOpen(false);
    }

    if (category === '정렬') {
      setIsSortModalOpen(false);
    }
  };

  return (
    <>
      <Container>
        <Header>
          <LogoBox>
            <img src="images/logo.png" alt="어구저구 로고" />
          </LogoBox>
          <MyPageButton>
            <Link to="/mypage">
              <img src="images/icon_my.png" alt="" />
            </Link>
          </MyPageButton>
        </Header>
        <Form>
          <SearchBar
            keyword={keyword}
            handleKeyword={handleKeyword}
          />
          <SearchCategories>
            <SearchCategory onClick={() => openModal('직무')}>
              <SearchCategoryName>직무</SearchCategoryName>
              <SearchCategorySelected>
                {job || '선택'}
              </SearchCategorySelected>
              <img src="images/icon_dropdown.svg" alt="선택" />
            </SearchCategory>
            <SearchCategory onClick={() => openModal('지역')}>
              <SearchCategoryName>지역</SearchCategoryName>
              <SearchCategorySelected>
                {location || '선택'}
              </SearchCategorySelected>
              <img src="images/icon_dropdown.svg" alt="선택" />
            </SearchCategory>
            <SearchCategory onClick={() => openModal('고용 형태')}>
              <SearchCategoryName>고용 형태</SearchCategoryName>
              <SearchCategorySelected>
                {workType || '선택'}
              </SearchCategorySelected>
              <img src="images/icon_dropdown.svg" alt="선택" />
            </SearchCategory>
            <SearchCategory onClick={() => openModal('정렬')}>
              <SearchCategoryName>정렬</SearchCategoryName>
              <SearchCategorySelected>
                {sort}
              </SearchCategorySelected>
              <img src="images/icon_dropdown.svg" alt="선택" />
            </SearchCategory>
          </SearchCategories>
        </Form>
      </Container>
      <CategoryModal
        name="직무 선택"
        setCategory={setJob}
        isOpen={isJobModalOpen}
        closeModal={() => closeModal('직무')}
      />
      <CategoryModal
        name="지역 선택"
        setCategory={setLocation}
        isOpen={isLocationModalOpen}
        closeModal={() => closeModal('지역')}
      />
      <CategoryModal
        name="고용 형태"
        setCategory={setWorkType}
        isOpen={isWorkTypeModalOpen}
        closeModal={() => closeModal('고용 형태')}
      />
      <CategoryModal
        name="정렬"
        setCategory={setSort}
        isOpen={isSortModalOpen}
        closeModal={() => closeModal('정렬')}
      />
      <JobCards />
      {isTutorialView && <GestureTutorial>
        <img src="images/tutorial-background.png" alt="" />
        <div>
          <img src="images/tutorial-gesture.png" alt="제스처" />
        </div>
        <button onClick={() => setIsTutorialView(false)}>
          <img src="images/icon_close.svg" alt="닫기" />
        </button>
      </GestureTutorial>}
    </>
  );
}

export default Search;
