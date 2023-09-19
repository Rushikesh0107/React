import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2  rounded-full">
          <button
            onClick={() => setColor("red")}
            className="p-1 outline-none px-4 py-2 m-2 rounded-full text-white"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("green")}
            className="p-1 outline-none px-4 py-2 m-2 rounded-full text-white"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("blue")}
            className="p-1 outline-none px-4 py-2 m-2 rounded-full text-white"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("lavender")}
            className="p-1 outline-none px-4 py-2 m-2 rounded-full text-black"
            style={{ backgroundColor: "lavender" }}
          >
            Laveder
          </button>

          <button
            onClick={() => setColor("olive")}
            className="p-1 outline-none px-4 py-2 m-2 rounded-full text-white"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>

          <button
            onClick={() => setColor("yellow")}
            className="p-1 outline-none px-4 py-2 m-2 rounded-full text-black"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>

          <button
            onClick={() => setColor("orangered")}
            className="p-1 outline-none px-4 py-2 m-2 rounded-full text-black"
            style={{ backgroundColor: "orangered" }}
          >
            Orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
