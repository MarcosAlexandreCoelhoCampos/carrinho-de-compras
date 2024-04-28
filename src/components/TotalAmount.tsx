import styled from 'styled-components';
import FormatNumber from '../functions/FormatNumber';
import { useClientContext } from '../contexts/ClientContext';

const TotalAmountContent = styled.div`
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

const AvailableAmount = styled.div<{ $totalLeftover: number }>`
  color: ${(props) => (props.$totalLeftover >= 0 ? '#73ad40' : '#EB5E28')};
  span {
    white-space: nowrap;
  }
`;

const TotalAmount = () => {
  const { alreadySpent, totalLeftover } = useClientContext();

  return (
    <TotalAmountContent>
      <div id='total-amount'>
        Você já gastou R$ {FormatNumber(alreadySpent)}
      </div>
      <AvailableAmount id='available-amount' $totalLeftover={totalLeftover}>
        {`${totalLeftover >= 0 ? 'Está sobrando ' : 'Está faltando '}`}
        <span>
          R$
          {' ' + FormatNumber(Math.abs(totalLeftover))}
        </span>
      </AvailableAmount>
    </TotalAmountContent>
  );
};

export default TotalAmount;
