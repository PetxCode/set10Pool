import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import RegisterScreen from "./page/RegisterScreen";
import QuestionScreen from "./page/QuestionScreen";
import LoginScreen from "./page/SignIn";
import PrivateRoute from "./privateRoute";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/register",
    element: <RegisterScreen />,
  },
  {
    path: "/login",
    element: <LoginScreen />,
  },
  {
    path: "/question",
    element: (
      //   <PrivateRoute>
      <QuestionScreen />
      //   </PrivateRoute>
    ),
  },
]);
