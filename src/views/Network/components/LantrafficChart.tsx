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
import { fetchLantraffic } from "../../../api/network";
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
 * 内网出入带宽 组件
 */
const LantrafficChart = () => {
  const {
    status,
    data: LantrafficData,
    error,
  } = useQuery<any>("LantrafficData", async () => {
    const res: any = await fetchLantraffic();

    return {
      labels: res.timestamps.map((timestamp: number) => toTime(timestamp)),
      datasets: [
        {
          label: "内网出带宽",
          data: res.outValue,
          borderColor: "rgb(75, 192, 192)",
          backgroundColor: "rgb(165, 223, 223)",
        },
        {
          label: "内网入带宽",
          data: res.inValue,
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    };
  });

  if (status === "loading") return <Loading title="内网出入带宽" />;
  if (status === "error") {
    return <h2>Error:{JSON.stringify(error, null, 2)}</h2>;
  }

  return (
    <>
      <Box>
        <Typography variant="h5">内网出入带宽 (Mbps)</Typography>
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
              text: "内网出入带宽",
            },
          },
        }}
        data={LantrafficData}
      />
    </>
  );
};

export default LantrafficChart;
