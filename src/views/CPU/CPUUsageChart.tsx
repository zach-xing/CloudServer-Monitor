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
import { fetchCPU } from "../../api/cpu";
import { toTime } from "../../utils/formatNumber";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CPUUsageChart = () => {
  // const [chartData, setChartData] = useState([] as any);
  const {
    status,
    data: CPUUsageData,
    error,
  } = useQuery<any>("CPUUsage", async () => {
    const res: any = await fetchCPU("CPUUsage");

    const timestamps = res.DataPoints[0].Timestamps.slice(-10).map(
      (item: number) => toTime(item)
    );
    const values = res.DataPoints[0].Values.slice(-10);
    return {
      labels: timestamps,
      datasets: [
        {
          label: "CPU 利用率",
          data: values,
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    };
  });

  if (status === "loading") return <h2>Loading...</h2>;
  if (status === "error") {
    return <h2>Error:{error}</h2>;
  }

  return (
    <div style={{ width: "100%", height: "300px" }}>
      <Line
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "top" as const,
            },
            title: {
              display: true,
              text: "Chart.js Line Chart",
            },
          },
        }}
        data={CPUUsageData}
      />
    </div>
  );
};

export default CPUUsageChart;
