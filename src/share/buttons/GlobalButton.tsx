import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material";

const GlobalStyleButton = styled(Button)<Props>(({ MyBgColor }) => ({
  backgroundColor: MyBgColor ? MyBgColor : "#1B99F1",
  color: "white",
  outline: "none",
  border: "none",
  width: "100px",
  height: "40px",
  borderRadius: "2px!important",
  marginLeft: "10px!important",
  "&:hover": {
    backgroundColor: "inherit",
    color: "black",
    border: MyBgColor,
    boxShadow:
      "rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px",
  },
}));
interface Props {
  children: JSX.Element | string;
  MyBgColor: string;
}

export default function GlobalButton({ children, MyBgColor }: Props) {
  return (
    <GlobalStyleButton MyBgColor={MyBgColor}>{children}</GlobalStyleButton>
  );
}
