import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { fetchWanpkg } from "../../api/network";
import { toTime } from "../../utils/formatNumber";

type StateType = Array<{ name: string; Out: number; In: number }>;

/**
 * WanpkgChart
 */
const WanpkgChart = () => {
  const [data, setData] = useState<StateType>([]);

  useEffect(() => {
    fetchWanpkg().then((res: any) => {
      // eslint-disable-next-line array-callback-return
      res.map((item: any) => {
        item.timestamps = toTime(item.timestamps);
      });
      setData(res);
    });
  }, []);

  return (
    <>
      <Box sx={{ p: 5, pt: 0 }}>
        <Typography variant="h5">外网出入包量 （个/s）</Typography>
      </Box>
      <ResponsiveContainer width="95%" height={300}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamps" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="out"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="in" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default WanpkgChart;
