import React from "react";

const commandsList = [
  {
    command: "!discord",
    value: "Link al Discord de Insert Code",
  },
  {
    command: "!github",
    value: "El GitHub de Insert Code",
  },
  {
    command: "!hola",
    value: "Saludar a todos!",
  },
  {
    command: "!hoy",
    value: "De que se trata el capítulo actual",
  },
  {
    command: "!twitter",
    value: "El perfil de Twitter de Insert Code",
  },
  {
    command: "!youtube",
    value: "El canal de YouTube de Insert Code",
  },
];

const CommandsList = () => (
  <ul className="commands-list">
    {commandsList.map(({ command, value }) => (
      <li key={command} className="mt-3 mb-3">
        <span className="commands-list-key">{command}</span>: {value}
      </li>
    ))}
  </ul>
);

export default CommandsList;
