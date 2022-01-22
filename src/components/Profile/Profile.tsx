import React, { FC } from "react";
import "./Profile.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Menu from "../Menu/Menu";

interface TitleProps {
  title?: string;
  subtitle?: string;
}

const Profile: FC<TitleProps> = ({ title, subtitle, children }) => {
  return (
    <div>
        <h1>Profile</h1>
    </div>
  );
};

export default Profile;
