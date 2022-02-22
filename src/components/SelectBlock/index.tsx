import { Box, InputLabel, MenuItem, FormControl } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface IProps {
  period: number;
  setPeriod: (value: number) => void;
}

const SelectBlock = (props: IProps) => {
  const handleChange = (e: SelectChangeEvent) => {
    props.setPeriod(Number(e.target.value) as number);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Period</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.period.toString()}
          label="Period"
          onChange={handleChange}
        >
          <MenuItem value={60}>一分钟</MenuItem>
          <MenuItem value={300}>五分钟</MenuItem>
          <MenuItem value={3600}>一小时</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectBlock;
