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
import { fetchLanpkg } from "../../../api/network";
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
 * 内网出入包量 组件
 */
const LanpkgChart = () => {
  const {
    status,
    data: LanpkgData,
    error,
  } = useQuery<any>("LanpkgData", async () => {
    const res: any = await fetchLanpkg();

    return {
      labels: res.timestamps.map((timestamp: number) => toTime(timestamp)),
      datasets: [
        {
          label: "内网出包量",
          data: res.outValue,
          borderColor: "rgb(75, 192, 192)",
          backgroundColor: "rgb(165, 223, 223)",
        },
        {
          label: "内网入包量",
          data: res.inValue,
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    };
  });

  if (status === "loading") return <Loading title="内网出入包量" />;
  if (status === "error") {
    return <h2>Error:{JSON.stringify(error, null, 2)}</h2>;
  }

  return (
    <>
      <Box sx={{ pt: 5 }}>
        <Typography variant="h5">内网出入包量 (个/s)</Typography>
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
              text: "内网出入包量",
            },
          },
        }}
        data={LanpkgData}
      />
    </>
  );
};

export default LanpkgChart;
