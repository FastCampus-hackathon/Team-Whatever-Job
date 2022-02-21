import { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

import mixins from '../styles/mixins';

interface ModalProps {
  name: string;
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

const Categories = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr ;
`;

const CategoryItem = styled.li`
  ${mixins.fontStyle.body_03};
  text-align: center; 
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.grayscale_07};
  box-sizing: border-box;
`;

const SelectButton = styled.button`
  ${mixins.fontStyle.body_02};
  width: 100%;
  padding: 12px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue_02};
`;

function CategoryModal({ name, isOpen, closeModal }: ModalProps) {
  const [categoryItems, setCategoryItems] = useState(new Array(20).fill(true));

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

        <Categories>
          {categoryItems.map((item, i) => (
            <CategoryItem key={i}>선택 아이템 </CategoryItem>
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
