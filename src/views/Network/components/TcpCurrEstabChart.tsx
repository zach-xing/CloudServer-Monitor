import { useState } from "react";
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
import { fetchNetwork } from "../../../api/network";
import { toTime } from "../../../utils/formatNumber";
import Loading from "../../../components/Loading";
import SelectBlock from "../../../components/SelectBlock";

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
 * TCP 连接数 组件
 */
const TcpCurrEstabChart = () => {
  const [period, setPeriod] = useState(300);
  const {
    status,
    data: TcpCurrEstabData,
    error,
  } = useQuery<any>(["TcpCurrEstab", period], async () => {
    const res: any = await fetchNetwork("TcpCurrEstab", period);

    const timestamps = res.DataPoints[0].Timestamps.slice(-10).map(
      (item: number) => toTime(item)
    );
    const values = res.DataPoints[0].Values.slice(-10);
    return {
      labels: timestamps,
      datasets: [
        {
          label: "TCP 连接数",
          data: values,
          borderColor: "rgb(75, 192, 192)",
          backgroundColor: "rgb(165, 223, 223)",
          fill: true,
        },
      ],
    };
  });

  if (status === "loading") return <Loading title="TCP 连接数" />;
  if (status === "error") {
    return <h2>Error:{JSON.stringify(error, null, 2)}</h2>;
  }

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", marginTop: "50px" }}>
        <Box sx={{ mr: 5 }}>
          <Typography variant="h5">TCP 连接数 (个)</Typography>
        </Box>
        <SelectBlock period={period} setPeriod={setPeriod} />
      </div>
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
              text: "TCP 连接数",
            },
          },
        }}
        data={TcpCurrEstabData}
      />
    </>
  );
};

export default TcpCurrEstabChart;
