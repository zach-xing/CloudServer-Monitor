import { Typography } from "@mui/material";
import { tofNumber } from "../../utils/formatNumber";
import { Block } from "./styles";

interface IProps {
  title: string;
  data: string;
}

/**
 * 数据块（显示大致数据）
 */
const DataBlock = (props: IProps) => {
  return (
    <Block>
      <Typography variant="h4">{tofNumber(props.data)} KB</Typography>
      <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>
        {props.title}
      </Typography>
    </Block>
  );
};

export default DataBlock;
