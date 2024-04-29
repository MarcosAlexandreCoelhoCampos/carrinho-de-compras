import styled from 'styled-components';

export const TotalAmountContent = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  text-align: end;
  gap: 10px;
  width: 100%;

  div {
    display: flex;
    gap: 5px;
    flex-direction: row;
  }
  span {
    white-space: nowrap;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  @media (max-width: 720px) {
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
  @media (max-width: 550px) {
    div {
      flex-direction: column;
    }
  }
`;

export const AvailableAmount = styled.div<{ $totalLeftover: number }>`
  color: ${(props) => (props.$totalLeftover >= 0 ? '#73ad40' : '#EB5E28')};
`;
