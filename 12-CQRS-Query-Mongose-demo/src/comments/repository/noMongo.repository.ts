export class NoMongo {
  private readonly id: string;
  public username: string;
  constructor(_id: string, username?: string) {
    this.id = _id;
    this.username = username;
    console.log(`this.username`,  this.username)
    console.log(`这是${(this.id)}`);
  }
}
