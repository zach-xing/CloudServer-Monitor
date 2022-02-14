import React from "react";
import { Typography } from "@mui/material";
import { RootStyle } from "./styles";

interface IProps {
  title: string;
  data: string;
}

/**
 * 数据块（显示大致数据）
 */
const DataBlock = (props: IProps) => {
  return (
    <RootStyle>
      <Typography variant="h3">{props.data}%</Typography>
      <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>
        {props.title}
      </Typography>
    </RootStyle>
  );
};

export default DataBlock;
