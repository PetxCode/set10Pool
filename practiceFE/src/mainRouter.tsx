import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import RegisterScreen from "./page/RegisterScreen";
import QuestionScreen from "./page/QuestionScreen";
import LoginScreen from "./page/SignIn";
import DisplayScreen from "./page/DisplayScreen";
import { MainQuestion } from "./page/MainQuestion";
import SliderComponents from "./components/SliderComponents";
import { InfiniteSliderHoverSpeed } from "./components/InfiniteSliderHoverSpeed";

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
    path: "/slide",
    element: <InfiniteSliderHoverSpeed />,
  },
  {
    path: "/display",
    element: <DisplayScreen />,
  },
  {
    path: "/main",
    element: <MainQuestion />,
  },
  {
    path: "/slider",
    element: <SliderComponents />,
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
