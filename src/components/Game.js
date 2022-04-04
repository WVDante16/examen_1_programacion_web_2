import React, { useMemo, useState } from "react";
import './Game.css'
const elecciones = ["piedra", "papel", "tijeras"];

function Game() {
  const [seleccion, setSelected] = useState("");
  const [seleccionComputadora, setComputedSelected] = useState(""); const play = () => {
    if (!seleccion) {
      return;
    }
    const computerChoiceIndex = Math.floor(Math.random() * elecciones.length);
    setComputedSelected(elecciones[computerChoiceIndex]);
  };  const result = useMemo(() => {
    if (seleccionComputadora === seleccion) {
      return 'Empate!';
    } 
    else {
      if (
        (seleccionComputadora === "piedra" && seleccion === "tijeras") ||
        (seleccionComputadora === "papel" && seleccion === "piedra") ||
        (seleccionComputadora === "tijeras" && seleccion === "papel")
      ) {
        return "Perdiste! La computadora gana!";
      }
      return "Ganaste!";
    }
  }, [seleccionComputadora, seleccion]);  
  return (
    <div className="Game">
      <div> 
        <button className="button" onClick={() => setSelected("piedra")}>Piedra</button>
        <button className="button" onClick={() => setSelected("papel")}>Papel</button>
        <button className="button" onClick={() => setSelected("tijeras")}>Tijeras</button>
      </div>
      <button className="playButton" onClick={play}>Jugar</button>
      <p>Tu eleccion: {seleccion}</p>
      <p>Computadora: {seleccionComputadora}</p>
      <div>{result}</div>
    </div>
  );
}

export default Game;