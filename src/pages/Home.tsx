import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Modal from '../components/Modal';
import SearchBar from '../components/SearchBar';
import { Container } from '../components/styled';
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

const LogoBox = styled.div`
  margin-top: 40vh;
  text-align: center;
`;

const Form = styled.form`
  margin-top: 20px;
`;

const SearchCategories = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: nowrap;
  overflow: auto;

  li {
    flex: 0 0 auto;
  }
`;

const SearchCategory = styled.li`
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

const SearchCategoryName = styled.div`
  color: ${({ theme }) => theme.colors.grayscale_02};
`;

const SearchCategorySelected = styled.div`
  color: ${({ theme }) => theme.colors.blue_01};
`;

function Home() {
  return (
    <Container>
      <LoginButton>
        <Link to="/signin">로그인</Link>
      </LoginButton>
      <LogoBox>
        <img src="images/logo.png" alt="어구저구 로고" />
      </LogoBox>
      <Form>
        <SearchBar />
        <SearchCategories>
          <SearchCategory>
            <SearchCategoryName>직무</SearchCategoryName>
            <SearchCategorySelected>선택</SearchCategorySelected>
            <img src="images/icon_dropdown.svg" alt="선택" />
          </SearchCategory>
          <SearchCategory>
            <SearchCategoryName>지역</SearchCategoryName>
            <SearchCategorySelected>선택</SearchCategorySelected>
            <img src="images/icon_dropdown.svg" alt="선택" />
          </SearchCategory>
          <SearchCategory>
            <SearchCategoryName>고용 형태</SearchCategoryName>
            <SearchCategorySelected>선택</SearchCategorySelected>
            <img src="images/icon_dropdown.svg" alt="선택" />
          </SearchCategory>
          <SearchCategory>
            <SearchCategoryName>정렬</SearchCategoryName>
            <SearchCategorySelected>최신순</SearchCategorySelected>
            <img src="images/icon_dropdown.svg" alt="선택" />
          </SearchCategory>
        </SearchCategories>

      </Form>
    </Container>
  );
}

export default Home;
