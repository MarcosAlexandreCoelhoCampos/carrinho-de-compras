import { ReactNode } from 'react';

export interface ItemData {
  id: number;
  name: string;
  price: number;
}

export interface TableItemData {
  item: ItemData;
}

export interface ClientContextData {
  clientAmount: number;
  setClientAmount: (value: number) => void;
  alreadySpent: number;
  setAlreadySpent: (value: number) => void;
  totalLeftover: number;
}

export interface ClientContextProviderProps {
  children: ReactNode;
}
