import React, { useEffect, useState } from 'react';
import { getFoodItems } from '../../services/FoodService.tsx';
import TableItem from '../TableItem/TableItem.tsx';
import TotalAmount from '../TotalAmount/TotalAmount.tsx';
import MyAmount from '../MyAmount/MyAmount.tsx';
import { ItemData } from '../../interfaces/Interface.ts';
import * as S from './S.Table.tsx';

const Table = () => {
  const [foodItems, setFoodItems] = useState<ItemData[]>([]);

  useEffect(() => {
    getFoodItems().then((response) => {
      setFoodItems(response.data);
    });
  }, []);

  return (
    <S.Main id='main'>
      <S.Header>
        <S.MaxWidth>
          <S.HeaderContent>
            <MyAmount />
            <TotalAmount />
          </S.HeaderContent>
        </S.MaxWidth>
      </S.Header>
      <S.MaxWidth>
        <S.MainTitle>Meu Carrinho de Compras</S.MainTitle>
        <S.ShoppingCart>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Preço</th>
              <th>Quantidade</th>
              <th>Preço total</th>
            </tr>
          </thead>
          <tbody>
            {foodItems.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <TableItem item={item} />
                </React.Fragment>
              );
            })}
          </tbody>
        </S.ShoppingCart>
      </S.MaxWidth>
    </S.Main>
  );
};

export default Table;
