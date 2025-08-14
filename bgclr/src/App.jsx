
import { useState } from "react";

export default function App() {
  const [color, setColor] = useState("violet");

  const colors = [
    { name: "Red", value: "red" },
    { name: "Blue", value: "blue" },
    { name: "Black", value: "black" },
    { name: "Green", value: "green" },
    { name: "Violet", value: "violet" },
    { name: "Orange", value: "orange" },
    { name: "Yellow", value: "yellow" },
    { name: "Pink", value: "pink" },
    { name: "Brown", value: "brown" },
    { name: "Cyan", value: "cyan" },
    { name: "Magenta", value: "magenta" },
    { name: "Teal", value: "teal" },
    { name: "Indigo", value: "indigo" },
  ];

  return (
    <div
      className="w-screen h-screen flex flex-col gap-4 justify-center items-center"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap gap-2">
        {colors.map((c) => (
          <button
            key={c.value}
            onClick={() => setColor(c.value)}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: c.value }}
          >
            {c.name}
          </button>
        ))}
      </div>
    </div>
  );
}
