export interface Point {
  x: number;
  y: number;
}

export interface PolygonData {
  points: Point[];
  closed: boolean;
}