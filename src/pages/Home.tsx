import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import CategoryModal from '../components/CategoryModal';
import SearchBar from '../components/SearchBar';
import { Container } from '../components/styled';
import useInput from '../hooks/useInput';
import mixins from '../styles/mixins';

const LoginButton = styled.button`
  ${mixins.fontStyle.body_04};  
  position: fixed;
  top: 20px;
  right: 24px;
  padding: 8px 20px;
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
  position: fixed;
  top: 20px;
  right: 24px;
  padding: 8px 20px;
  border: none;
  border-radius: 4px;
  background-color: inherit;
`;

const LogoBox = styled.div`
  margin-top: 40vh;
  text-align: center;
`;

export const Form = styled.form`
  margin-top: 20px;
`;

export const SearchCategories = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: nowrap;
  overflow: auto;

  li {
    flex: 0 0 auto;
  }
`;

export const SearchCategory = styled.li`
  ${mixins.fontStyle.body_08};
  display: flex;
  flex-wrap: nowrap;
  gap: 6px; 
  overflow: auto;
  padding: 8px 12px;
  border: 1px solid ${({ theme }) => theme.colors.blue_03};
  box-sizing: border-box;
  border-radius: 6px;
`;

export const SearchCategoryName = styled.div`
  color: ${({ theme }) => theme.colors.grayscale_02};
`;

export const SearchCategorySelected = styled.div`
  color: ${({ theme }) => theme.colors.blue_01};
`;

function Home() {
  const [token, setToken] = useState<string | null>(null);
  const [keyword, handleKeyword] = useInput('');
  const [job, setJob] = useState('');
  const [location, setLocation] = useState('');
  const [workType, setWorkType] = useState('');
  const [sort, setSort] = useState('최신순');

  const [isJobModalOpen, setIsJobModalOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isWorkTypeModalOpen, setIsWorkTypeModalOpen] = useState(false);
  const [isSortModalOpen, setIsSortModalOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('authToken') !== null) {
      setToken(localStorage.getItem('authToken'));
    }
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
        {!token
          ? <LoginButton>
            <Link to="/signin">로그인</Link>
          </LoginButton>
          : <MyPageButton>
            <Link to="/signin">
              <img src="images/icon_my.png" alt="" />
            </Link>
          </MyPageButton>}
        <LogoBox>
          <img src="images/logo.png" alt="어구저구 로고" />
        </LogoBox>
        <Form>
          <Link to="/search">
            <SearchBar
              keyword={keyword}
              handleKeyword={handleKeyword}
            />
          </Link>
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
    </>
  );
}

export default Home;
