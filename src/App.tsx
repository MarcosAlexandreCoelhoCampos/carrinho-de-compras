import './App.css';
import Table from './components/Table/Table.tsx';
import { ClientContextProvider } from './contexts/ClientContext.tsx';

function App() {
  return (
    <ClientContextProvider>
      <Table />;
    </ClientContextProvider>
  );
}

export default App;
