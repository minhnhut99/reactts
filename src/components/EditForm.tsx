import {
  Box,
  ButtonGroup,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import moment from "moment";
import { useParams } from "react-router-dom";
import { useBookQueryById } from "../api/books";
import GlobalButton from "../share/buttons/GlobalButton";
import { Spacer } from "./Themes";
import { useForm, SubmitHandler } from "react-hook-form";
interface EditFormInput {
  name: string;
  createdAt: string;
  author: string;
  desc: string;
  avatar: string;
}
const EditForm = () => {
  const param = useParams();
  const { register, handleSubmit } = useForm<EditFormInput>();
  const { isLoading, isSuccess, data, status } = useBookQueryById(param.id);
  return (
    <>
      {!isLoading ? (
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
              value={data?.name}
            />
            <Spacer size={40} />
            <TextField
              id="standard-basic"
              label="Avatar"
              variant="standard"
              name="avatar"
              value={data?.avatar}
              fullWidth
            />
            <Spacer size={40} />
            <TextField
              id="standard-basic"
              label="Author"
              variant="standard"
              name="author"
              fullWidth
              value={data?.author}
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
              value={data?.desc}
            />
            <Spacer size={40} />
            <TextField
              id="standard-basic"
              label="Created at"
              variant="standard"
              name="createdAt"
              value={moment(data?.createdAt).format("lll")}
              fullWidth
            />
            <Spacer size={40} />
            <ButtonGroup sx={{ marginLeft: "auto" }}>
              <GlobalButton MyBgColor="#FC820F">Cancel</GlobalButton>
              <GlobalButton MyBgColor="">Save</GlobalButton>
            </ButtonGroup>
          </Box>
        </form>
      ) : (
        ""
      )}
    </>
  );
};

export default EditForm;
