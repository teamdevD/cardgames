type mark = "spade" | "heart" | "diamond" | "club"

export type surface = "front" | "back"

export type Card = {
  number: number;
  mark: mark;
  surface: surface;
  cardPath: string;
}

export const cardconfig = {
  width: 192,
  height: 192,
  scare: 1.0,
}

