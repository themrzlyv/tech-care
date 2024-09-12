import { Typography } from "@/ui";
import classNames from "classnames";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { isHigherLevel } from "../../interface/functions";

type Props = {
  label: string;
  value: number;
  levels: string;
  image: StaticImageData;
  className: string;
  utils: string;
};

export function DiagnosisHistoryCard({
  label,
  value,
  levels,
  image,
  className,
  utils,
}: Props) {
  return (
    <div
      className={classNames(
        "rounded-2xl p-4 flex flex-col w-[228px]",
        className && className
      )}
    >
      <Image src={image} alt="respiratory rate" loading="lazy" />
      <Typography variant="inner-title-medium" className="mt-4">
        {label}
      </Typography>
      <Typography variant="card-title-large" className="mb-4">
        {value} {utils}
      </Typography>
      <Typography variant="secondary" className="flex items-center gap-2">
        {isHigherLevel(levels)}
        {levels}
      </Typography>
    </div>
  );
}
