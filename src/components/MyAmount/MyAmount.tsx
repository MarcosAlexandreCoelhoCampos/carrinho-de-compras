import React, { useState } from 'react';
import FormatNumber from '../../functions/FormatNumber';
import { useClientContext } from '../../contexts/ClientContext';
import * as S from './S.MyAmount';

const MyAmount = () => {
  const [totalAmountValue, setTotalAmountValue] =
    useState<React.SetStateAction<string>>('0,00');

  const { setClientAmount } = useClientContext();

  const treatAndSendValue = (
    event:
      | React.FocusEvent<HTMLInputElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    const valueToNumber = Number(
      Math.abs(+event.currentTarget.value.replace(',', '.')).toFixed(2)
    );

    if (isNaN(valueToNumber)) {
      setClientAmount(0);
      setTotalAmountValue('0,00');
    } else {
      setClientAmount(valueToNumber);
      setTotalAmountValue(FormatNumber(valueToNumber));
    }
  };

  return (
    <S.TotalAmountContainer>
      <p>Total Disponível: </p>
      <S.TotalAmountContent>
        R$
        <S.TotalAmountValue
          value={`${totalAmountValue}`}
          type='text'
          min='0'
          title='Insira o valor total disponível para as compras'
          onChange={(i) => {
            const newValue = i.target.value.replace(/[^0-9.,]/g, '');
            setTotalAmountValue(newValue);
          }}
          onBlur={treatAndSendValue}
          onKeyDown={(event) => {
            if (event.key === 'Enter') treatAndSendValue(event);
          }}
        />
      </S.TotalAmountContent>
    </S.TotalAmountContainer>
  );
};

export default MyAmount;
