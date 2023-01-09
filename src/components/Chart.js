import React from "react";
import ReactEcharts from "echarts-for-react";
const labelRight = {
  position: "right",
  color: "#59d1c8",
  fontWeight: 500,
};

const labelLeft = {
  position: "left",
  color: "#59d1c8",
  fontWeight: 500,
};
const option = {
  color: "#59d1c8",
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: {
    top: 80,
    bottom: 30,
  },
  xAxis: {
    type: "value",
    position: "bottom",
    axisLine: { show: true },
    min: -20,
    max: 20,
    show: true,
    axisLabel: {
      formatter: function (val) {
        console.log(val.toString().length);
        return val.toString().length >=2 ? val + ".0 pp" : val + ".00 pp";
      },
    },
    splitLine: {
      lineStyle: {
        type: "dashed",
      },
    },
  },
  yAxis: {
    type: "category",

    axisLine: { show: false },
    axisLabel: { show: false },
    axisTick: { show: false },
    splitLine: { show: false },
    data: [
      "+0.78 pp",
      "+11.0 pp",
      "+1.08 pp",
      "+0.34 pp",
      "+3.20 pp",
      "-7.90 pp",
      "+2.04 pp",
      "-2.87 pp",
      "+0.01 pp",
    ],
  },
  series: [
    {
      name: "Cost",
      type: "bar",
      stack: "Total",
      label: {
        show: true,
        formatter: "{b}",
      },
      data: [
        { value: 0.78, label: labelRight },
        { value: 11.0, label: labelRight },
        { value: 1.08, label: labelRight },
        { value: 0.34, label: labelRight },
        { value: 3.2, label: labelRight },
        { value: -7.9, label: labelLeft },
        { value: 2.04, label: labelRight },
        { value: -2.87, label: labelLeft },
        { value: 0.01, label: labelRight },
      ],
    },
  ],
};
const option1 = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  legend: {},
  grid: {
    left: "2%",
    right: "2%", // adjusted right value to allow space for labels
    bottom: "0%",
    containLabel: true,
  },
  xAxis: {
    type: "value",
    axisLine: { show: true },
    axisLabel: {
      formatter: function (val) {
        return val.toString().length === 2 ? val + ".0%" : val + ".00%";
      },
    },
  },
  yAxis: {
    type: "category",
    data: [
      "Product",
      "Office of CEO",
      "Marketing",
      "Customer Support",
      "Finance",
      "HR",
      "IT",
      "Sales",
      "Operations",
    ],
  },
  series: [
    {
      color: "#5db5e3",
      type: "bar",
      label: {
        show: true,
        position: "right",
        color: "#5db5e3",
        fontWeight: 600,
        formatter: function (val) {
          return val.value + "%"; // return actual value of data point
        },
      },
      data: [9.37, 11.0, 11.9, 12.3, 12.5, 12.9, 13.7, 15.3, 16.6],
    },
    {
      color: "#ff9079",
      type: "bar",
      label: {
        show: true,
        position: "right",
        color: "#ff9079",
        fontWeight: 600,
        formatter: function (val) {
          return val.value + "%"; // return actual value of data point
        },
      },
      data: [8.59, 0.0, 10.9, 12.0, 9.27, 20.8, 11.6, 18.1, 16.6],
    },
  ],
};

function Chart() {
  return (
    <div className="h-3/4 flex flex-row px-4">
      <div className="w-full flex">
        <ReactEcharts
          option={option1}
          style={{
            height: "100%",
            width: "100%",
          }}
        />
        <ReactEcharts
          option={option}
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </div>
    </div>
  );
}

export default Chart;
