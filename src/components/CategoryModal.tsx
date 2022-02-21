import { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

import mixins from '../styles/mixins';

interface ModalProps {
  name: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  isOpen: boolean;
  closeModal: () => void;
}

const styles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },

  content: {
    top: '40vh',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: 0,
    borderRadius: '8px 8px 0px 0px',
  },
};

const ModalHeader = styled.div`
  ${mixins.fontStyle.headline_04};
  display: flex;
  justify-content: space-between;

  div {
    margin: 20px 24px;
  }
`;

const Categories = styled.ul<any>`
  display: grid; 
  grid-template-columns: ${({ isOneFr }) => (
    isOneFr
      ? '1fr'
      : '1fr 1fr'
  )};
`;

const CategoryItem = styled.li<any>`
  ${mixins.fontStyle.body_03};
  text-align: ${({ isOneFr }) => (
    isOneFr
      ? 'left'
      : 'center'
  )}; 
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.grayscale_07};
  box-sizing: border-box;
`;

const SelectButton = styled.button`
  ${mixins.fontStyle.body_02};
  width: 100%;
  padding: 12px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue_02};
  border: none;
`;

function CategoryModal({
  name,
  setCategory,
  isOpen,
  closeModal,
}: ModalProps) {
  const [categoryItems, setCategoryItems] = useState(new Array(20).fill('선택 아이템'));

  let isOneFr = false;
  if (name === '고용 형태' || name === '정렬') {
    isOneFr = true;
  }

  const handleClickItem = (item: string) => {
    setCategory(item);
    closeModal();
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={styles}
      >
        <ModalHeader>
          <div>{name}</div>
          <div onClick={closeModal}>
            <img src="images/icon_close.svg" alt="닫기" />
          </div>
        </ModalHeader>

        <Categories isOneFr={isOneFr}>
          {categoryItems.map((item, i) => (
            <CategoryItem
              key={i}
              onClick={() => handleClickItem(item)}
            >
              {item}
            </CategoryItem>
          ))}
        </Categories>
        <SelectButton>
          선택 완료
        </SelectButton>
      </Modal>
    </div>
  );

}

export default CategoryModal;
