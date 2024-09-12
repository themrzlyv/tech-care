import { useAppSelector } from "@/lib/store";
import { DownloadIcon } from "@/public/assets/icons";
import { Typography } from "@/ui";

export function LabResults() {
  const { selectedPatient } = useAppSelector(state => state.patients);
  return (
    <div className="col-span-3 row-span-3 col-start-10 row-start-9 h-[235px] p-5 rounded-2xl overflow-hidden bg-white">
      <Typography variant="card-title">Lab Results</Typography>
      {selectedPatient && (
        <div className="overflow-y-scroll h-full pb-8 mt-4">
          {selectedPatient.labResults.map((item, id) => (
            <div
              key={id}
              className="flex items-center justify-between p-3 active:bg-gray-table"
            >
              <Typography variant="secondary">{item}</Typography>
              <DownloadIcon width={20} height={20} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
