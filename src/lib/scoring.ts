import type { BucketChoice, Item, Placement, Room } from "./types";

export const cardScore = (choice: BucketChoice): number => {
  switch (choice) {
    case "yes":
      return 1;
    case "sometimes":
      return 0.5;
    case "no":
      return 0;
    case "idk":
      return 0;
  }
};

export type Score = {
  score: number;
  total: number;
  percent: number;
};

export const scoreRoom = (
  room: Room,
  placements: Placement[],
): Score => {
  const placementMap = new Map(placements.map((p) => [p.cardId, p.bucket]));
  const choices: BucketChoice[] = [];
  for (const item of room.items) {
    for (const card of item.cards) {
      const choice = placementMap.get(card.id);
      if (choice) choices.push(choice);
    }
  }
  const scored = choices.filter((c) => c !== "idk");
  const score = scored.reduce((sum, c) => sum + cardScore(c), 0);
  const total = scored.length;
  return {
    score,
    total,
    percent: total ? (score / total) * 100 : 0,
  };
};

export type Tier =
  | "foundation cracked"
  | "building up"
  | "operational"
  | "stacked";

export const tierLabel = (percent: number): Tier => {
  if (percent <= 25) return "foundation cracked";
  if (percent <= 50) return "building up";
  if (percent <= 75) return "operational";
  return "stacked";
};

export type ItemNoCount = {
  item: Item;
  noCount: number;
};

export const priorityGaps = (
  room: Room,
  placements: Placement[],
  limit = 3,
): ItemNoCount[] => {
  const placementMap = new Map(placements.map((p) => [p.cardId, p.bucket]));
  const byItem: ItemNoCount[] = room.items.map((item) => {
    const noCount = item.cards.filter(
      (c) => placementMap.get(c.id) === "no",
    ).length;
    return { item, noCount };
  });
  return byItem
    .filter((x) => x.noCount > 0)
    .sort((a, b) => b.noCount - a.noCount)
    .slice(0, limit);
};

export const idkCards = (
  room: Room,
  placements: Placement[],
): { item: Item; card: { id: string; text: string } }[] => {
  const placementMap = new Map(placements.map((p) => [p.cardId, p.bucket]));
  const out: { item: Item; card: { id: string; text: string } }[] = [];
  for (const item of room.items) {
    for (const card of item.cards) {
      if (placementMap.get(card.id) === "idk") {
        out.push({ item, card });
      }
    }
  }
  return out;
};
