import styled from 'styled-components';

export const TotalAmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  white-space: wrap;
  flex-wrap: wrap;
  span {
    white-space: nowrap;
  }
`;

export const TotalAmountContent = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

export const TotalAmountValue = styled.input`
  margin-left: 8px;
  color: #fffcf2;
  background-color: #00000000;
  font-size: 1.5rem;
  width: min-content;
  box-shadow: none;
  box-sizing: border-box;
  border: 2px solid #fffcf2;
  padding: 0px 0px 0px 5px;
  @media (max-width: 500px) {
    font-size: 1.25rem;
  }
`;
