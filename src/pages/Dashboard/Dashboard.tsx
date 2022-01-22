import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import * as Components from "../../components/index";

const DashboardMenu = Components.DashboardMenu;
const SideMenu = Components.SideMenu;

interface TitleProps {
  title?: string;
  subtitle?: string;
}

const Dashboard: FC<TitleProps> = ({ title, subtitle, children }) => {
  return (
    <div>
      <DashboardMenu />

      <SideMenu />

      <main className="wrapper">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
