import { Typography } from "@/ui";
import React from "react";
import { DiagnosticItemDataEntity } from "../../domain/entities/diagnostic-item-data.entity";
import { useDiagnosisHistoryChart } from "./use-diagnosis-history-chart";
import classNames from "classnames";
import { isHigherLevel } from "../../interface/functions";

type Props = {
  item?: DiagnosticItemDataEntity;
  title: string;
  containerClassName?: string;
  dotClassName?: string;
};

export function BloodPressureItem({
  item,
  title,
  containerClassName,
  dotClassName,
}: Props) {
  return (
    <div className={classNames(containerClassName && containerClassName)}>
      <Typography variant="secondary-bold" className="flex items-center">
        <div
          className={classNames(
            "border border-white rounded-full w-4 h-4 mr-1",
            dotClassName && dotClassName
          )}
        />
        {title}
      </Typography>
      <Typography variant="inner-title" className="my-2">
        {item?.value || 0}
      </Typography>
      <Typography variant="secondary" className="flex items-center gap-2">
        {isHigherLevel(item?.levels)}
        {item?.levels || "-"}
      </Typography>
    </div>
  );
}
