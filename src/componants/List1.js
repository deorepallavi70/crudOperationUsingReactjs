import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from "@mui/material/Button";

const initialList = [
  { id: "", name: "pallavi", sub: "math", email: "p@p", number: "7410852963" },
];

const List1 = () => {
  const [name, setName] = useState();
  const [list, setList] = useState(initialList);
  const [sub, setSub] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [edit, setEdit] = useState(false);
  const [showData, setShowData] = useState("none");

  const [muiEmail, setMuiEmail] = useState();
  const [contact, setContact] = useState();

  const [id, setId] = useState();

  const submitHandler = () => {
    const newList = list.concat({ name, sub, email, number });
    setList(newList);

    setEmail("");
    setName("");
    setNumber("");
    setSub("");
    // alert(`Name Enterd: ${name}`);
  };

  const deleteHandler = (id) => {
    // e.preventDefault()
    console.log(id);
    initialList.splice(id, id);
    console.log(initialList);
    setList(initialList);
    // submitHandler();
  };
  const saveChanges = (e) => {
    e.preventDefault();
    console.log("save changes");

    console.log(id, name, email, number, sub);
    initialList.splice(id, 1, {
      id: id,
      name: name,
      email: email,
      number: number,
      sub: sub,
    });

    setList(initialList);
    console.log(initialList);
  };
  const editHandler = (id, name, sub, email, number) => {
    console.log(id, name, email, number, sub);
    setEmail(email);
    setName(name);
    setNumber(number);
    setSub(sub);
    setId(id);
  };

  const listItem = list ? (
    list.map((user, i) => {
      var id = i;
      return (
        <tr key={i} style={{ border: "1px solid black" }}>
          <td style={{ border: "1px solid black" }}>{id}</td>
          <td style={{ border: "1px solid black" }}>{user.name}</td>
          <td style={{ border: "1px solid black" }}>{user.sub}</td>
          <td style={{ border: "1px solid black" }}>{user.email}</td>
          <td style={{ border: "1px solid black" }}>{user.number}</td>
          <td>
            <button onClick={() => deleteHandler(id)}>Delete</button>
            <button
              onClick={() =>
                editHandler(id, user.name, user.sub, user.email, user.number)
              }
            >
              Edit
            </button>
          </td>
        </tr>
      );
    })
  ) : (
    <h1>no data yet</h1>
  );

  const showtables = (e) => {
    e.preventDefault();
    setShowData("block");
  };
  const muisubmit = (e) => {};
  const formChange = (e) => {
    setMuiEmail(e.target.value);
    //console.log(muiEmail)
  };
  return (
    <>
      <h1>List </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <ValidatorForm
          // ref="form"
          onSubmit={muisubmit}
          onError={(errors) => console.log(errors)}
        >
          <TextValidator
            label="Email"
            onChange={formChange}
            name="muiEmail"
            value={muiEmail || ""}
            validators={["required", "isEmail"]}
            errorMessages={["this field is required", "email is not valid"]}
          />

          <TextValidator
            label="Contact"
            onChange={(e) => setContact(e.target.value)}
            name="contact"
            type="number"
            value={contact || ""}
            validators={["required", "isNumber"]}
            errorMessages={["this field is required", "Number is not valid"]}
          />

          <Button type="submit">Submit</Button>  

        </ValidatorForm>
        <form
          style={{
            width: "200px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 5,
          }}
        >
          <label>Name :</label>
          <input
            type="text"
            placeholder="username"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
          <label>Email :</label>
          <input
            type="email"
            placeholder="email"
            value={email}
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label>Subject :</label>
          <select
            required
            value={sub}
            style={{ padding: 5, width: 150 }}
            onChange={(e) => setSub(e.target.value)}
          >
            <option>Choose Subject</option>
            <option value="math">math</option>
            <option value="history">history</option>
            <option value="marathi">marathi</option>
          </select>

          <label>Phone Number :</label>
          <input
            type="number"
            placeholder="number"
            required
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
          <button onClick={submitHandler}>submit</button>
          <button onClick={saveChanges}>save</button>
          <button onClick={showtables}>Show tables</button>
        </form>
      </div>
      <div style={{ display: `${showData}` }}>
        <table style={{ border: "1px solid black" }}>
          <tbody>
            <tr style={{ border: "1px solid black" }}>
              <th>id</th>
              <th>Name</th>
              <th>Subject</th>
              <th>Email</th>
              <th>phone number</th>
            </tr>
            {listItem}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default List1;
