import FormatNumber from '../../functions/FormatNumber';
import { useClientContext } from '../../contexts/ClientContext';
import * as S from './S.TotalAmount';

const TotalAmount = () => {
  const { alreadySpent, totalLeftover } = useClientContext();

  return (
    <S.TotalAmountContent>
      <div id='total-amount'>
        Você já gastou R$ {FormatNumber(alreadySpent)}
      </div>
      <S.AvailableAmount id='available-amount' $totalLeftover={totalLeftover}>
        {`${totalLeftover >= 0 ? 'Está sobrando ' : 'Está faltando '}`}
        <span>
          R$
          {' ' + FormatNumber(Math.abs(totalLeftover))}
        </span>
      </S.AvailableAmount>
    </S.TotalAmountContent>
  );
};

export default TotalAmount;
