import React, { FC } from "react";
import "./AdminPanel.css";
import * as Components from "../../components/index";
import { Outlet } from "react-router-dom";

const AdminMenu = Components.AdminMenu;

interface TitleProps {
  title?: string;
  subtitle?: string;
}

const AdminPanel: FC<TitleProps> = ({ title, subtitle, children }) => {
  return (
    <div>
      <AdminMenu />

      <main className="wrapper">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminPanel;
