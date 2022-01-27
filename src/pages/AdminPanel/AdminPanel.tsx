import React, { FC } from "react";
import "./AdminPanel.css";
import * as Components from "../../components/index";
import { Outlet } from "react-router-dom";

const AdminMenu = Components.AdminMenu;

const AdminPanel: FC = () => {
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
