import { filter, forEach, keys, values } from "ramda";
const data = [
  {
    "id": "001",
    "name": "Evans",
    "colour": {
      "productColour": "Conker Brown",
      "colourFamily": "Brown"
    },
    "price": 270,
    "sizes": [
      "UK 6",
      "UK 6.5",
      "UK 7",
      "UK 7.5",
      "UK 8",
      "UK 8.5",
      "UK 9",
      "UK 9.5",
      "UK 10",
      "UK 10.5"
    ],
    "description": "Premium toe cap Oxford shoe. Evans uses the Bullet last for a contemporary rounded toe shape and is available in Black, Conker and Dark Brown calf leathers. Evans features veg tanned linings and is made in England.",
    "fitting": "F Fit",
    "last": "Bullet",
    "sole": "Leather",
    "style": {
      "id": "toe-cap",
      "label": "Toe Cap"
    }
  },
  {
    "id": "002",
    "name": "Larch",
    "colour": {
      "productColour": "Black",
      "colourFamily": "Black"
    },
    "price": 195,
    "sizes": [
      "UK 6",
      "UK 6.5",
      "UK 7",
      "UK 7.5",
      "UK 8",
      "UK 8.5",
      "UK 9",
      "UK 9.5",
      "UK 10",
      "UK 10.5"
    ],
    "description": "The Loake Larch is a toe-cap Oxford Shoe and is built on our 'Ridge' last shape, Larch is a handmade toe-cap shoe with a full leather lining, and a leather insole for added comfort. Featuring a Goodyear Welted leather & rubber sole. Larch is made in India.",
    "fitting": "F Fit",
    "last": "Ridge",
    "sole": "Leather & Rubber",
    "style": {
      "id": "toe-cap",
      "label": "Toe Cap"
    }
  },
  {
    "id": "003",
    "name": "Larch",
    "colour": {
      "productColour": "Chestnut Brown",
      "colourFamily": "Brown"
    },
    "price": 195,
    "sizes": [
      "UK 6",
      "UK 6.5",
      "UK 7",
      "UK 7.5",
      "UK 8",
      "UK 8.5",
      "UK 9",
      "UK 9.5",
      "UK 10",
      "UK 10.5"
    ],
    "description": "The Loake Larch is a toe-cap Oxford Shoe and is built on our 'Ridge' last shape, Larch is a handmade toe-cap shoe with a full leather lining, and a leather insole for added comfort. Featuring a Goodyear Welted leather & rubber sole. Larch is made in India.",
    "fitting": "F Fit",
    "last": "Ridge",
    "sole": "Leather & Rubber",
    "style": {
      "id": "toe-cap",
      "label": "Toe Cap"
    }
  },
  {
    "id": "004",
    "name": "Chester",
    "colour": {
      "productColour": "Tan",
      "colourFamily": "Tan"
    },
    "price": 275,
    "sizes": [
      "UK 8",
      "UK 8.5",
      "UK 9",
      "UK 9.5",
      "UK 10",
      "UK 10.5"
    ],
    "description": "Our classic 'Chester' country brogue shoe is now available with a Dainite rubber studded sole for greater longevity and grip, Chester is made in England.",
    "fitting": "F Fit",
    "last": "024",
    "sole": "Dainite, Rubber",
    "style": {
      "id": "brogue",
      "label": "Brogue"
    }
  },
  {
    "id": "005",
    "name": "Kruger",
    "colour": {
      "productColour": "Tan",
      "colourFamily": "Tan"
    },
    "price": 195,
    "sizes": [
      "UK 6",
      "UK 6.5",
      "UK 7",
      "UK 7.5",
      "UK 8",
      "UK 8.5",
      "UK 9",
      "UK 9.5",
      "UK 10",
      "UK 10.5"
    ],
    "description": "Stylish derby brogue shoe, produced using the 'Ridge' last shape. Kruger is available in tan, burgundy and dark brown burnished calf leathers, or black calf, and is made in India.",
    "fitting": "F Fit",
    "last": "Ridge",
    "sole": "Leather",
    "style": {
      "id": "brogue",
      "label": "Brogue"
    }
  },
  {
    "id": "006",
    "name": "302",
    "colour": {
      "productColour": "Brown Suede",
      "colourFamily": "Brown"
    },
    "price": 165,
    "sizes": [
      "UK 6",
      "UK 6.5",
      "UK 7",
      "UK 7.5",
      "UK 8",
      "UK 8.5",
      "UK 9",
      "UK 9.5",
      "UK 10",
      "UK 10.5"
    ],
    "description": "Our '302' is a premium Brogue, featuring Goodyear welted rubber soles for greater longevity and grip. 302 uses the ???3625??? last shape for a generous fit and bold toe shape, and is available in a 'g' fitting. These shoes are designed and engineered in Kettering and made in our high-grade factory in India, using similar materials and finishing techniques as used in our Northamptonshire factory.",
    "fitting": "G Fit",
    "last": "3625",
    "sole": "Rubber",
    "style": {
      "id": "brogue",
      "label": "Brogue"
    }
  },
  {
    "id": "007",
    "name": "Hepworth",
    "colour": {
      "productColour": "Chestnut Brown",
      "colourFamily": "Brown"
    },
    "price": 195,
    "sizes": [
      "UK 6",
      "UK 6.5",
      "UK 7",
      "UK 7.5",
      "UK 8",
      "UK 8.5",
      "UK 9",
      "UK 9.5",
      "UK 10"
    ],
    "description": "An ode to design, craft and attention to detail, the Loake Hepworth is a hand-painted Oxford Brogue that appears within our Artist Collection and celebrates the creativity and artistry that comes together at Loake. Built on our new 'Artist' last shape, Hepworth is a handmade shoe with a full leather lining, and a leather insole for added comfort. Featuring a slick green Goodyear Welted distressed sole in leather & rubber, the true beauty of these brogue shoes lies in the way they are finished. Each brush stroke of colour is carefully brushed by hand, layer by layer over a natural base until that perfect, tone is achieved, ensuring each and every pair is truly unique in its character, patina and antiquing. Hepworth is made in India.",
    "fitting": "F Fit",
    "last": "Artist",
    "sole": "Leather & Rubber",
    "style": {
      "id": "brogue",
      "label": "Brogue"
    }
  },
  {
    "id": "008",
    "name": "Lymington",
    "colour": {
      "productColour": "Dark Brown",
      "colourFamily": "Brown"
    },
    "price": 125,
    "sizes": [
      "UK 6",
      "UK 6.5",
      "UK 7",
      "UK 7.5",
      "UK 8",
      "UK 8.5",
      "UK 9",
      "UK 9.5",
      "UK 10"
    ],
    "description": "Lace up boat shoe, featuring a Moccasin rubber sole. Lymington is available in Brown 'Crazy Horse' leather. Lymington is made in the EU.",
    "fitting": "F Fit",
    "last": "Boat",
    "sole": "Rubber",
    "style": {
      "id": "boat",
      "label": "Boat Shoe"
    }
  },
  {
    "id": "009",
    "name": "522",
    "colour": {
      "productColour": "Brown",
      "colourFamily": "Brown"
    },
    "price": 125,
    "sizes": [
      "UK 6",
      "UK 6.5",
      "UK 7",
      "UK 7.5",
      "UK 8",
      "UK 8.5",
      "UK 9",
      "UK 9.5",
      "UK 10"
    ],
    "description": "Waxy heavy deck shoe, made in the EU.",
    "fitting": "F Fit",
    "last": "Boat",
    "sole": "Rubber",
    "style": {
      "id": "boat",
      "label": "Boat Shoe"
    }
  },
  {
    "id": "010",
    "name": "Foley",
    "colour": {
      "productColour": "Black",
      "colourFamily": "Black"
    },
    "price": 195,
    "sizes": [
      "UK 6",
      "UK 6.5",
      "UK 7",
      "UK 7.5",
      "UK 8",
      "UK 8.5",
      "UK 9",
      "UK 9.5",
      "UK 10"
    ],
    "description": "Stylish Semi Brogue derby shoe, made using the 'Ridge' last shape. Foley is available in tan or black calf leathers, and features a contrast blue welt. Foley is handcrafted in India.",
    "fitting": "F Fit",
    "last": "Ridge",
    "sole": "Leather",
    "style": {
      "id": "semi-brogue",
      "label": "Semi Brogue"
    }
  },
  {
    "id": "011",
    "name": "Parliament",
    "colour": {
      "productColour": "Onyx Black",
      "colourFamily": "Black"
    },
    "price": 399,
    "sizes": [
      "UK 6",
      "UK 6.5",
      "UK 7",
      "UK 7.5",
      "UK 8",
      "UK 8.5",
      "UK 9",
      "UK 9.5",
      "UK 10"
    ],
    "description": "Handmade in Northamptonshire on our River last, Parliament is an elegant whole-cut Oxford shoe, crafted from a singular piece of calf skin leather, individually hand-selected, cut, and sewn together with one, discreet seam. Delivering a well-proportioned fit, this Oxford features a gentle, elongated chiselled toe and a fiddle-back waist for a more refined and elegant shape with increased arch-support. Heels are built using veg-tanned leather and incorporate a quarter rubber tip and premium leather linings provide maximum absorption and optimum foot comfort. The finished shoes are hand-burnished and finger-polished for a deep, rich shine, while fully-stitched Goodyear welted leather soles are intricately hand-decorated and reveal a painted two-tone stain. Parliament is available in Onyx Black, Antique Blue and Antique Brown calf leathers.",
    "fitting": "F Fit",
    "last": "River",
    "sole": "Leather",
    "style": {
      "id": "wholecut",
      "label": "Wholecut"
    }
  },
  {
    "id": "012",
    "name": "Chatsworth",
    "colour": {
      "productColour": "Brown Waxed Suede",
      "colourFamily": "Brown"
    },
    "price": 265,
    "sizes": [
      "UK 6",
      "UK 6.5",
      "UK 7",
      "UK 7.5",
      "UK 8",
      "UK 8.5",
      "UK 9",
      "UK 9.5",
      "UK 10"
    ],
    "description": "Classic Chelsea boot, Chatsworth is made using the Jockey last in a wide 'G' fitting, and features a rubber studded sole. Chatsworth is made in England.",
    "fitting": "G Fit",
    "last": "Jockey",
    "sole": "Dainite, Rubber",
    "style": {
      "id": "wholecut",
      "label": "Wholecut"
    }
  }
]


const filters = [
  { last: "Ridge"},
  { fitting: "F Fit" },
//  { sole: "Leather & Rubber" }
]


filter(product => {
  // Satisfy all filterItems equate to true...

  const filterBooleanValues = map(filterItem => {
    const filterItemKey = keys(filterItem)[0];
    const filterItemValue = values(filterItem)[0];

    return product[filterItemKey] === filterItemValue;
  }, filters)

  return filterBooleanValues.every(item => !!item)
}, data);







