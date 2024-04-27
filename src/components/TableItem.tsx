import React, { useState } from 'react';
import styled from 'styled-components';
import { TableItemData } from './Interface';
import FormatNumber from '../functions/FormatNumber';

const ShoppingCartItemQuantity = styled.td`
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

const PlusDecreasesButton = styled.button<{ $decrease?: boolean }>`
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

const TableItem: React.FC<TableItemData> = ({
  item,
  totalSpent,
  setTotalSpent,
}) => {
  const [itemQuantity, setItemQuantity] = useState(0);
  const totalSpentItem = itemQuantity * item.price;

  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>R$ {FormatNumber(item.price)}</td>
      <ShoppingCartItemQuantity>
        <div>
          <PlusDecreasesButton
            $decrease={true}
            onClick={() => {
              if (itemQuantity - 1 >= 0) {
                setItemQuantity(itemQuantity - 1);
                setTotalSpent(totalSpent - item.price);
              }
            }}
            title={`Diminuir a quantidade de ${item.name}`}
          ></PlusDecreasesButton>
          <p id='count'>{itemQuantity}</p>
          <PlusDecreasesButton
            onClick={() => {
              setItemQuantity(itemQuantity + 1);
              setTotalSpent(totalSpent + item.price);
            }}
            title={`Aumentar a quantidade de ${item.name}`}
          ></PlusDecreasesButton>
        </div>
      </ShoppingCartItemQuantity>
      <td>R$ {FormatNumber(totalSpentItem)}</td>
    </tr>
  );
};

export default TableItem;
