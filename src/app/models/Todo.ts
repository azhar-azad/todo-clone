export class Todo {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public targetDate: Date,
    public done: boolean
  ) {}

}
