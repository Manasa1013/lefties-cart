// import uuid from "react-uuid";
import faker from "faker";

faker.seed(123);

const imageSources = [
  {
    id: 1,
    src: "https://imgk.timesnownews.com/story/lefty.jpg",
  },
  {
    id: 2,
    src: "https://i0.wp.com/thelefthandshop.in/wp-content/uploads/2017/08/Writing-Practice.jpg?resize=870%2C430&ssl=1",
  },
  {
    id: 3,
    src: "https://i0.wp.com/thelefthandshop.in/wp-content/uploads/2017/09/Untitled-2d.jpg?w=900",
  },
  {
    id: 4,
    src: "https://i0.wp.com/thelefthandshop.in/wp-content/uploads/2017/09/Banne-2.jpg?w=900",
  },
  {
    id: 5,
    src: "https://i0.wp.com/thelefthandshop.in/wp-content/uploads/2017/09/ciseaux_gaucher.jpg?w=900",
  },
];

export const categorizedProducts = [
  {
    id: 1,
    src: "https://i0.wp.com/thelefthandshop.in/wp-content/uploads/2017/08/Untitled-1.jpg?fit=800%2C800&ssl=1",
    category: "Books",
  },
  {
    id: 2,
    src: "https://i0.wp.com/thelefthandshop.in/wp-content/uploads/2017/08/RNS-ClubStar2-1.jpg?fit=800%2C800&ssl=1",
    category: "Stationery",
  },
  {
    id: 3,
    src: "https://i0.wp.com/thelefthandshop.in/wp-content/uploads/2017/08/sg-test-lg2.jpg?fit=800%2C800&ssl=1",
    category: "Cricket",
  },
  {
    id: 4,
    src: "https://i0.wp.com/thelefthandshop.in/wp-content/uploads/2017/08/MyLeft-Playing-Cards3.jpg?fit=800%2C800&ssl=1",
    category: "Fun stuff",
  },
  {
    id: 5,
    src: "https://i0.wp.com/thelefthandshop.in/wp-content/uploads/2021/02/Utility-Knife-Rounded_grande.jpg?fit=600%2C600&ssl=1",
    category: "Kitchen items",
  },
  {
    id: 6,
    src: "https://i0.wp.com/thelefthandshop.in/wp-content/uploads/2017/08/Seasor-2.jpg?fit=800%2C800&ssl=1",
    category: "Stationery",
  },
];
export const products = [
  {
    id: "737e8e1-cf3f-e322-f3b1-df03ac2b2d37",
    src: [
      "https://i0.wp.com/thelefthandshop.in/wp-content/uploads/2017/08/sg-test-lg2.jpg?fit=800%2C800&ssl=1",
      faker.random.image(),
    ],
    description: faker.lorem.sentence(),
    brand: "RNS Club Star – Boys",
    name: "BATTING LEG GUARDS FOR LEFT HANDED BATSMAN",
    category: "Cricket",
    count: 0,
    isAdded: false,
    isWishlisted: false,
    price: 880.0,
    discount: Math.floor(Math.random() * (50 - 1 + 1) + 1),
  },
  {
    id: "388c8-6a5-35fb-2b5c-87220a101aec",
    src: [
      "https://i0.wp.com/thelefthandshop.in/wp-content/uploads/2017/08/Untitled-1-1.jpg?fit=800%2C800&ssl=1",
      faker.random.image(),
    ],
    description: faker.lorem.sentence(),
    brand: "RNS Elite – Men",
    name: "BATTING LEG GUARDS FOR LEFT HANDED BATSMAN",
    category: "Cricket",
    count: 0,
    isAdded: false,
    isWishlisted: false,
    price: 1155.0,
    discount: Math.floor(Math.random() * (50 - 1 + 1) + 1),
  },
  {
    id: "ca86455-c5b3-112-2140-ded63a3e1f0e",
    src: [
      "https://i0.wp.com/thelefthandshop.in/wp-content/uploads/2017/08/SG-Excelite2.jpg?fit=800%2C800&ssl=1",
      faker.random.image(),
    ],
    description: faker.lorem.sentence(),
    brand: "SG – Excelite – Men",
    name: "LEFT HANDED BATTING GLOVES BY SG",
    category: "Cricket",
    count: 0,
    isAdded: false,
    isWishlisted: false,
    price: 1679.0,
    discount: Math.floor(Math.random() * (50 - 1 + 1) + 1),
  },
  {
    id: "fa565-b47-c4b-1118-122bd351c",
    src: [
      "https://i0.wp.com/thelefthandshop.in/wp-content/uploads/2017/08/sg-test-lg2.jpg?fit=800%2C800&ssl=1",
      faker.random.image(),
    ],
    description: faker.lorem.sentence(),
    brand: "RNS Club Star – Boys",
    name: "BATTING LEG GUARDS FOR LEFT HANDED BATSMAN",
    category: "Cricket",
    count: 0,
    isAdded: false,
    isWishlisted: false,
    price: 880.0,
    discount: Math.floor(Math.random() * (50 - 1 + 1) + 1),
  },
  {
    id: "b642cde-fe7-48f1-fea-a272e0284bcd",
    src: [
      "https://i0.wp.com/thelefthandshop.in/wp-content/uploads/2021/02/4-pieces-knife-set_grande.jpg?fit=600%2C600&ssl=1",
      faker.random.image(),
    ],
    description: faker.lorem.sentence(),
    brand: "rena germany Kitchen Utility Set",
    name: "4 Pcs Knife Set (1 Each of Serrated Knife 110 mm, Plain Knife 90 mm, Serrated Knife 90 mm, Promo Peeler)",
    category: "KitchenItems",
    count: 0,
    isAdded: false,
    isWishlisted: false,
    price: 220.0,
    discount: Math.floor(Math.random() * (50 - 1 + 1) + 1),
  },
  {
    id: "6788de0-4e5-714b-4c4e-33733838a3e2",
    src: [
      "https://i0.wp.com/thelefthandshop.in/wp-content/uploads/2021/02/paring-Knife.jpg?fit=810%2C607&ssl=1",
      faker.random.image(),
    ],
    description: faker.lorem.sentence(),
    brand: faker.lorem.word(),
    name: "Paring Knife Serrated Blade",
    category: "KitchenItems",
    count: 0,
    isAdded: false,
    isWishlisted: false,
    price: 125.0,
    discount: Math.floor(Math.random() * (50 - 1 + 1) + 1),
  },
  {
    id: "2cbc8-ed16-feec-48cc-5f7e2751d28",
    src: [
      "https://i0.wp.com/thelefthandshop.in/wp-content/uploads/2021/02/Cook-Knife-165-mm_grande.jpg?w=600&ssl=1",
      faker.random.image(),
    ],
    description: faker.lorem.sentence(),
    brand: "rena germany Kitchen Utility Set",
    name: "Cook Knife (165 mm)",
    category: "KitchenItems",
    count: 0,
    isAdded: false,
    isWishlisted: false,
    price: 160.0,
    discount: Math.floor(Math.random() * (50 - 1 + 1) + 1),
  },
  {
    id: "5cfd5ff-7473-1ab1-73a7-44f332a4328",
    src: [
      "https://i0.wp.com/thelefthandshop.in/wp-content/uploads/2017/08/MyLeft-Playing-Cards3.jpg?fit=800%2C800&ssl=1",
      faker.random.image(),
    ],
    description: faker.lorem.sentence(),
    brand: faker.lorem.word(),
    name: "My Left Playing Cards",
    category: "FunStuff",
    count: 0,
    isAdded: false,
    isWishlisted: false,
    price: 95.0,
    discount: Math.floor(Math.random() * (50 - 1 + 1) + 1),
  },
  {
    id: "c137ec-d13c-c32-252-c688f8e1ca8f",
    src: [
      "https://i0.wp.com/thelefthandshop.in/wp-content/uploads/2019/01/My-Left-Logo-1-square.jpg?fit=1122%2C1122&ssl=1",
      faker.random.image(),
    ],
    description: faker.lorem.sentence(),
    brand: faker.lorem.word(),
    name: "T Shirt [Always Right]",
    category: "FunStuff",
    count: 0,
    isAdded: false,
    isWishlisted: false,
    price: 599.0,
    discount: Math.floor(Math.random() * (50 - 1 + 1) + 1),
  },
  {
    id: "e784ab1-5068-0a12-0eac-ff3fcf6befc",
    src: [
      "https://i0.wp.com/thelefthandshop.in/wp-content/uploads/2019/01/My-Left-Logo-square.jpg?fit=1122%2C1122&ssl=1",
      faker.random.image(),
    ],
    description: faker.lorem.sentence(),
    brand: faker.lorem.word(),
    name: "T Shirt [Sooo Mainstream]",
    category: "FunStuff",
    count: 0,
    isAdded: false,
    isWishlisted: false,
    price: 599.0,
    discount: Math.floor(Math.random() * (50 - 1 + 1) + 1),
  },
  {
    id: "74ec46a-2ff6-c875-f340-abb7b64dbb72",
    src: [
      "https://i0.wp.com/thelefthandshop.in/wp-content/uploads/2017/08/Untitled-1.jpg?fit=800%2C800&ssl=1",
      faker.random.image(),
    ],
    description: faker.lorem.sentence(),
    brand: "MyLeft",
    name: "Hand writing Development Guide cum Workbook for Left Handers",
    category: "Books",
    count: 0,
    isAdded: false,
    isWishlisted: false,
    price: 225.0,
    discount: Math.floor(Math.random() * (50 - 1 + 1) + 1),
  },
  {
    id: "1c1d07-1f83-67ee-0a00-1a858bfd56",
    src: [
      "https://m.media-amazon.com/images/I/512PEE4TSRL._SX313_BO1,204,203,200_.jpg",
      faker.random.image(),
    ],
    description:
      ' For every lefty tired of living in a right-handed world, this witty and wise guide to the facts and findings, legend and lore of the so-called "sinister people" is a welcome bookshelf addition." ',
    brand: "Jack Fincher",
    name: "Lefties: The Origins & Consequences of Being Left-Handed Hardcover – Import, 1 February 1993",
    category: "Books",
    count: 0,
    isAdded: false,
    isWishlisted: false,
    price: 2825.0,
    discount: Math.floor(Math.random() * (50 - 1 + 1) + 1),
  },
  {
    id: "fa2fd5a-370-faee-127e-4ff51cd337c5",
    src: [
      "https://i0.wp.com/thelefthandshop.in/wp-content/uploads/2017/08/RNS-ClubStar2-1.jpg?fit=800%2C800&ssl=1",
      faker.random.image(),
    ],
    description:
      "A Bundle of 1 MyLeft Geo Pouch 13 inch and one Maped Geo Metric set of 12 inch",
    brand: "Maped",
    name: "Maped Geo Metric and MyLeft Geo Pouch Bundle",
    category: "Stationery",
    count: 0,
    isAdded: false,
    isWishlisted: false,
    price: 198.0,
    discount: Math.floor(Math.random() * (50 - 1 + 1) + 1),
  },
  {
    id: "2ba68ed-a66d-f047-38fe-065ea7ea21",
    src: [
      "https://i0.wp.com/thelefthandshop.in/wp-content/uploads/2017/08/Seasor-2.jpg?fit=800%2C800&ssl=1",
      faker.random.image(),
    ],
    description:
      "Scissors for young kids, Reversed blades for frustration free cutting for left handers. No more discomfort or making special effort to cut any paper. This scissors will work perfectly in your left hand.No more running from craft time, you will love cutting any shape or pattern with this scissors.Note: Color of product may vary.",
    brand: "Maped",
    name: "Shape 16cm – Left Handed",
    category: "Stationery",
    count: 0,
    isAdded: false,
    isWishlisted: false,
    price: 199.0,
    discount: Math.floor(Math.random() * (50 - 1 + 1) + 1),
  },
];

export const blogSources = [
  {
    id: 1,
    title: "METHODS OF TEACHING LEFT HANDED KIDS TO WRITE",
    altText:
      "Showing how the world is strange when left handers use right-handed products",
    link: "https://thelefthandshop.in/methods-of-teaching-left-handed-kids-to-write/",
    blogger: "ayyappan",
    imgSrc:
      "https://i0.wp.com/thelefthandshop.in/wp-content/uploads/2021/03/Products-for-left-handers-2.png?resize=1024%2C576&ssl=1",
  },
  {
    id: 2,
    title: "Left handed products you instantly fall in love with",
    altText: "Stationery kit for left-handed",
    link: "https://thelefthandshop.in/best-left-handed-products-in-india/",
    blogger: "supra",
    imgSrc:
      "https://i0.wp.com/thelefthandshop.in/wp-content/uploads/2017/08/Writing-Practice.jpg?resize=1024%2C647&ssl=1",
  },
];

export { imageSources };
