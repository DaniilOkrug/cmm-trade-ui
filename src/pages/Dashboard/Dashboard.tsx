import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import * as Components from "../../components/index";

const DashboardMenu = Components.DashboardMenu;

const Dashboard: FC = () => {
  return (
    <div>
      <DashboardMenu />

      <main className="wrapper">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
