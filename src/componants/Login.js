import React, { useState } from "react";
import { Form } from "react-router-dom";

export const Login=()=>{
const[name,setName]=useState()
    return (
        <><div>
        <Form><h1>login</h1>
        <label> Name </label>
        <input type="text"  value="name" placeholder="name" onChange={(e)=>{setName(e.target.value)}} />

        </Form>
        </div>
         </>
    )
}