module.exports = {
  rooms: [
    {
      id: 1,
      name: "Crossroad",
      type: 'Regular Room',
      description: "You are standing at a crossroad. To the north, east, south and west you see empty space, waiting to be filled.",
      exits: {n: 2, e: 3, w: 4, s: 5}
    },
    {
      id: 2,
      name: "Northern point",
      type: 'Regular Room',
      description: "You are standing at the north point of a crossroad. To the south, you see an empty intersection.",
      exits: {s: 1}
    },
    {
      id: 3,
      name: "Eastern point",
      type: 'Regular Room',
      description: "You are standing at the east point of a crossroad. To the west, you see an empty intersection.",
      exits: {w: 1}
    },
    {
      id: 4,
      name: "Western point",
      type: 'Regular Room',
      description: "You are standing at the west point of a crossroad. To the east, you see an empty intersection.",
      exits: {e: 1}
    },
    {
      id: 5,
      name: "Southern point",
      type: 'Regular Room',
      description: "You are standing at the south point of a crossroad. To the north, you see an empty intersection. To the south, you see darkness",
      exits: {n: 1, s: 6}
    },
    {
      id: 6,
      name: 'Southern Blue Room',
      type: 'Dark Room',
      description: "You cannot see anything",
      exits: {n: 5, s: 7}
    },
    {
      id: 7,
      name: 'Southern Green Room',
      type: 'Dark Room',
      description: "You cannot see anything",
      exits: {n: 1}
    },
  ],
  items: [
    {
      name: "rock",
      description: "Just a simple rock",
      room: 1
    },
    {
      name: "sandwich",
      description: "A tasty looking sandwich",
      room: 2,
      isFood: true
    }
  ],
  enemies: [
    {
      name: "goblin",
      description: "A mean-looking goblin",
      room: 3
    },
  ]
}
