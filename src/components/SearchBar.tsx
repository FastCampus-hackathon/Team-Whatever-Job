import styled from 'styled-components';

import mixins from '../styles/mixins';

interface SearchBarProps {
  keyword: string;
  handleKeyword: any;
}

const SearchContainer = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  ${mixins.fontStyle.body_07};
  width: 100%;
  margin-bottom: 32px;
  padding: 12px 18px;
  background-color: ${({ theme }) => theme.colors.blue_gray_02};
  border: 1px solid ${({ theme }) => theme.colors.blue_03};
  box-sizing: border-box;
  border-radius: 40px;
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 14px;
  right: 18px; 
  display: block;
  width: 24px;
  height: 24px;
`;

function SearchBar({ keyword, handleKeyword }: SearchBarProps) {
  return (
    <SearchContainer>
      <SearchInput
        type="text"
        autoFocus={true}
        placeholder="회사, 직무, 키워드 검색"
        value={keyword}
        onChange={handleKeyword}
      />
      <SearchIcon>
        <img src="images/icon_magnifier.svg" alt="검색" />
      </SearchIcon>
    </SearchContainer>
  );
}

export default SearchBar;
