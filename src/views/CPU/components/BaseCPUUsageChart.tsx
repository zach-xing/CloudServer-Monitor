import { Box, Typography } from "@mui/material";
import { useQuery } from "react-query";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { fetchCPU } from "../../../api/cpu";
import { toTime } from "../../../utils/formatNumber";
import Loading from "../../../components/Loading";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

/**
 * 基础 CPU 使用率
 */
const BaseCPUUsageChart = () => {
  const {
    status,
    data: BaseCPUUsageData,
    error,
  } = useQuery<any>("BaseCpuUsage", async () => {
    const res: any = await fetchCPU("BaseCpuUsage");

    const timestamps = res.DataPoints[0].Timestamps.slice(-10).map(
      (item: number) => toTime(item)
    );
    const values = res.DataPoints[0].Values.slice(-10);
    return {
      labels: timestamps,
      datasets: [
        {
          label: "基础 CPU 使用率",
          data: values,
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    };
  });

  if (status === "loading") return <Loading title="基础 CPU 使用率" />;
  if (status === "error") {
    return <h2>Error:{error}</h2>;
  }

  return (
    <>
      <Box sx={{ pt: 10}}>
        <Typography variant="h5">基础 CPU 使用率</Typography>
      </Box>
      <Line
        height={70}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "top" as const,
            },
            title: {
              display: true,
              text: "基础 CPU 使用率",
            },
          },
        }}
        data={BaseCPUUsageData}
      />
    </>
  );
};

export default BaseCPUUsageChart;
