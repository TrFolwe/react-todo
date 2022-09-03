import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from "react";

const root = ReactDOM.createRoot(document.getElementById('root'));

function FavoriteColor() {
  const [color, setColor] = useState("red");
  return (
  <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={(event) => setColor("BLUE")}
      >Blue</button>
    </>
  );
}

const devices = [{
  "deviceModel": "Samsung",
  "devicePrice": 5000
}, {
  "deviceModel": "Xiaomi",
  "devicePrice": 3500
}];

root.render(
  <FavoriteColor/>
);
