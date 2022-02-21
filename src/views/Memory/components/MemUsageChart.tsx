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
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { fetchMemory } from "../../../api/memory";
import { toTime } from "../../../utils/formatNumber";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

/**
 * 内存利用率
 */
const MemUsageChart = () => {
  const {
    status,
    data: MemUsedData,
    error,
  } = useQuery<any>("MemUsedData", async () => {
    const res: any = await fetchMemory("MemUsage");

    const timestamps = res.DataPoints[0].Timestamps.slice(-10).map(
      (item: number) => toTime(item)
    );
    const values = res.DataPoints[0].Values.slice(-10);
    return {
      labels: timestamps,
      datasets: [
        {
          label: "内存利用率",
          data: values,
          borderColor: "rgb(75, 192, 192)",
          backgroundColor: "rgb(165, 223, 223)",
          fill: true,
        },
      ],
    };
  });

  if (status === "loading") return <h2>Loading...</h2>;
  if (status === "error") {
    return <h2>Error:{JSON.stringify(error, null, 2)}</h2>;
  }

  return (
    <>
      <Box sx={{ pt: 10 }}>
        <Typography variant="h5">内存利用率</Typography>
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
              text: "内存利用率",
            },
          },
        }}
        data={MemUsedData}
      />
    </>
  );
};

export default MemUsageChart;
