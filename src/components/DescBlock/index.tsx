import React from "react";
import { Block } from "./styles";

interface IProps {
  title: string;
  value: string| number;
}

/**
 * 用来显示描述数据
 */
const DescBlock = (props: IProps) => {
  return (
    <Block>
      <div className="title">{props.title}</div>
      <div className="value">
        {props.value}
      </div>
    </Block>
  );
}

export default DescBlock;
