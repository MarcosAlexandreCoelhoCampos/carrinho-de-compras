import styled from 'styled-components';

export const ShoppingCartItemQuantity = styled.td`
  div {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
    * {
      margin: 0;
    }
  }
`;

export const PlusDecreasesButton = styled.button<{ $decrease?: boolean }>`
  background-color: transparent;
  border: none;
  position: relative;
  width: 20px;
  height: 20px;
  cursor: pointer;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${(props) => (props.$decrease ? '#EB5E28' : '#4f772d')};
  }

  &:before {
    display: ${(props) => (props.$decrease ? 'none' : 'flex')};
    height: 100%;
    width: 2px;
  }

  &:after {
    height: 2px;
    width: 100%;
  }
`;
