import styled from 'styled-components';

export const TotalAmountContent = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  text-align: end;
  @media (max-width: 720px) {
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;

export const AvailableAmount = styled.div<{ $totalLeftover: number }>`
  color: ${(props) => (props.$totalLeftover >= 0 ? '#73ad40' : '#EB5E28')};
  span {
    white-space: nowrap;
  }
`;
