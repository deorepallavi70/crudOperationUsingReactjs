import React from "react";
import { useState } from "react";
export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [number,setNumber] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name, email, password, number);
  };

  return (
    <>
      <form>
        <div
          style={{
            width: "250px",
            margin: "auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 10,
            border: "2px solid gray",
            padding: "10px",
          }}
        >
          <h1>Sign Up Form </h1>
          <div>
            <label> Name </label>
            <input
              style={{
                border: "none",
                borderBottom: "1px solid black",
                padding: "6px",
                backgroundColor: "silver",
              }}
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              style={{
                border: "none",
                borderBottom: "1px solid black",
                padding: "6px",
                backgroundColor: "silver",
              }}
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <label>Phone No </label>
            <input
              style={{
                border: "none",
                borderBottom: "1px solid black",
                padding: "6px",
                backgroundColor: "silver",
              }}
              type="number"
              placeholder="number"
              defaultValue={number}
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            />
          </div>

          <div>
            <label>Password</label>
            <input
              style={{
                border: "none",
                borderBottom: "1px solid black",
                padding: "6px",
                backgroundColor: "silver",
              }}
              type="password"
              placeholder="password"
              value={password || ""}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div
            style={{
              width: "100%",
              textAlign:'center'
            }}
          >
            <span style={{ color: "gray", fontSize: "small", margin: "auto" }}>
              Alreday a member ?<a href="#">Log In</a>
            </span>
          </div>
          <div>
            <button
              style={{ backgroundColor: "black", color: "White"  ,width:"100px" ,padding:"4px"}}
              onClick={submitHandler}
            >
              Sign up
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
