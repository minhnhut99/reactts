import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import moment from "moment";
import { useBookQuery } from "../api/books";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ItemBook = () => {
  const { isLoading, isSuccess, data, status } = useBookQuery();
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
      {isSuccess &&
        data?.map((item, idx) => {
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
                    <Link to="edit">
                      <EditIcon
                        style={{
                          color: "white",
                          fontSize: "20px",
                          cursor: "pointer",
                        }}
                      />
                    </Link>
                  </Button>
                  <Button variant="contained" color="error" size="small">
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
        })}
    </>
  );
};

export default ItemBook;
