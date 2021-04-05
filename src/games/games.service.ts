import { Injectable } from '@nestjs/common';
import { Games } from '../games';
import { Game } from '../game';

@Injectable()
export class GamesService {
  private readonly games: Games = {};

  findAll(): Games {
    return this.games;
  }

  create(newGame: Game) {
    const id = Date.now();
    this.games[id] = { ...newGame, id };
  }

  find(id: number): Game {
    const game: Game = this.games[id];
    if (!game) throw new Error('No games found.');

    return game;
  }

  update(game: Game) {
    if (!this.games[game.id]) throw new Error('No game found.');
    this.games[game.id] = game;
  }

  delete(id: number) {
    const game: Game = this.games[id];
    if (!game) throw new Error('No game found.');

    delete this.games[id];
  }
}
