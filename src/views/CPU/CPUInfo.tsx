// import { Box, Typography } from "@mui/material";
// import { ICPU } from "../../types";
// import DescBlock from "../../components/DescBlock";

/**
 * 显示 CPU 大致数据介绍（如内核数、厂商等）
 */
const CPUInfo = (props: any) => {
  // const cpu = props.cpu;

  return (
    <>
      {/* <Box sx={{ pb: 5, pl: 5 }}>
        <Typography variant="h5">CPU 相关信息</Typography>
      </Box>

      <Box
        sx={{
          pl: 15,
          pr: 15,
          display: "grid",
          columnGap: 20,
          rowGap: 2,
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        <DescBlock title="CPU 产品系列代号" value={cpu["cpu family"]} />
        <DescBlock title="CPU 制造商" value={cpu["vendor_id"]} />
        <DescBlock title="CPU 信息" value={cpu["model name"]} />
        <DescBlock title="逻辑处理核编号" value={cpu["processor"]} />
        <DescBlock title="CPU 实际试用主频" value={cpu["cpu MHz"]} />
        <DescBlock title="CPU 二级缓存大小" value={cpu["cache size"]} />
        <DescBlock title="CPU 速度 (粗略测算)" value={cpu["bogomips"]} />
        <DescBlock title="每次刷新缓存的大小单位" value={cpu["clflush size"]} />
        <DescBlock title="缓存地址对齐单位" value={cpu["cache_alignment"]} />
        <DescBlock title="可访问地址空间位数" value={cpu["address sizes"]} />
      </Box> */}
    </>
  );
};

export default CPUInfo;
