import React, { FC } from 'react';
import * as Components from "../../components/index";

const DashboardMenu = Components.DashboardMenu;
const SideMenu = Components.SideMenu;

interface TitleProps {
  title?: string;
  subtitle?: string;
}

const Home: FC<TitleProps> = ({ title, subtitle, children }) => {
  return (
    <div>
      <DashboardMenu />

      <h1>Home</h1>
    </div>
  );
};

export default Home;