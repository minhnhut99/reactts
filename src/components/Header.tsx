import React from "react";
import ListBooks from "./ListBooks";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import EditForm from "./EditForm";
const Header = () => {
  return (
      <div className="App">
        <h1 style={{ color: "#0E185F", fontSize: "35px" }}>BOOK STORE</h1>
        <Button variant="contained" color="primary">
          <AddIcon />
          <span>Thêm sản phẩm</span>
        </Button>
        <ListBooks />
      </div>
  );
};

export default Header;
