"use client";
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "highcharts/css/highcharts.css";

export const HightChartDemo = () => {
  const options: Highcharts.Options = {
    chart: {
      type: "pie",
      zooming: { type: "xy" },
      panning: { enabled: true, type: "xy" },
      panKey: "shift",
    },
    title: { text: "Egg Yolk Composition" },
    subtitle: {
      text: 'Source:<a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default" rel="noreferrer">MDPI</a>',
    },
    tooltip: { valueSuffix: "%" },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: [
          { enabled: true, distance: 20 },
          {
            enabled: true,
            distance: -40,
            format: "{point.percentage:.1f}%",
            style: {
              fontSize: "1.2em",
              textOutline: "none",
              opacity: 0.7 as any,
            },
            filter: { operator: ">", property: "percentage", value: 10 },
          },
        ],
      },
    },
    series: [
      {
        type: "pie",
        name: "Percentage",
        data: [
          { name: "Water", y: 55.02 },
          { name: "Fat", y: 26.71, sliced: true, selected: true },
          { name: "Carbohydrates", y: 1.09 },
          { name: "Protein", y: 15.5 },
          { name: "Ash", y: 1.68 },
        ],
      },
    ],
    credits: { enabled: false },
    accessibility: { enabled: true },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
