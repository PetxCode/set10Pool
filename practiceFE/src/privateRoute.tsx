import React, { FC, PropsWithChildren, useState } from "react";
import { Navigate, Navigation } from "react-router-dom";

interface iProps {
  children: React.ReactNode;
}

const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState(false);

  return <div>{user ? <div>{children} </div> : <Navigate to="/" />}</div>;
};

export default PrivateRoute;
