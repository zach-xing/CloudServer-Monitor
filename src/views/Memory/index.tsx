import MemUsedChart from "./components/MemUsedChart";
import MemUsageChart from "./components/MemUsageChart";
import CvmDiskUsageChart from "./components/CvmDiskUsageChart";

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
