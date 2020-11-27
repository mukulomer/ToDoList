import React from "react";
import "./todo.css";
import Button from "@material-ui/core/Button";

export default function Todo({ title, discription, handleDelete, handleEdit }) {
  return (
    <>
      <div className="container">
        <h1 className="title">{title} </h1>
        <p className="discription">{discription} </p>
        <div className="buttongroup">
          <Button
            onClick={handleEdit}
            variant="outlined"
            color="primary"
            href="#outlined-buttons"
          >
            Edit
          </Button>
          <Button
            onClick={handleDelete}
            variant="outlined"
            color="primary"
            href="#outlined-buttons"
          >
            Delete
          </Button>
        </div>
      </div>
      {/* title */}
      {/* disciption */}
      {/* edit button */}
      {/* delete button */}
    </>
  );
}
