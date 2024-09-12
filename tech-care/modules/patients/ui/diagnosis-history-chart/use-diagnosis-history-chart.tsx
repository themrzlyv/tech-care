import { ArrowDownIcon, ArrowUpIcon } from "@/public/assets/icons";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import { ChartPeriod } from "../../domain/enums/chart-period.enum";
import { useMemo, useState } from "react";
import { filterChartData } from "./filter-chart-data";
import { ActiveElement, ChartEvent, ChartOptions } from "chart.js";
import { setSelectedDiagnosisHistory } from "../../interface/patients.slice";

export function useDiagnosisHistoryChart() {
  const dispatch = useAppDispatch();
  const { selectedPatient, selectedDiagnosisHistory } = useAppSelector(
    state => state.patients
  );

  const [period, setPeriod] = useState(ChartPeriod.LAST_6_MONTHS);

  const chartInitialData = useMemo(
    () => ({
      labels: selectedPatient?.diagnosisHistory.map(el =>
        [el.month.slice(0, 3), el.year].join(", ")
      ),
      datasets: [
        {
          label: "Systolic",
          data:
            selectedPatient?.diagnosisHistory.map(
              el => el.bloodPressure.systolic.value
            ) || [],
          fill: false,
          borderColor: "#E66FD2",
          tension: 0.5,
          borderWidth: 3,
          pointRadius: 8,
          pointBackgroundColor: "#E66FD2",
          pointBorderColor: "#FFFFFF",
          pointBorderWidth: 1,
          additionalInfo: selectedPatient?.diagnosisHistory || [],
        },
        {
          label: "Diastolic",
          data:
            selectedPatient?.diagnosisHistory.map(
              el => el.bloodPressure.diastolic.value
            ) || [],
          fill: false,
          borderColor: "#8C6FE6",
          tension: 0.5,
          borderWidth: 3,
          pointRadius: 8,
          pointBackgroundColor: "#8C6FE6",
          pointBorderColor: "#FFFFFF",
          pointBorderWidth: 1,
          additionalInfo: selectedPatient?.diagnosisHistory || [],
        },
      ],
    }),
    [selectedPatient]
  );

  const chartData = useMemo(
    () => filterChartData(chartInitialData, period),
    [chartInitialData, period]
  );

  const handleClick = (event: ChartEvent, elements: ActiveElement[]) => {
    if (elements.length > 0) {
      const element = elements[0];
      const datasetIndex = element.datasetIndex;
      const dataIndex = element.index;

      const diagnosisHistory =
        chartData.datasets[datasetIndex].additionalInfo[dataIndex];

      dispatch(setSelectedDiagnosisHistory(diagnosisHistory));
    }
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    backgroundColor: "#F5F0FE",
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 60,
        max: 180,
        ticks: {
          stepSize: 20,
          callback: value => value,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: context => `${context.dataset.label}: ${context.raw}`,
        },
      },
    },
    onClick: (event, elements) => handleClick(event, elements),
  };

  const periodOptions = [
    { value: ChartPeriod.LAST_6_MONTHS, label: "Last 6 Months" },
    { value: ChartPeriod.CURRENT_YEAR, label: "Current Year" },
    { value: ChartPeriod.ALL, label: "All Time" },
  ];

  const handleSelectPeriod = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setPeriod(event.target.value as ChartPeriod);

  return {
    period,
    periodOptions,
    chartData,
    options,
    handleSelectPeriod,
    systolic: selectedDiagnosisHistory?.bloodPressure.systolic,
    diastolic: selectedDiagnosisHistory?.bloodPressure.diastolic,
  };
}
