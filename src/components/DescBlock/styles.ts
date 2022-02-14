import styled from "@emotion/styled";

export const Block = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  ".title": {
    fontSize: "18px",
    // padding: 5,
    whiteSpace: "nowrap",
  },
  ".value": {
    fontSize: "18px",
    // paddingLeft: 15,
    fontWeight: "bold",
  },
});
