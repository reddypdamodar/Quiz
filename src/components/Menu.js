import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../Other/Contexts";

function Menu() {
  const { setGameState, setUserName } = useContext(GameStateContext);
  return (
    <div className="Menu">
      <label>
        <b>Enter Your Name:</b>{" "}
      </label>
      <input
        type="text"
        placeholder="  Ex. Damodhar"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setGameState("playing");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default Menu;
