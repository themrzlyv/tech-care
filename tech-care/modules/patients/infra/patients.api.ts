import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PatientResponseType } from "./types/patient.reponse";
import { patientListMapper } from "./mappers/patientList.mapper";
import { PatientItemValueObject } from "../domain/value-objects/patient-item.value-object";

const username = "coalition";
const password = "skills-test";
const auth = btoa(`${username}:${password}`);

export const patientsApi = createApi({
  reducerPath: "patientsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fedskillstest.coalitiontechnologies.workers.dev/",
    headers: { Authorization: `Basic ${auth}` },
  }),
  endpoints: builder => ({
    getAllPatients: builder.query<
      { patientList: PatientItemValueObject[] },
      string
    >({
      query: () => "patients",
      transformResponse: (res: PatientResponseType[]) => patientListMapper(res),
    }),
  }),
});

export const { useGetAllPatientsQuery } = patientsApi;
