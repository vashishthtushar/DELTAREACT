import "./App.css";
import LudoBoard from "./LudoBoard";
import TodoList from "./TodoList";
import Lottery from "./Lottery";
import { sum } from "./Helper";

function App() {
  let winCondition = (ticket) => {
    // return ticket.every((num)=> num === ticket[0]);
    return ticket[0]===0;
  };

  return (
    <>
      <Lottery n={3} winCondition={winCondition} />
    </>
  );
}

export default App;
