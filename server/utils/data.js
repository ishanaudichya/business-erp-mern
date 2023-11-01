const items = [
  {
    name: "SG Cricket Bat",
    price: 149.99,
    category: "Cricket",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51UtlE8tC2L._AC_SY450_.jpg",
  },
  {
    name: "Butterfly Table Tennis Racket",
    price: 69.95,
    category: "Table Tennis",
    image:
      "https://cdn11.bigcommerce.com/s-o7m1o7mwp9/images/stencil/1280x1280/products/5780/5235/butterfly-timoboll-cm-3002-3__53618.1577231162.jpg",
  },
  {
    name: "Nike Football",
    price: 34.99,
    category: "Football",
    image:
      "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-0fdd7d2e-e313-4b18-a7ad-4f86e7e4f89d/nike-premier-team-12-football.jpg",
  },
  {
    name: "Yonex Badminton Racket",
    price: 89.99,
    category: "Badminton",
    image:
      "https://www.yonex.com/images/products/brz/astrox99-ld-z-strung-blue.jpg",
  },
  {
    name: "Wilson Basketball",
    price: 29.99,
    category: "Basketball",
    image: "https://images.sportsdirect.com/images/products/80006490_l.jpg",
  },
  {
    name: "Adidas Soccer Ball",
    price: 19.99,
    category: "Football",
    image:
      "https://cdn.runrepeat.com/i/adidas/34895/adidas-pro-model-vulc-plain-white.jpg",
  },
  {
    name: "Gray-Nicolls Cricket Bat",
    price: 139.95,
    category: "Cricket",
    image:
      "https://www.gray-nicolls.co.uk/wp-content/uploads/2019/09/powerbow5-players-cricket-bat-000-hero.jpg",
  },
  {
    name: "Reebok Fitness Dumbbells",
    price: 79.95,
    category: "Fitness",
    image: "https://m.media-amazon.com/images/I/61gXgsUBqEL._AC_SL1500_.jpg",
  },
  {
    name: "Puma Badminton Shoes",
    price: 54.99,
    category: "Badminton",
    image: "https://m.media-amazon.com/images/I/61E-gaK-IrL._AC_UY395_.jpg",
  },
  {
    name: "Spalding Basketball Hoop",
    price: 299.99,
    category: "Basketball",
    image:
      "https://cdn11.bigcommerce.com/s-6stqnuxc3p/images/stencil/original/products/341/451/44-7518_54__00267.1448301721.png",
  },
  {
    name: "SG Cricket Ball",
    price: 14.99,
    category: "Cricket",
    image: "https://m.media-amazon.com/images/I/51+XjzJH2KL.jpg",
  },
  {
    name: "Stiga Table Tennis Table",
    price: 399.99,
    category: "Table Tennis",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/91aeoBCXSTL._AC_SX679_.jpg",
  },
  {
    name: "Nike Fitness Gloves",
    price: 19.95,
    category: "Fitness",
    image: "https://m.media-amazon.com/images/I/81dA3gDh-jL._AC_UL320_.jpg",
  },
  {
    name: "Yonex Badminton Shuttlecocks",
    price: 15.99,
    category: "Badminton",
    image:
      "https://www.yonex.com/images/products/ny/nylon-s-m-badminton-shuttlecock-white-medium-speed.jpg",
  },
  {
    name: "Mikasa Basketball",
    price: 24.99,
    category: "Basketball",
    image: "https://images.sportsdirect.com/images/products/80026701_l.jpg",
  },
  {
    name: "Puma Cricket Gloves",
    price: 49.95,
    category: "Cricket",
    image: "https://m.media-amazon.com/images/I/61IEJt6i-RL._AC_UL320_.jpg",
  },
  {
    name: "Butterfly Table Tennis Balls",
    price: 9.99,
    category: "Table Tennis",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71nK5hncwFL._AC_SX679_.jpg",
  },
  {
    name: "Adidas Football Cleats",
    price: 69.95,
    category: "Football",
    image: "https://m.media-amazon.com/images/I/61LqbFFG+mL._AC_UL320_.jpg",
  },
  {
    name: "Yonex Badminton Bag",
    price: 29.99,
    category: "Badminton",
    image: "https://m.media-amazon.com/images/I/61gGw1+31DL._AC_UL320_.jpg",
  },
  {
    name: "Wilson Basketball Pump",
    price: 9.99,
    category: "Basketball",
    image: "https://images.sportsdirect.com/images/products/80005108_l.jpg",
  },
  {
    name: "SG Cricket Helmet",
    price: 49.99,
    category: "Cricket",
    image: "https://m.media-amazon.com/images/I/41fco+L9Y-L.jpg",
  },
  {
    name: "Stiga Table Tennis Net",
    price: 19.99,
    category: "Table Tennis",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/91eQTBXPY7L._AC_SX679_.jpg",
  },
  {
    name: "Reebok Fitness Mat",
    price: 34.95,
    category: "Fitness",
    image: "https://m.media-amazon.com/images/I/51Yx9Il2RUL._AC_UY395_.jpg",
  },
  {
    name: "Nike Football Gloves",
    price: 19.99,
    category: "Football",
    image: "https://m.media-amazon.com/images/I/71ryMkLSOTL._AC_UL320_.jpg",
  },
  {
    name: "Yonex Badminton Grip",
    price: 6.99,
    category: "Badminton",
    image: "https://m.media-amazon.com/images/I/81A0VABeR6L._AC_UL320_.jpg",
  },
  {
    name: "Nike Basketball Socks",
    price: 9.95,
    category: "Basketball",
    image: "https://m.media-amazon.com/images/I/81QDgXjqEUL._AC_UL320_.jpg",
  },
  {
    name: "Gray-Nicolls Cricket Gloves",
    price: 29.99,
    category: "Cricket",
    image: "https://m.media-amazon.com/images/I/61rhtWLEsUL._AC_UL320_.jpg",
  },
  {
    name: "Butterfly Table Tennis Cover",
    price: 12.95,
    category: "Table Tennis",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71oDbuAhJRL._AC_SX679_.jpg",
  },
];
module.exports = items;
