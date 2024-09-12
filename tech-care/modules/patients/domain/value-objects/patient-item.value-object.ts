import { DiagnosisHistoryItemEntity } from "../entities/diagnostic-history-item.entity";
import { DiagnosticListItemEntity } from "../entities/diagnostic-list-item.entity";

export type PatientItemValueObject = {
  id: string;
  age: number;
  birthDate: string;
  diagnosisHistory: DiagnosisHistoryItemEntity[];
  diagnosticList: DiagnosticListItemEntity[];
  emergencyContact: string;
  gender: string;
  insuranceType: string;
  labResults: string[];
  name: string;
  phoneNumber: string;
  profilePicture: string;
};
