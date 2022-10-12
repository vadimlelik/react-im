import React from "react";
import { Outlet } from "react-router-dom";

const GoodsLayout = () => {
  // const { path } = useRouteMatch();
  return <>{<Outlet />}</>;
};

export default GoodsLayout;
