export class User {
  constructor(
    private _nick: string,
    private _name: string,
    private _email: string,
    private _password: string
  ) { };

  get nick(): string { return this._nick };
}