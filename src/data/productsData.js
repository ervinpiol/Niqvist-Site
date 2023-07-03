import Vinyl1 from "../assets/Products/vinyl1.webp";
import Vinyl2 from "../assets/Products/vinyl2.webp";
import Vinyl3 from "../assets/Products/vinyl3.webp";
import Tshirt1 from "../assets/Products/tshirt1.webp";
import Tshirt2 from "../assets/Products/tshirt2.webp";
import Tshirt3 from "../assets/Products/tshirt3.webp";

export const productsData = [
  {
    image: Vinyl1,
    name: "Anhedonia EP Vinyl",
    price: 25,
    type: "vinyls",
    new: true,
    dateRecorded: "2021",
  },
  {
    image: Vinyl2,
    name: "Centrefold EP Vinyl",
    price: 22,
    type: "vinyls",
    dateRecorded: "2019",
  },
  {
    image: Tshirt1,
    name: "Cover Art T-shirt",
    price: 25,
    type: "tshirts",
    new: true,
    color: "White",
  },
  {
    image: Tshirt2,
    name: "Niqvist Anhedonia T-shirt",
    price: 25,
    type: "tshirts",
    soldOut: "true",
    color: "Black",
  },
  {
    image: Tshirt3,
    name: "Niqvist Logo T-shirt",
    price: 25,
    type: "tshirts",
    color: "Red",
  },
  {
    image: Vinyl3,
    name: "Studio Session Vinyl",
    price: 17.0,
    type: "vinyls",
    soldOut: true,
    dateRecorded: "2020",
  },
];
