import ListaRepositorios from "./components/ListaRepositorios";
import { useRepositorios } from './contexts/RepositoriosContext';

function App() {
  const { repos } = useRepositorios();
  return (
    <div>
      <h1>Lista de repositórios</h1>
      <ListaRepositorios repositorios={repos} />
    </div>
  );
}
export default App;
