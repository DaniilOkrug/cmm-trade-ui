import React, { FC } from 'react';

interface TitleProps {
  title?: string;
  subtitle?: string;
}

const Home: FC<TitleProps> = ({ title, subtitle, children }) => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;