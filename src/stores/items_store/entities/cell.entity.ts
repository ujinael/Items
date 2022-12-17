export class GridCell {
  constructor(
    public position: {
      gridRowStart: number;
      gridRowEnd: number;
      gridColumnStart: number;
      gridColumnEnd: number;
    }
  ) {}
}
