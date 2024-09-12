"use client";
import { Select, Typography } from "@/ui";
import React from "react";
import { Line } from "react-chartjs-2";
import { useDiagnosisHistoryChart } from "./use-diagnosis-history-chart";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";
import { ArrowDownIcon, ArrowUpIcon } from "@/public/assets/icons";
import { BloodPressureItem } from "./blood-pressure-item";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement
);

export function DiagnosisHistoryChart() {
  const {
    period,
    chartData,
    options,
    periodOptions,
    handleSelectPeriod,
    systolic,
    diastolic,
  } = useDiagnosisHistoryChart();
  return (
    <div className="bg-purple-chart rounded-2xl p-5 mt-10 flex flex-row gap-8 justify-between">
      <div className="flex-1">
        <div className="flex justify-between items-center mb-5">
          <Typography variant="inner-title">Blood Pressure</Typography>
          <Select
            options={periodOptions}
            value={period}
            handleSelect={handleSelectPeriod}
          />
        </div>
        <Line data={chartData} options={options} />
      </div>

      <div className="min-w-[200px]">
        <BloodPressureItem
          item={systolic}
          title="Systolic"
          containerClassName="pb-4 border-b border-gray-main"
          dotClassName="bg-purple-main"
        />
        <BloodPressureItem
          item={diastolic}
          title="Diastolic"
          containerClassName="mt-4"
          dotClassName="bg-purple-dark"
        />
      </div>
    </div>
  );
}
