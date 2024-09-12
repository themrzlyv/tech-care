import { RootState } from "@/lib/store";
import { createSlice } from "@reduxjs/toolkit";
import { PatientItemValueObject } from "../domain/value-objects/patient-item.value-object";
import { DiagnosisHistoryItemEntity } from "../domain/entities/diagnostic-history-item.entity";

type PatientsState = {
  selectedPatient: PatientItemValueObject | null;
  selectedDiagnosisHistory: DiagnosisHistoryItemEntity | null;
};

const initialState: PatientsState = {
  selectedPatient: null,
  selectedDiagnosisHistory: null,
};

const patientsSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {
    setSelectedPatient: (
      state: PatientsState,
      action: { payload: PatientItemValueObject }
    ) => {
      state.selectedPatient = action.payload;
    },

    setSelectedDiagnosisHistory: (
      state: PatientsState,
      action: { payload: DiagnosisHistoryItemEntity | null }
    ) => {
      state.selectedDiagnosisHistory = action.payload;
    },
  },
});

export const { setSelectedPatient, setSelectedDiagnosisHistory } =
  patientsSlice.actions;

export const selectSelectedPatient = (state: RootState) =>
  state.patients.selectedPatient;

export default patientsSlice.reducer;
