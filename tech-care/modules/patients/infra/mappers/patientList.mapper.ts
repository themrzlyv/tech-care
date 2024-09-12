import { generateUniqueId } from "@/lib/generateUniqueId";
import { PatientItemValueObject } from "../../domain/value-objects/patient-item.value-object";
import { PatientResponseType } from "../types/patient.reponse";
import { diagnosisHistoryMapper } from "./diagnosis-history.mapper";

export function patientListMapper(res: PatientResponseType[]): {
  patientList: PatientItemValueObject[];
} {
  const patientList: PatientItemValueObject[] = res.map(
    (res: PatientResponseType) => ({
      id: generateUniqueId(12),
      name: res.name,
      age: res.age,
      birthDate: res.date_of_birth,
      gender: res.gender,
      diagnosisHistory: diagnosisHistoryMapper(res.diagnosis_history),
      diagnosticList: res.diagnostic_list,
      emergencyContact: res.emergency_contact,
      insuranceType: res.insurance_type,
      phoneNumber: res.phone_number,
      profilePicture: res.profile_picture,
      labResults: res.lab_results,
    })
  );

  return {
    patientList,
  };
}
