import styled from "@emotion/styled";

export const Block = styled("div")<{ percent: number }>(({ percent }) => ({
  position: "relative",
  height: 50,
  borderRadius: 20,
  backgroundColor: "#eee",
  ".progress": {
    position: "absolute",
    top: 0,
    left: 0,
    height: 50,
    borderRadius: 20,
    width: `${percent}%`,
    backgroundColor: "#66B366",
  },
  ".title": {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "black",
  },
}));
