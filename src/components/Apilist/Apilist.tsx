import React, { FC } from "react";
import "./Apilist.css";
import { Button, Table } from "react-bootstrap";

const Apilist: FC = () => {
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
              <div className="d-flex flex-row">
                <Button className="m-1" variant="outline-dark">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-play-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                  </svg>
                </Button>
                <Button className="m-1" variant="outline-danger">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </Button>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Apilist;
