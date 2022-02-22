import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import {
  fetchJobCategories,
  fetchJobTypeCategories,
  fetchLocationCategories,
  requestSearch,
} from '../apis/search';
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
  align-items: center;
  height: 60px;
  margin-top: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayscale_07};
`;

const LoginButton = styled.button`
  ${mixins.fontStyle.body_04};  
  height: 36px;
  padding: 6px 20px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue_02};
  border: none;
  border-radius: 4px;

  a {
    text-decoration: none; 
    color: ${({ theme }) => theme.colors.white}; 
  }
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

function Search({ token }: {
  token: string | null
}) {
  const navigate = useNavigate();
  // TODO: 하드 코딩함, Home과 겹치는 부분 리팩토링
  const [keyword, handleKeyword] = useInput('');
  const [job, setJob] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');
  const [sort, setSort] = useState('최신순');

  const [jobs, setJobs] = useState<string[]>([]);
  const [locations, setLocations] = useState<string[]>([]);
  const [jobTypes, setJobTypes] = useState<string[]>([]);
  const sorts = ['최신순', '인기순'];

  const [isTutorialView, setIsTutorialView] = useState(false);
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isjobTypeModalOpen, setIsjobTypeModalOpen] = useState(false);
  const [isSortModalOpen, setIsSortModalOpen] = useState(false);

  const [searchResults, setSearchReults] = useState<any[]>([]);

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

  // 카테고리 불러오기
  useEffect(() => {
    (async () => {
      const res = await fetchJobCategories();
      setJobs(res);
    })();

    (async () => {
      const res = await fetchJobTypeCategories();
      setJobTypes(res);
    })();

    (async () => {
      const res = await fetchLocationCategories();
      setLocations(res);
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
      setIsjobTypeModalOpen(true);
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
      setIsjobTypeModalOpen(false);
    }

    if (category === '정렬') {
      setIsSortModalOpen(false);
    }
  };

  const handleSearch = async () => {
    let sorting = 'pd';
    if (sort === '인기순') {
      sorting = 'rc';
    }

    const searchParams = {
      keywords: keyword,
      start: 0,
      count: 10,
      job,
      loc_mcd: location,
      loc_bcd: location,
      jobType,
      sort: sorting,
    };
    const { jobs } = await requestSearch(searchParams);
    console.log(jobs);
    setSearchReults(jobs);
  };

  return (
    <>
      <Container>
        <Header>
          <LogoBox>
            <img src="images/logo.png" alt="어구저구 로고" />
          </LogoBox>
          {!token
            ? <LoginButton onClick={() => navigate('/signin')}>
            로그인
            </LoginButton>
            : <MyPageButton>
              <Link to="/mypage">
                <img src="images/icon_my.png" alt="마이 페이지" />
              </Link>
            </MyPageButton>}
        </Header>
        <Form>
          <SearchBar
            keyword={keyword}
            handleKeyword={handleKeyword}
            handleSearch={handleSearch}
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
                {jobType || '선택'}
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
        data={jobs}
        setCategory={setJob}
        isOpen={isJobModalOpen}
        closeModal={() => closeModal('직무')}
      />
      <CategoryModal
        name="지역 선택"
        data={locations}
        setData={setLocations}
        setCategory={setLocation}
        isOpen={isLocationModalOpen}
        closeModal={() => closeModal('지역')}
      />
      <CategoryModal
        name="고용 형태"
        data={jobTypes}
        setCategory={setJobType}
        isOpen={isjobTypeModalOpen}
        closeModal={() => closeModal('고용 형태')}
      />
      <CategoryModal
        name="정렬"
        data={sorts}
        setCategory={setSort}
        isOpen={isSortModalOpen}
        closeModal={() => closeModal('정렬')}
      />
      <JobCards searchResults={searchResults} />
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
