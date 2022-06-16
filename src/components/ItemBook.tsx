import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import moment from "moment";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { isConstructorDeclaration } from "typescript";
import { useBookQuery, useDeleteBookQuery } from "../api/books";

const ItemBook: React.FC = () => {
  const param = useParams();
  const { isLoading, isSuccess, data } = useBookQuery();
  const deleteBookQuery = useDeleteBookQuery();

  const handleDelete = (id: string) => {
    if (window.confirm("Ban chac chan xoa khong?")) deleteBookQuery.mutate(id);
  };

  if (isLoading)
    return (
      <Typography
        sx={{ textTransform: "uppercase", color: "#cc33aa" }}
        variant="h1"
      >
        Loading...
      </Typography>
    );
  return (
    <>
      {isSuccess
        ? data.map((item, idx) => {
            return (
              <li
                style={{ marginRight: "20px", marginBottom: "20px" }}
                key={item.id}
              >
                <Card
                  sx={{
                    width: 250,
                    borderRadius: "5",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={item.avatar}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                      </Typography>
                      <Typography
                        fontSize="12px"
                        variant="body2"
                        color="text.secondary"
                      >
                        {item.desc}
                      </Typography>
                    </CardContent>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <p style={{ marginRight: "15px" }} className="author">
                        {item.author}
                      </p>
                      <p className="created-time">
                        {moment(item.createdAt).format("lll")}
                      </p>
                    </div>
                  </CardActionArea>
                  <div
                    className="btn-group"
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      padding: "12px",
                    }}
                  >
                    <Button
                      variant="contained"
                      color="warning"
                      size="small"
                      style={{ marginRight: "10px", padding: "5px" }}
                    >
                      <Link to={"edit/" + item.id}>
                        <EditIcon
                          style={{
                            color: "white",
                            fontSize: "20px",
                            cursor: "pointer",
                          }}
                        />
                      </Link>
                    </Button>
                    <Button
                      onClick={() => handleDelete(item.id)}
                      variant="contained"
                      color="error"
                      size="small"
                    >
                      <DeleteIcon
                        style={{
                          color: "white",
                          fontSize: "20px",
                          cursor: "pointer",
                        }}
                      />
                    </Button>
                  </div>
                </Card>
              </li>
            );
          })
        : ""}
    </>
  );
};

export default ItemBook;
