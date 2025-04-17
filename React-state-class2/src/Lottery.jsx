import { useState } from "react";
import { genTicket, sum } from "./Helper";
import Ticket from "./Ticket";
import Button from "./Button";

export default function Lottery({ n = 3, winCondition }) {
  let [ticket, setTticket] = useState(genTicket(n));
  let isWinning = winCondition(ticket);

  let buyTicket = () => {
    setTticket(genTicket(n));
  };

  return (
    <div>
      <h1>Lottery Game</h1>
      <Ticket ticket={ticket} />
      <Button action={buyTicket}/>
      <h3>{isWinning && "Congratulations, You win!"}</h3>
    </div>
  );
}
