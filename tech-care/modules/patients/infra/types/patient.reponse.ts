import { monthMap } from "@/lib/constants";

export type PatientResponseType = {
  age: number;
  date_of_birth: string;
  diagnosis_history: DiagnosisHistoryReponseType[];
  diagnostic_list: DiagnosticListItemResponseType[];
  emergency_contact: string;
  gender: string;
  insurance_type: string;
  lab_results: string[];
  name: string;
  phone_number: string;
  profile_picture: string;
};

export type DiagnosticListItemResponseType = {
  description: string;
  name: string;
  status: string;
};

export type DiagnosisHistoryReponseType = {
  blood_pressure: {
    systolic: {
      value: number;
      levels: string;
    };
    diastolic: {
      value: number;
      levels: string;
    };
  };
  heart_rate: {
    value: number;
    levels: string;
  };
  month: keyof typeof monthMap;
  respiratory_rate: {
    value: number;
    levels: string;
  };
  temperature: { value: number; levels: string };
  year: number;
};
