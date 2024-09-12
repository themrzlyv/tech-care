import { monthMap } from "@/lib/constants";
import { DiagnosisHistoryReponseType } from "../types/patient.reponse";
import { DiagnosisHistoryItemEntity } from "../../domain/entities/diagnostic-history-item.entity";

export function diagnosisHistoryMapper(
  res: DiagnosisHistoryReponseType[]
): DiagnosisHistoryItemEntity[] {
  const mappedRes: DiagnosisHistoryItemEntity[] = res.map(item => ({
    bloodPressure: item.blood_pressure,
    heartRate: item.heart_rate,
    month: item.month,
    respiratoryRate: item.respiratory_rate,
    temperature: item.temperature,
    year: item.year,
  }));

  const sortedData = mappedRes.sort((a, b) => {
    // Convert month names to numbers
    const monthA = monthMap[a.month];
    const monthB = monthMap[b.month];

    // Compare by year first
    if (a.year !== b.year) {
      return a.year - b.year;
    }

    // If years are the same, compare by month
    return monthA - monthB;
  });

  return sortedData;
}
