import CPUUsageChart from "./components/CPUUsageChart";
import CPULoadavgChart from "./components/CPULoadavgChart";
import BaseCpuUsageChart from "./components/BaseCPUUsageChart";

function CPU() {
  return (
    <>
      {/* CPU 大概数据 --- start --- */}
      {/* <CPUInfo cpu={cpu} /> */}
      {/* CPU 大概数据 --- end --- */}

      {/* CPU 相关指标 --- start --- */}
      {/* <Box sx={{ p: 5 }}>
        <Typography variant="h5">CPU 相关状态数据</Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <DataBlock title="用户空间占用CPU百分比" data={cpu.model} />
        </Grid>
        <Grid item xs={3}>
          <DataBlock title="内核空间占用CPU百分比" data={cpu.model} />
        </Grid>
        <Grid item xs={3}>
          <DataBlock
            title="改变过优先级的进程占用CPU的百分比"
            data={cpu.model}
          />
        </Grid>
        <Grid item xs={3}>
          <DataBlock title="空闲 CPU 百分比" data={cpu.model} />
        </Grid>
        <Grid item xs={3}>
          <DataBlock title="等待输入输出的 CPU 时间百分比" data={cpu.model} />
        </Grid>
        <Grid item xs={3}>
          <DataBlock title="硬件 CPU 中断占用百分比" data={cpu.model} />
        </Grid>
        <Grid item xs={3}>
          <DataBlock title="软中断占用百分比" data={cpu.model} />
        </Grid>
        <Grid item xs={3}>
          <DataBlock title="虚拟机占用百分比" data={cpu.model} />
        </Grid>
      </Grid> */}
      {/* CPU 相关指标 --- end --- */}

      <CPUUsageChart />
      <CPULoadavgChart />
      <BaseCpuUsageChart />
    </>
  );
}

export default CPU;
