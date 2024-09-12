import { useAppSelector } from "@/lib/store";
import { Typography } from "@/ui";
import Image from "next/image";
import { InfoItem } from "./info-item";
import Link from "next/link";
import {
  BirthIcon,
  FemaleIcon,
  InsuranceIcon,
  PhoneIcon,
} from "@/public/assets/icons";
import { formatDate } from "@/lib/formatDate";

export function PatientInfo() {
  const { selectedPatient } = useAppSelector(state => state.patients);

  const infoData = [
    {
      title: "Birth of Date",
      value: formatDate(selectedPatient?.birthDate) || "-",
      icon: <BirthIcon width={42} height={42} />,
    },
    {
      title: "Gender",
      value: selectedPatient?.gender || "-",
      icon: <FemaleIcon width={42} height={42} />,
    },
    {
      title: "Contact Info",
      value: selectedPatient?.phoneNumber || "-",
      icon: <PhoneIcon width={42} height={42} />,
    },
    {
      title: "Emergency Contacts",
      value: selectedPatient?.emergencyContact || "-",
      icon: <PhoneIcon width={42} height={42} />,
    },
    {
      title: "Insurance Provider",
      value: selectedPatient?.insuranceType || "-",
      icon: <InsuranceIcon width={42} height={42} />,
    },
  ];

  return (
    <aside className="col-span-3 row-span-8 col-start-10 row-start-1 py-8 px-5 rounded-2xl bg-white">
      {selectedPatient && (
        <>
          <div className="w-full flex flex-col items-center gap-6 mb-8 justify-center">
            <Image
              width={200}
              height={200}
              src={selectedPatient?.profilePicture}
              alt="Profile Picture"
              loading="lazy"
              quality={100}
            />
            <Typography variant="card-title">{selectedPatient.name}</Typography>
          </div>
          <div className="flex flex-col justify-center mb-8 gap-6">
            {infoData.map((item, id) => (
              <InfoItem key={id} {...item} />
            ))}
          </div>
          <div className="w-full flex justify-center">
            <Link
              href=""
              className="bg-primary-main hover:bg-primary-600 text-black-main font-bold py-3 px-8 rounded-full"
            >
              <Typography variant="menu-title">Show All Information</Typography>
            </Link>
          </div>
        </>
      )}
    </aside>
  );
}
