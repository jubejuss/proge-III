export class Dice {
  private _sides: number;

  constructor(sides: number) {
    this._sides = sides;
  }

  public roll(sides: number) {
    return Math.floor(Math.random() * (this._sides - 1 + 1)) + 1;
  }
}
