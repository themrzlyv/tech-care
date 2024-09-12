import { ChartData, ChartDataset } from "chart.js";
import { DiagnosisHistoryItemEntity } from "../../domain/entities/diagnostic-history-item.entity";
import { ChartPeriod } from "../../domain/enums/chart-period.enum";

interface ExtendedChartDataset extends ChartDataset<"line", number[]> {
  additionalInfo: DiagnosisHistoryItemEntity[];
}

export interface CustomChartData extends ChartData<"line", number[], string> {
  datasets: ExtendedChartDataset[];
}

const currentYear = new Date().getFullYear();

export function filterChartData(data: CustomChartData, period: ChartPeriod) {
  const { labels, datasets } = data;
  let filteredLabels;
  let filteredData;

  switch (period) {
    case ChartPeriod.LAST_6_MONTHS:
      filteredLabels = labels?.slice(labels?.length - 6);
      filteredData = datasets.map(dataset => ({
        ...dataset,
        data: dataset.data.slice(dataset.data.length - 6),
        additionalInfo: dataset.additionalInfo.slice(
          dataset.additionalInfo.length - 6
        ),
      }));
      break;
    case ChartPeriod.CURRENT_YEAR:
      filteredLabels = labels?.filter(label =>
        (label as string).includes(currentYear.toString())
      );
      filteredData = datasets.map(dataset => ({
        ...dataset,
        data: dataset.data.slice(dataset.data.length - filteredLabels?.length),
        additionalInfo: dataset.additionalInfo.slice(
          dataset.additionalInfo.length - filteredLabels?.length
        ),
      }));
      break;
    case ChartPeriod.ALL:
    default:
      filteredLabels = labels;
      filteredData = datasets;
      break;
  }

  return {
    labels: filteredLabels,
    datasets: filteredData,
  };
}
