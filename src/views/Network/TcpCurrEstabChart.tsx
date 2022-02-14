import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

import { fetchNetwork } from "../../api/network";
import { toTime } from "../../utils/formatNumber";

/**
 * TcpCurrEstabChart
 */
const TcpCurrEstabChart = () => {
  const [data, setData] = useState([] as any);

  useEffect(() => {
    fetchNetwork("TcpCurrEstab").then((res: any) => {
      const tmp: any = [];
      const timestamps = res.DataPoints[0].Timestamps.slice(-10);
      const values = res.DataPoints[0].Values.slice(-10);

      for (let i = 0; i < 10; i++) {
        tmp.push({
          name: toTime(timestamps[i]),
          count: values[i],
        });
      }
      setData(tmp);
    });
  }, []);

  return (
    <>
      <Box sx={{ p: 5, pt: 0 }}>
        <Typography variant="h5">TCP 连接数</Typography>
      </Box>
      <ResponsiveContainer width="95%" height={300}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis unit="个" />
          <Tooltip />
          <Area type="monotone" dataKey="count" stroke="#8884d8" fill="#8884d8">
            <LabelList dataKey="count" position="center" />
          </Area>
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default TcpCurrEstabChart;
