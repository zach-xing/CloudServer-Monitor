import React from "react";
import LantrafficChart from "./LantrafficChart";
import LanpkgChart from "./LanpkgChart";
import WanpkgChart from "./WanpkgChart";
import TcpCurrEstabChart from "./TcpCurrEstabChart";

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
