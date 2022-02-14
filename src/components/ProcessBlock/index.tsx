import React from "react";
import { Typography } from "@mui/material";
import { Block } from "./styles";

interface IProps {
  data: string;
  title: string;
}

const ProcessBlock = (props: IProps) => {
  return (
    <Block>
      <Typography variant="h3">{props.data}</Typography>
      <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>
        {props.title} (个数)
      </Typography>
    </Block>
  );
};

export default ProcessBlock;
