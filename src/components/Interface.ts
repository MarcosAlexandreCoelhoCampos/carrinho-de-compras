export interface ItemData {
  id: number;
  name: string;
  price: number;
}

export interface TableItemData {
  item: ItemData;
  totalSpent: number;
  setTotalSpent: (value: number) => void;
}

export interface TotalAmountData {
  totalAvailable: number;
  totalSpent: number;
}

export interface MyAmountData {
  setTotalAvailable: (value: number) => void;
}
