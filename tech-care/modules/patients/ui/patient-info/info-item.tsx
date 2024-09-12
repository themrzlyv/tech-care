import { Typography } from "@/ui";

type Props = {
  icon: React.ReactNode;
  title: string;
  value: string;
};

export function InfoItem({ icon, title, value }: Props) {
  return (
    <div className="flex flex-row items-center gap-4">
      {icon}
      <div className="flex flex-col gap-1">
        <Typography variant="inner-title-medium">{title}</Typography>
        <Typography variant="menu-title">{value}</Typography>
      </div>
    </div>
  );
}
