import React, { useState } from "react";
import "./styles.css";
import Todo from "./Todo";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

const List = [];

export default function App() {
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [list, setList] = useState(List);
  const [open, setOpen] = useState(true);
  const [Id, setId] = useState(0);

  const handleEdit = (id) => {
    setId(id + 1);
    list.find((list) =>
      list.id === id + 1
        ? (setTitle(list.title), setDiscription(list.discription))
        : null
    );
    setOpen(false);
  };

  const handleSave = () => {
    let listcopy = [...list];
    listcopy.find((list) =>
      list.id === Id
        ? ((list.title = title), (list.discription = discription))
        : null
    );
    setList(listcopy);
    setOpen(true);
  };

  const handleDelete = (id) => {
    let listcopy = [...list];
    listcopy.splice(id, 1);
    setList(listcopy);
  };

  const handleClick = () => {
    let listcopy = [...list];
    let obj = {
      id: list.length + 1,
      title: title,
      discription: discription
    };
    listcopy.push(obj);
    setList(listcopy);
  };

  return (
    <div className="App">
      <div className="header">
        <h1 className="apptitle">
          <span className="titlefirst"> To</span> Do List
        </h1>
      </div>

      <div className="maincontainer">
        <div className="containerleft">
          {list.map((list, index) => (
            <Todo
              title={list.title}
              discription={list.discription}
              handleEdit={() => {
                handleEdit(index);
              }}
              handleDelete={() => {
                handleDelete(index);
              }}
            />
          ))}
        </div>
        <div className="form">
          <div className="listTitle">
            Title :{" "}
            <Input
              value={title}
              inputProps={{ "aria-label": "description" }}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />{" "}
          </div>
          <div className="listTitle">
            Discription :{" "}
            <Input
              value={discription}
              inputProps={{ "aria-label": "description" }}
              onChange={(e) => {
                setDiscription(e.target.value);
              }}
            />{" "}
          </div>
          <div className="addButton">
            {open ? (
              <Button onClick={handleClick} variant="contained" color="primary">
                Add
              </Button>
            ) : (
              <Button onClick={handleSave} variant="contained" color="primary">
                Save Changes
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
