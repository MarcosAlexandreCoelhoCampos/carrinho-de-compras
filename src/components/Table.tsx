import React, { useEffect, useState } from 'react';
import { getFoodItems } from '../services/FoodService.tsx';
import TableItem from './TableItem.tsx';
import TotalAmount from './TotalAmount.tsx';
import MyAmount from './MyAmount.tsx';
import styled from 'styled-components';
import { ItemData } from './Interface.ts';

const MaxWidth = styled.div`
  width: 875px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 920px) {
    width: 100%;
    max-width: 800px;
    padding: 0 15px;
  }
  @media (max-width: 500px) {
    padding: 0 8px;
  }
`;

const Header = styled.header`
  background-color: #252422;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0;
  color: #fffcf2;
  gap: 15px;
  font-size: 1.5rem;

  @media (max-width: 720px) {
    flex-direction: column;
  }

  @media (max-width: 500px) {
    font-size: 1.25rem;
  }
`;

const MainTitle = styled.h1`
  display: flex;
  font-size: 1.5rem;
  margin: 50px 0;
  justify-content: center;
  @media (max-width: 500px) {
    font-size: 1.25rem;
  }
`;

const ShoppingCart = styled.table`
  width: 100%;
  font-size: 1.25rem;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid;
    margin: 0 auto;
    text-align: center;
  }

  th {
    background-color: #252422;
    color: #fffcf2;
  }

  tr:nth-child(even) {
    background-color: #e1e1e1;
  }

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

const Table = () => {
  const [foodItems, setFoodItems] = useState<ItemData[]>([]);
  const [totalAvailable, setTotalAvailable] = useState(0);
  const [totalSpent, setTotalSpent] = useState(0);

  useEffect(() => {
    getFoodItems().then((response) => {
      setFoodItems(response.data);
    });
  }, []);

  return (
    <div id='main' style={{ padding: '0px 0px 50px 0px' }}>
      <Header>
        <MaxWidth>
          <HeaderContent>
            <MyAmount setTotalAvailable={setTotalAvailable} />
            <TotalAmount
              totalAvailable={totalAvailable}
              totalSpent={totalSpent}
            />
          </HeaderContent>
        </MaxWidth>
      </Header>

      <MaxWidth>
        <MainTitle>Meu Carrinho de Compras</MainTitle>
        <ShoppingCart>
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
                  <TableItem
                    item={item}
                    totalSpent={totalSpent}
                    setTotalSpent={setTotalSpent}
                  />
                </React.Fragment>
              );
            })}
          </tbody>
        </ShoppingCart>
      </MaxWidth>
    </div>
  );
};

export default Table;
