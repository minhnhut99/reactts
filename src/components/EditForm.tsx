import {
  Box,
  Button,
  ButtonGroup,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useBookQueryById } from "../api/books";
import { usePutBookQuery } from "../api/books";
import GlobalButton from "../share/buttons/GlobalButton";
import { Spacer } from "./Themes";
import { editForm } from "../constants/formConstant";
import { useForm, SubmitHandler } from "react-hook-form";
interface EditFormInput {
  name: string;
  avatar: string;
  author: string;
  desc: string;
  createdAt: string;
}
const EditForm = () => {
  const param = useParams();
  const navigate = useNavigate();
  const putBookQuery = usePutBookQuery(param.id);
  const editForm: SubmitHandler<EditFormInput> = (data) => {
    const { name, avatar, author, desc, createdAt } = data;
    putBookQuery.mutate({ name, avatar, author, desc, createdAt });
  };
  const { isLoading, isSuccess, data } = useBookQueryById(param.id);
  const { register, handleSubmit, setValue } = useForm<EditFormInput>({});
  useEffect(() => {
    if (data) {
      setValue("name", data.name);
      setValue("avatar", data.avatar);
      setValue("author", data.author);
      setValue("desc", data.desc);
      setValue("createdAt", moment(data.createdAt).format("llll"));
    }
  }, [data]);

  if (putBookQuery.isSuccess) {
    navigate("/");
  }
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
              {...register("name")}
              id="name"
              label="Name"
              variant="standard"
              name="name"
              fullWidth
            />
            <Spacer size={40} />
            <TextField
              {...register("avatar")}
              id="standard-basic"
              label="Avatar"
              variant="standard"
              name="avatar"
              fullWidth
            />
            <Spacer size={40} />
            <TextField
              {...register("author")}
              id="standard-basic"
              label="Author"
              variant="standard"
              name="author"
              fullWidth
            />
            <Spacer size={40} />
            <TextareaAutosize
              {...register("desc")}
              style={{
                width: "100%",
                height: "100px",
                border: "none",
                outline: "none",
              }}
              aria-label="empty textarea"
              placeholder="Desc"
              name="desc"
            />
            <Spacer size={40} />
            <TextField
              {...register("createdAt")}
              id="standard-basic"
              label="Created at"
              variant="standard"
              name="createdAt"
              fullWidth
            />
            <Spacer size={40} />
            <ButtonGroup sx={{ marginLeft: "auto" }}>
              <Button>Cancel</Button>
              <Button onClick={handleSubmit(editForm)}>Save</Button>
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
