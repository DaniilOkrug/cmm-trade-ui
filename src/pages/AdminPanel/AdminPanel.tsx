import React, { FC } from "react";
import "./AdminPanel.css";
import * as Components from "../../components/index";
import { Outlet } from "react-router-dom";

const DashboardMenu = Components.DashboardMenu;

interface TitleProps {
  title?: string;
  subtitle?: string;
}

const AdminPanel: FC<TitleProps> = ({ title, subtitle, children }) => {
  return (
    <div>
      <DashboardMenu />

      <h1>AdminPanel</h1>
      <main className="wrapper">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminPanel;
