import React, { FC } from "react";
import "./Statistics.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  Chart as ChartJS,
  Tooltip,
} from "chart.js";

interface TitleProps {
  title?: string;
  subtitle?: string;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Statistics: FC<TitleProps> = ({ title, subtitle, children }) => {
  const optionsGeneral = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Общая",
      },
    },
  };

  const optionsDay = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "День",
      },
    },
  };

  const optionsWeek = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Неделя",
      },
    },
  };

  const optionsMonth = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Месяц",
      },
    },
  };

  const hours = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23,
  ];

  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dataGeneral = {
    labels: labels,
    datasets: [
      {
        tension: 0.2,
        data: [
          26, 80, -17, -14, 92, 5, 30, -23, 37, 29, -35, -27, -30, -21, 86, -26,
          -76, 79, 26, 96, -19, -48, 8, -59, 73, 84, 57, -51, -1, -80, -25,
        ],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const dataDay = {
    labels: hours,
    datasets: [
      {
        tension: 0.2,
        data: [
          26, 80, -17, -14, 92, 5, 30, -23, 37, 29, -35, -27, -30, -21, 86, -26,
          -76, 79, 26, 96, -19, -48, 8, -59, 73, 84, 57, -51, -1, -80, -25,
        ],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const dataWeek = {
    labels: week,
    datasets: [
      {
        tension: 0.2,
        data: [
          26, 80, -17, -14, 92, 5, 30, -23, 37, 29, -35, -27, -30, -21, 86, -26,
          -76, 79, 26, 96, -19, -48, 8, -59, 73, 84, 57, -51, -1, -80, -25,
        ],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const dataMonth = {
    labels: days,
    datasets: [
      {
        tension: 0.2,
        data: [
          26, 80, -17, -14, 92, 5, 30, -23, 37, 29, -35, -27, -30, -21, 86, -26,
          -76, 79, 26, 96, -19, -48, 8, -59, 73, 84, 57, -51, -1, -80, -25,
        ],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="statistics">
      <Container fluid className="p-3">
        <Card>
          <Card.Body>
            <Col>
              <h3>Стастистика аккаунта</h3>

              <hr />

              <Row>
                <Col>
                  <p>Доход общий: 2327$/38%</p>
                  <p>Доход за день: 13$/2%</p>
                </Col>
                <Col>
                  <p>Доход за неделю: 873$/7.23%</p>
                  <p>Доход за месяц: 1249/11.3%</p>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Line
                    className="graph"
                    options={optionsGeneral}
                    data={dataGeneral}
                  />
                  <Col>
                    <Line
                      className="graph"
                      options={optionsWeek}
                      data={dataWeek}
                    />
                  </Col>
                </Col>
                <Col>
                  <Line className="graph" options={optionsDay} data={dataDay} />
                  <Col>
                    <Line
                      className="graph"
                      options={optionsMonth}
                      data={dataMonth}
                    />
                  </Col>
                </Col>
              </Row>
            </Col>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Statistics;
