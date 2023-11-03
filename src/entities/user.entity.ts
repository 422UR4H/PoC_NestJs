export class User {
  constructor(
    private _nick: string,
    private _name: string,
    private _email: string,
    private _password: string
  ) { };

  get nick(): string {
    return this._nick
  };

  get name(): string {
    return this._name
  };

  get email(): string {
    return this._email
  };

  get password(): string {
    return this._password
  };
}