import React, { FC } from "react";
import "./Apilist.css";
import { Table } from "react-bootstrap";

interface TitleProps {
  title: string;
  status: string;
  key: string;
}

const Apilist: FC<TitleProps> = ({ title, status, children }) => {
  return (
    <div className="api">
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Название</th>
            <th>Биржа</th>
            <th>Статус</th>
            <th>Публичный ключ</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            {Array.from({ length: 5 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Apilist;
