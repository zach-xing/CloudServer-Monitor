import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import ProgressBar from "../../../components/ProgressBar";
import { fetchMemory } from "../../../api/memory";
import { toTime } from "../../../utils/formatNumber";

const CvmDiskUsageChart = () => {
  const [data, setData] = useState({} as any);

  useEffect(() => {
    fetchMemory("CvmDiskUsage").then((res: any) => {
      const obj = res.DataPoints[0];
      console.log(obj);
      
      const tmp = {
        lastTime: toTime(obj.Timestamps[obj.Timestamps.length - 1]),
        percent: obj.Values[obj.Values.length - 1],
      };
      setData(tmp)
    });
  }, []);

  return (
    <>
      <Box>
        <Typography variant="h5">磁盘利用率</Typography>
      </Box>
      <Box sx={{ p: 5 }}>
        <ProgressBar percent={data.percent} lastTime={data.lastTime} />
      </Box>
    </>
  );
};

export default CvmDiskUsageChart;
