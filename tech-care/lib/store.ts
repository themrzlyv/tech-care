import { patientsApi } from "@/modules/patients/infra/patients.api";
import patientsSlice from "@/modules/patients/interface/patients.slice";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: {
    patients: patientsSlice,

    // for api's reducer
    [patientsApi.reducerPath]: patientsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(patientsApi.middleware),
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];


// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
