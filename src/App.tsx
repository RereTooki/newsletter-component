import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className=" font-roboto text-3xl font-bold text-dark-slate-greys underline text-center">
        Hello world!
      </h1>

      <div></div>
    </>
  );
}

export default App;
