import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import * as Components from "../../components/index";

const DashboardMenu = Components.DashboardMenu;

interface TitleProps {
  title?: string;
  subtitle?: string;
}

const Dashboard: FC<TitleProps> = ({ title, subtitle, children }) => {
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
