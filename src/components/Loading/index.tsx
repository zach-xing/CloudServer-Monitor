import { Block } from "./style";

interface IProps {
  title: string;
}

/**
 * 加载组件
 */
const Loading = (props: IProps) => {
  return <Block>{props.title} 加载中...</Block>;
};

export default Loading;
