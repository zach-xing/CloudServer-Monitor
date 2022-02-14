import MemUsedChart from "./MemUsedChart";
import MemUsageChart from "./MemUsageChart";
import CvmDiskUsageChart from "./CvmDiskUsageChart";

function Memory() {
  return (
    <>
      <CvmDiskUsageChart />
      <MemUsedChart />
      <MemUsageChart />
    </>
  );
}

export default Memory;
