import styled from 'styled-components';

export const Main = styled.div`
  padding: 0px 0px 50px 0px;
`;

export const MaxWidth = styled.div`
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

export const Header = styled.header`
  background-color: #252422;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const HeaderContent = styled.div`
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

export const MainTitle = styled.h1`
  display: flex;
  font-size: 1.5rem;
  margin: 50px 0;
  justify-content: center;
  @media (max-width: 500px) {
    font-size: 1.25rem;
  }
`;

export const ShoppingCart = styled.table`
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
