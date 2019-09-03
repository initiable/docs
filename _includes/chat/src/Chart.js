import React, { Component } from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: [
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02",
    "2019-08-02T",
    "2019-08-02T",
    "2019-08-02T",
    "2019-08-02T",
    "2019-08-02T",
    "2019-08-02T",
    "2019-08-02T",
    "2019-08-02T",
    "2019-08-02T",
    "2019-08-02T",
    "2019-08-02T",
    "2019-08-02T",
    "2019-08-02T",
    "2019-08-02T",
    "2019-08-02T",
    "2019-08-02T",
    "2019-08-02T",
    "2019-08-02T",
    "2019-08-02T",
    "2019-08-02T",
    "2019-08-02T",
    "2019-08-02T",
    "2019-08-02T",
    "2019-08-02T",
    "2019-08-02T",
    "2019-08-02T",
    "2019-08-02T",
    "2019-08-02T",
    "2019-08-02T"
  ],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [
        178,
        599,
        807,
        1013,
        1128,
        1806,
        1776,
        1454,
        1438,
        1438,
        1173,
        1007,
        1097,
        1006,
        7393,
        531,
        1028,
        1611,
        727,
        1062,
        1288,
        658,
        2299,
        329,
        534,
        1315.8,
        2477,
        848,
        649,
        1279,
        2053,
        1007,
        991,
        1196.55,
        115,
        727.5,
        3419,
        1098,
        1597,
        737,
        1599,
        775,
        1073,
        674,
        1397,
        534,
        812,
        438,
        627,
        1098,
        274,
        278,
        901,
        150.1,
        553.1,
        817,
        1606,
        2091,
        3542,
        760.5,
        1019,
        646.5,
        1198,
        1093,
        1135.1,
        1599,
        723.6,
        1048.5,
        1211.5,
        657,
        2823,
        1397,
        2506,
        1897,
        499,
        2879.1,
        548.1,
        3143.7,
        599,
        3244,
        4000,
        1888,
        2124,
        685,
        1049,
        1931.1,
        338,
        419,
        1239,
        1751,
        549,
        696,
        1990,
        705,
        459,
        1395,
        1592,
        2147,
        383.1,
      ]
    }
  ]
};
class Chart extends Component {
  render() {
    return (
      <div style={{ width: 1100 }}>
        <h2>KLOC</h2>
        <Line data={data} />
      </div>
    );
  }
}

export default Chart;