/// <reference path="../node_modules/@nativescript/types/index.d.ts" />

interface Player {
  id: number;
  name: string;
  color: string;
  score: number;
}

interface Challenge {
  name: string;
  players: Player[]
}
