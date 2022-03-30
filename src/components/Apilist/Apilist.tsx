import React, { FC, useEffect } from "react";
import "./Apilist.css";
import { Table } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { ApiListItem } from "..";
import { getApiList } from "../../store/reducers/ActionCreator";

const ApiList: FC = () => {
  const dispatch = useAppDispatch();
  const { user, isLoading, isAuth } = useAppSelector(
    (state) => state.userReducer
  );
  const { apiList } = useAppSelector((state) => state.userReducer);

  let index = 0;
  const List = apiList.map((apiData) => {
    index++;
    return (
      <ApiListItem
        id={index}
        name={apiData.name}
        status={apiData.status}
        exchange={apiData.exchange}
        apiKey={apiData.key}
        key={apiData.name}
      ></ApiListItem>
    );
  });

  useEffect(() => {
    if (isAuth && user.role === "User") {
      dispatch(getApiList(user.id));
    }
  }, []);

  return (
    <div className="api">
      {isLoading && <p>Загрузка...</p>}
      {!isLoading && (
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
          <tbody>{List}</tbody>
        </Table>
      )}
    </div>
  );
};

export default ApiList;
