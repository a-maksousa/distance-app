import { useRoutes } from "react-router-dom";
import MainRoutes from "routes";

const App = () => {
  const Routes = useRoutes(MainRoutes);
  return Routes;
};

export default App;
