import styled from 'styled-components';

import mixins from '../styles/mixins';

export const Header = styled.h1`
    ${mixins.fontStyle.headline_03};
    padding: 12px 0;
    text-align: center; 
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayscale_07};
  `;

export const Container = styled.div`
    position: relative;
    margin: 0 24px;
  `;

export const InputBox = styled.div`
    margin-bottom: 16px;
  `;

export const Label = styled.label`
    ${mixins.fontStyle.body_07};
    display: block;
    margin-bottom: 4px;
  `;

export const Input = styled.input`
    ${mixins.fontStyle.body_07};
    width: 100%;
    height: 50px;
    padding: 12px 16px;
    box-sizing: border-box;
    border: 1px solid #E5E5E5;
    border-radius: 10px;
  `;

export const SubmitButton = styled.button<any>`
    ${mixins.fontStyle.body_02};
    position: fixed;
    bottom: 48px;
    left: 50%;
    transform: translate(-50%, 0);
    display: block;
    width: 90%;
    height: 52px;
    background-color: ${({ theme, isActive }) => (
    isActive
      ? theme.colors.blue_02
      : theme.colors.blue_03
  )};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    border-radius: 8px;
  `;
