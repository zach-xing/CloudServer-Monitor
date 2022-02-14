import React from "react";
import { Block } from "./styles";

interface IProps {
  percent: number;
  lastTime: string;
}

const ProgressBar = (props: IProps) => {
  return (
    <Block percent={props.percent}>
      <div className="title">
        目前已使用:{props.percent}% (最近更新 {props.lastTime})
      </div>
      <div className="progress" />
    </Block>
  );
};

export default ProgressBar;
