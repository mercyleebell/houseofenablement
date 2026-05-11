export type BucketChoice = "yes" | "sometimes" | "no" | "idk";

export type Card = {
  id: string;
  text: string;
};

export type Item = {
  id: string;
  title: string;
  tagline: string;
  cards: Card[];
};

export type RoomNumber = 1 | 2 | 3 | 4;

export type Room = {
  id: string;
  number: RoomNumber;
  name: string;
  hero: string;
  sub: string;
  items: Item[];
};

export type Placement = {
  cardId: string;
  bucket: BucketChoice;
};

export type RoomResult = {
  roomId: string;
  placements: Placement[];
};
