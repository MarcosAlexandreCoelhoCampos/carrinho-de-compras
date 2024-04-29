import { createContext, useState, useContext } from 'react';
import {
  ClientContextData,
  ClientContextProviderProps,
} from '../interfaces/Interface';

const ClientContext = createContext<ClientContextData>({} as ClientContextData);

const ClientContextProvider = ({ children }: ClientContextProviderProps) => {
  const [clientAmount, setClientAmount] = useState<number>(0);
  const [alreadySpent, setAlreadySpent] = useState<number>(0);

  const totalLeftover: number = clientAmount - alreadySpent;

  return (
    <ClientContext.Provider
      value={{
        clientAmount,
        setClientAmount,
        alreadySpent,
        setAlreadySpent,
        totalLeftover,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export const useClientContext = () => useContext(ClientContext);
export { ClientContext, ClientContextProvider };
