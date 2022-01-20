import React, { FC } from 'react';
import './DashboardMenu.css'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Menu from '../../components/Menu/Menu';

interface TitleProps {
    title?: string;
    subtitle?: string;
}

const DashboardMenu: FC<TitleProps> = ({ title, subtitle, children }) => {
    return (
        <header>
            
        </header>
    );
};

export default DashboardMenu;