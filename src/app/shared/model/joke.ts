export class Joke {
  private _joke: string;
  private _category: string;
  private _by: string;

  constructor(joke: string, category: string, by: string) {
    this._joke = joke;
    this._category = category;
    this._by = by;
  }

  get joke(): string {
    return this._joke;
  }

  get category(): string {
    return this._category;
  }

  get by(): string {
    return this._by;
  }
}
