import LantrafficChart from "./components/LantrafficChart";
import LanpkgChart from "./components/LanpkgChart";
import WanpkgChart from "./components/WanpkgChart";
import TcpCurrEstabChart from "./components/TcpCurrEstabChart";

function Network() {
  return (
    <>
      <LantrafficChart />
      <LanpkgChart />
      <WanpkgChart />
      <TcpCurrEstabChart />
    </>
  );
}

export default Network;
