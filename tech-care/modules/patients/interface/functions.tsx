import { ArrowDownIcon, ArrowUpIcon } from "@/public/assets/icons";

export const isHigherLevel = (val?: string) => {
  if (!val) return null;

  if (val.startsWith("Higher")) {
    return <ArrowUpIcon width={10} height={5} />;
  }

  if (val.startsWith("Lower")) {
    return <ArrowDownIcon width={10} height={5} />;
  }

  return null;
};
