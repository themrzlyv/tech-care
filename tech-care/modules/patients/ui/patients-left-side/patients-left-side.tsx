"use client";
import { MoreHorizontalIcon, SearchIcon } from "@/public/assets/icons";
import { Typography } from "@/ui";
import React, { use, useCallback, useEffect, useMemo } from "react";
import { useGetAllPatientsQuery } from "../../infra/patients.api";
import Image from "next/image";
import { PatientItemValueObject } from "../../domain/value-objects/patient-item.value-object";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import {
  setSelectedDiagnosisHistory,
  setSelectedPatient,
} from "../../interface/patients.slice";
import classNames from "classnames";

export function PatientsLeftSide() {
  const dispatch = useAppDispatch();
  const { selectedPatient } = useAppSelector(state => state.patients);
  const { data, error, isLoading } = useGetAllPatientsQuery("patients");

  useEffect(() => {
    if (data?.patientList && data.patientList.length > 0 && !selectedPatient) {
      dispatch(setSelectedPatient(data.patientList[0]));
      dispatch(
        setSelectedDiagnosisHistory(
          data.patientList[0].diagnosisHistory[
            data.patientList[0].diagnosisHistory.length - 1
          ]
        )
      );
    }
  }, [data]);

  const handleSelectPatient = useCallback(
    (patient: PatientItemValueObject) => {
      dispatch(setSelectedPatient(patient));
      dispatch(setSelectedDiagnosisHistory(null));
    },
    [dispatch]
  );

  const renderPatients = useMemo(() => {
    if (!data?.patientList || error || isLoading) return null;

    return data?.patientList.map((patient, id) => {
      const isActive = selectedPatient?.id === patient.id;
      return (
        <div
          key={id}
          className={`${classNames(
            "flex flex-row items-center justify-between py-4 px-5",
            isActive && "bg-active-v1"
          )}  `}
          onClick={() => handleSelectPatient(patient)}
        >
          <div className="flex flex-row items-center gap-4">
            <Image
              src={patient.profilePicture}
              width={48}
              height={48}
              alt="profile photo"
              loading="lazy"
            />
            <div>
              <Typography variant="menu-title">{patient.name}</Typography>
              <Typography variant="secondary">
                {patient.gender} {patient.age}
              </Typography>
            </div>
          </div>
          <div>
            <MoreHorizontalIcon width={18} height={4} />
          </div>
        </div>
      );
    });
  }, [
    data?.patientList,
    error,
    handleSelectPatient,
    isLoading,
    selectedPatient?.id,
  ]);

  return (
    <aside className="col-span-3 row-span-12 rounded-2xl bg-white overflow-hidden h-[1054px]">
      <div className="py-5 h-full">
        <div className="flex flex-row items-center mb-8 px-5 justify-between">
          <Typography variant="card-title">Patients</Typography>
          <SearchIcon width={18} height={18} />
        </div>
        <div className="overflow-y-scroll h-full flex flex-col pb-14">
          {renderPatients}
        </div>
      </div>
    </aside>
  );
}
