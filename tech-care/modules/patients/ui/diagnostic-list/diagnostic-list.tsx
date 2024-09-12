import { useAppSelector } from "@/lib/store";
import { Typography } from "@/ui";
import React from "react";

export function DiagnosticList() {
  const { selectedPatient } = useAppSelector(state => state.patients);
  selectedPatient?.diagnosticList;
  return (
    <div className="col-span-6  p-5 row-span-4 col-start-4 row-start-8 rounded-2xl bg-white h-[340px] overflow-hidden">
      <Typography variant="card-title"> Diagnostic List</Typography>

      <div className="mt-10 relative overflow-y-scroll h-full">
        {selectedPatient?.diagnosticList && (
          <table className="min-w-full mb-16">
            <thead className="bg-gray-table sticky top-0">
              <tr className="text-left ">
                <th className="py-4 w-4/12 rounded-tl-3xl rounded-bl-3xl">
                  <Typography variant="menu-title" className="ml-3">
                    Problem/Diagnosis
                  </Typography>
                </th>
                <th className="w-2/4">
                  <Typography variant="menu-title">Description</Typography>
                </th>
                <th className="py-4 w-1/5 rounded-tr-3xl rounded-br-3xl">
                  <Typography variant="menu-title">Status</Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              {selectedPatient?.diagnosticList.map((item, id) => (
                <tr key={id}>
                  <td className="py-3 align-middle">
                    <Typography variant="secondary" className="ml-3">
                      {item.name}
                    </Typography>
                  </td>
                  <td className="py-3 align-middle">
                    <Typography variant="secondary">
                      {item.description}
                    </Typography>
                  </td>
                  <td className="py-3 align-middle">
                    <Typography variant="secondary">{item.status}</Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
