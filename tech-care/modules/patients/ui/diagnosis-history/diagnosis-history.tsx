"use client";
import { Typography } from "@/ui";
import RespiratoryRate from "@/public/assets/images/respiratory rate.png";
import Temperature from "@/public/assets/images/temperature.png";
import HeartRate from "@/public/assets/images/HeartBPM.png";
import { DiagnosisHistoryChart } from "../diagnosis-history-chart/diagnosis-history-chart";
import { useAppSelector } from "@/lib/store";
import { DiagnosisHistoryCard } from "./diagnosis-history-card";

export function DiagnosisHistory() {
  const { selectedDiagnosisHistory } = useAppSelector(state => state.patients);

  const rateData = [
    {
      label: "Respiratory Rate",
      value: selectedDiagnosisHistory?.respiratoryRate.value || 0,
      levels: selectedDiagnosisHistory?.respiratoryRate.levels || "normal",
      image: RespiratoryRate,
      className: "bg-blue-light",
      utils: "bpm",
    },
    {
      label: "Temperature",
      value: selectedDiagnosisHistory?.temperature.value || 0,
      utils: "°F",
      levels: selectedDiagnosisHistory?.temperature.levels || "normal",
      image: Temperature,
      className: "bg-pink-light",
    },
    {
      label: "Heart Rate",
      value: selectedDiagnosisHistory?.heartRate.value || 0,
      levels: selectedDiagnosisHistory?.heartRate.levels || "normal",
      image: HeartRate,
      className: "bg-pink-main",
      utils: "bpm",
    },
  ];

  return (
    <main className="col-span-6 row-span-7 col-start-4 row-start-1 p-5 rounded-2xl bg-white">
      <Typography variant="card-title">Diagnosis History</Typography>
      <DiagnosisHistoryChart />
      <div className="mt-5 flex flex-row gap-5">
        {rateData.map((item, id) => (
          <DiagnosisHistoryCard key={id} {...item} />
        ))}
      </div>
    </main>
  );
}
