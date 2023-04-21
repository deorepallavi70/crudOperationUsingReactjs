import React, { useState } from "react";

export const SubName = () => {
  const [sub, setSub] = useState("math");

  const handleChange = (e) => {
    setSub(e.target.value);
  };
  return (
    <>
      <form>
        <select value={sub} onChange={handleChange}>
          <option value="math">math</option>
          <option value="history">history</option>
          <option value="marathi">marathi</option>
        </select>
      </form>
    </>
  );
};
