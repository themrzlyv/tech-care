"use client";
import { PatientsLeftSide } from "./patients-left-side/patients-left-side";
import { DiagnosisHistory } from "./diagnosis-history/diagnosis-history";
import { DiagnosticList } from "./diagnostic-list/diagnostic-list";
import { PatientInfo } from "./patient-info/patient-info";
import { LabResults } from "./lab-results/lab-results";
import { useGetAllPatientsQuery } from "../infra/patients.api";
import { Loader } from "@/ui/loader/loader";

const PatientsPage = () => {
  const { isLoading } = useGetAllPatientsQuery("patients");

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="grid grid-cols-12 grid-rows-10 gap-8 px-6 mb-5 max-h-[1054px]">
      <PatientsLeftSide />
      <DiagnosisHistory />
      <LabResults />
      <DiagnosticList />
      <PatientInfo />
    </div>
  );
};

export default PatientsPage;
