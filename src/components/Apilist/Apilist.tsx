import React, { FC } from "react";
import "./Apilist.css";
import { Button, Table } from "react-bootstrap";

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
            <td>test</td>
            <td>Binance Spot</td>
            <td>Active</td>
            <td>h24j6kjhn6b7l3k24;l4kk6kj312l3kkj56</td>
            <td>
              <Button className="m-1">Проверить</Button>{' '}
              <Button className="m-1">Удалить</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Apilist;
