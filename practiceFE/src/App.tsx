import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./mainRouter";
import { GlobalProvider } from "./global/GlobalProvider";

const App = () => {
  return (
    <GlobalProvider>
      <RouterProvider router={mainRouter} />
    </GlobalProvider>
  );
};

export default App;
