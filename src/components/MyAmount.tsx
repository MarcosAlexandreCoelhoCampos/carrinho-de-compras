import React, { useState } from 'react';
import styled from 'styled-components';
import { MyAmountData } from './Interface';
import FormatNumber from '../functions/FormatNumber';

const TotalAmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  white-space: wrap;
  flex-wrap: wrap;
  span {
    white-space: nowrap;
  }
`;

const TotalAmountContent = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

const TotalAmountValue = styled.input`
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

const MyAmount: React.FC<MyAmountData> = ({ setTotalAvailable }) => {
  const [totalAmountValue, setTotalAmountValue] =
    useState<React.SetStateAction<string>>('0,00');

  const treatAndSendValue = (
    event:
      | React.FocusEvent<HTMLInputElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    const valueToNumber = Number(
      Math.abs(+event.currentTarget.value.replace(',', '.')).toFixed(2)
    );
    if (isNaN(valueToNumber)) {
      setTotalAvailable(0);
      setTotalAmountValue('0,00');
    } else {
      setTotalAvailable(valueToNumber);
      setTotalAmountValue(FormatNumber(valueToNumber));
    }
  };

  return (
    <TotalAmountContainer>
      <span>Total Disponível: </span>
      <TotalAmountContent>
        R$
        <TotalAmountValue
          style={{ marginLeft: '8px' }}
          value={`${totalAmountValue}`}
          type='string'
          min='0'
          title='Insira o valor total disponível para as compras'
          onChange={(i) => {
            const newValue = i.target.value.replace(/[^0-9.,]/g, '');
            setTotalAmountValue(newValue);
          }}
          onBlur={treatAndSendValue}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              treatAndSendValue(event);
            }
          }}
        />
      </TotalAmountContent>
    </TotalAmountContainer>
  );
};

export default MyAmount;
