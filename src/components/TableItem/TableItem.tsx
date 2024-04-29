import React, { useState } from 'react';
import { TableItemData } from '../../interfaces/Interface';
import FormatNumber from '../../functions/FormatNumber';
import { useClientContext } from '../../contexts/ClientContext';
import * as S from './S.TableItem';

const TableItem: React.FC<TableItemData> = ({ item }) => {
  const [itemQuantity, setItemQuantity] = useState(0);
  const totalSpentItem = itemQuantity * item.price;

  const { alreadySpent, setAlreadySpent } = useClientContext();

  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>R$ {FormatNumber(item.price)}</td>
      <S.ShoppingCartItemQuantity>
        <div>
          <S.PlusDecreasesButton
            $decrease={true}
            onClick={() => {
              if (itemQuantity - 1 >= 0) {
                setItemQuantity(itemQuantity - 1);
                setAlreadySpent(alreadySpent - item.price);
              }
            }}
            title={`Diminuir a quantidade de ${item.name}`}
          ></S.PlusDecreasesButton>
          <p id='count'>{itemQuantity}</p>
          <S.PlusDecreasesButton
            onClick={() => {
              setItemQuantity(itemQuantity + 1);
              setAlreadySpent(alreadySpent + item.price);
            }}
            title={`Aumentar a quantidade de ${item.name}`}
          ></S.PlusDecreasesButton>
        </div>
      </S.ShoppingCartItemQuantity>
      <td>R$ {FormatNumber(totalSpentItem)}</td>
    </tr>
  );
};

export default TableItem;
