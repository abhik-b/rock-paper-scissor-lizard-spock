export const GameRules = [
  {
    value: "scissor",
    beats: ["paper", "lizard"],
  },

  {
    value: "paper",
    beats: ["rock", "spock"],
  },
  {
    value: "rock",
    beats: ["scissor", "lizard"],
  },
  {
    value: "spock",
    beats: ["scissor", "rock"],
  },
  {
    value: "lizard",
    beats: ["spock", "paper"],
  },
];
