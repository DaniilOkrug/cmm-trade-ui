import React, { FC } from 'react';
import * as Components from "../../components/index";

const DashboardMenu = Components.DashboardMenu;
const SideMenu = Components.SideMenu;

const Home: FC = () => {
  return (
    <div>
      <DashboardMenu />

      <h1>Home</h1>
    </div>
  );
};

export default Home;