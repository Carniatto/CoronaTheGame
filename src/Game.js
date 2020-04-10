import { Client } from "boardgame.io/react";

import Board from "./Board";

const goGroceries = (G, ctx) => {
  G.supplies += 5;
  G.roll = Math.random();
  G.infected = G.roll >= 0.75;
  G.day++;
};

const stayHome = (G, ctx) => {
  G.supplies--;
  G.day++;
};

const CoronaGame = {
  setup: () => ({
    roll: 0,
    supplies: 5,
    infected: false,
    day: 0
  }),

  moves: {
    goGroceries,
    stayHome
  },

  endIf: G => {
    return G.infected ? { days: G.day } : undefined;
  }
};

const Game = Client({ game: CoronaGame, board: Board });

export default Game;
