export class ItemPosition {
  constructor(public x: number = 0, public y: number = 0) {}
}
export class Item {
  constructor(
    public id: number,
    public count: number = 1,
    public position: ItemPosition = new ItemPosition(),
    public color: string = "#7FAA65"
  ) {}
}
