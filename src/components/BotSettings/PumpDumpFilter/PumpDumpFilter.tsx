import React, { FC, useEffect, useState } from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { useAppDispatch } from "../../../hooks/redux";
import { addPDFilter, deleteDPFilter, setPDEnabled } from "../../../store/reducers/BotSlice";
import { IPumpDumpFilter } from "../../../types/IPumpDumpFilter";

interface props {
  enabled: boolean;
  filters: IPumpDumpFilter[];
}

const PumpDumpFilter: FC<props> = ({ enabled, filters }) => {
  const dispatch = useAppDispatch();

  const [enabledFilter, setEnabledFilter] = useState<boolean>(false);
  const [currentFilters, setCurrentFilters] = useState<IPumpDumpFilter[]>([]);

  //For adding new filters
  const [intervalValue, setIntervalValue] = useState<number>(0);
  const [priceChangeValue, setPriceChangeValue] = useState<number>(0);

  useEffect(() => {
    setEnabledFilter(enabled);
    setCurrentFilters(filters);
  }, [enabled, filters]);

  return (
    <>
      <Row>
        <Row>
          <Form.Group className="mb-3" controlId="enabled">
            <Form.Check
              type="checkbox"
              label="Включить"
              checked={enabledFilter}
              onChange={(e) => dispatch(setPDEnabled(e.target.checked))}
            />
          </Form.Group>
        </Row>
      </Row>

      <Row>
        <Col>
          <Row>
            <Col>
              <p>Интервал(в минутах):</p>
            </Col>
            <Col>
              <Form.Control
                className="mb-3"
                type="number"
                value={intervalValue}
                onChange={(e) => setIntervalValue(Number(e.target.value))}
              />
            </Col>
          </Row>
        </Col>

        <Col>
          <Row>
            <Col>
              <p>Изменение цены(%):</p>
            </Col>
            <Col>
              <Form.Control
                className="mb-3"
                type="number"
                value={priceChangeValue}
                onChange={(e) => setPriceChangeValue(Number(e.target.value))}
              />
            </Col>
          </Row>
        </Col>

        <Col>
          <Button
            onClick={() =>
              dispatch(
                addPDFilter({
                  period: intervalValue,
                  priceChange: priceChangeValue,
                })
              )
            }
          >
            Добавить новый фильтр
          </Button>
        </Col>
      </Row>

      <Row className="p-3">
        <Table responsive hover bordered>
          <thead>
            <tr>
              <th>Интервал(в минутах)</th>
              <th>Изменение цены(%)</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {currentFilters.map((filter) => (
              <tr key={filter.period}>
                <td>{filter.period}</td>
                <td>{filter.priceChange}</td>
                <td>
                  <Button
                    onClick={() =>
                      dispatch(
                        deleteDPFilter({
                          period: filter.period,
                        })
                      )
                    }
                    className="btn-danger"
                  >
                    Удалить
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </>
  );
};

export default PumpDumpFilter;
