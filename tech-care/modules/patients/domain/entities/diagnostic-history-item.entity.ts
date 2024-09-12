import { monthMap } from "@/lib/constants";
import { DiagnosticItemDataEntity } from "./diagnostic-item-data.entity";
import { BloodPressureEntity } from "./blood-presssure.entity";

export type DiagnosisHistoryItemEntity = {
  bloodPressure: BloodPressureEntity;
  heartRate: DiagnosticItemDataEntity;
  month: keyof typeof monthMap;
  respiratoryRate: DiagnosticItemDataEntity;
  temperature: DiagnosticItemDataEntity;
  year: number;
};
