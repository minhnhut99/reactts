import {
  TextField,
  Box,
  Typography,
  TextareaAutosize,
  ButtonGroup,
  Button,
} from "@mui/material";
import React from "react";
import { Spacer } from "./Themes";
import { useForm } from "react-hook-form";
const EditForm = () => {
  return (
    <form style={{ textAlign: "center" }}>
      <Spacer size={50} />
      <Typography
        sx={{
          fontSize: "50px",
          color: "#66aabb",
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
        variant="h1"
      >
        React edit hook form
      </Typography>
      <Spacer size={50} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        <Spacer size={40} />
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          name="name"
          fullWidth
        />
        <Spacer size={40} />
        <TextField
          id="standard-basic"
          label="Avatar"
          variant="standard"
          name="avatar"
          fullWidth
        />
        <Spacer size={40} />
        <TextField
          id="standard-basic"
          label="Author"
          variant="standard"
          name="author"
          fullWidth
        />
        <Spacer size={40} />
        <TextareaAutosize
          style={{
            width: "100%",
            height: "100px",
            border: "none",
            outline: "none",
          }}
          aria-label="empty textarea"
          placeholder="Desc"
        />
        <Spacer size={40} />
        <TextField
          id="standard-basic"
          label="Created at"
          variant="standard"
          name="createdAt"
          fullWidth
        />
        <Spacer size={40} />
        <ButtonGroup sx={{ marginLeft: "auto" }}>
          <Button
            sx={{
              backgroundColor: "#D6EAF8",
              color: "black",
              outline: "none",
              border: "none",
              width: "100px",
              height: "40px",
              borderRadius: "2px!important",
              "&:hover": {
                backgroundColor: "unset",
              },
            }}
            variant="contained"
            size="small"
          >
            Cancel
          </Button>
          <Button
            sx={{
              backgroundColor: "#3399ff",
              color: "white",
              outline: "none",
              border: "none",
              width: "100px",
              height: "40px",
              borderRadius: "2px!important",
              marginLeft: "10px!important",
              "&:hover": {
                backgroundColor: "unset",
              },
            }}
            variant="contained"
            size="small"
          >
            Save
          </Button>
        </ButtonGroup>
      </Box>
    </form>
  );
};

export default EditForm;
