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

import { fetchCPU } from "../../api/cpu";
import { toTime } from "../../utils/formatNumber";

/**
 * MemUsageChart
 */
const MemUsageChart = () => {
  const [data, setData] = useState([] as any);

  useEffect(() => {
    fetchCPU("MemUsage").then((res: any) => {
      const timestamps = res.DataPoints[0].Timestamps.slice(-10);
      const values = res.DataPoints[0].Values.slice(-10);
      const tmp = [];
      for (let i = 0; i < 10; i++) {
        tmp.push({
          name: toTime(timestamps[i]),
          value: values[i],
        });
      }
      console.log("tmp", tmp);
      setData(tmp);
    });
  }, []);

  return (
    <>
      <Box sx={{ p: 5 }}>
        <Typography variant="h5">内存利用率</Typography>
      </Box>
      <ResponsiveContainer width="95%" height={300}>
        <AreaChart
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
          <YAxis unit="%" />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8">
            <LabelList dataKey="value" position="center" />
          </Area>
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default MemUsageChart;
