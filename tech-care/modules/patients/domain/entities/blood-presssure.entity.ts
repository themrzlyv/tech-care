import { DiagnosticItemDataEntity } from "./diagnostic-item-data.entity";

export type BloodPressureEntity = {
  systolic: DiagnosticItemDataEntity;
  diastolic: DiagnosticItemDataEntity;
};
