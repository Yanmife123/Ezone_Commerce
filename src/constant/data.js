import Images from "./Images";

const navLinks = [
  {
    id: 1,
    dir: "/",
    title: "Home",
  },
  {
    id: 2,
    dir: "/contact",
    title: "Contact",
  },
  {
    id: 3,
    dir: "/about",
    title: "About",
  },
  {
    id: 4,
    dir: "/register",
    title: "Signup",
  },
];

const NavLinksPhone = [
  {
    id: 1,
    dir: "/",
    title: "Home",
  },
  {
    id: 2,
    dir: "contact",
    title: "Contact",
  },
  {
    id: 3,
    dir: "about",
    title: "About",
  },
  {
    id: 4,
    dir: "register",
    title: "Signup",
  },
  {
    id: 5,
    dir: "wishlist",
    title: "WishList",
  },
  {
    id: 6,
    dir: "cart",
    title: "Cart",
  },
];
const sideNavLink = [
  {
    id: "women fashion",
    title: "Women Fashion",
  },
  {
    id: "men fashion",
    title: "Men Fashion",
  },
  {
    id: "electronic",
    title: "Electronic",
  },
  {
    id: "home lifestyle",
    title: "Home and Lifestyle",
  },
  {
    id: "medicine",
    title: "Medicine",
  },
  {
    id: "sport and outdoor",
    title: "Sport and Outdoor",
  },
  {
    id: "toys",
    title: "Toys",
  },
  {
    id: "grocieres",
    title: "Grocieres",
  },
  {
    id: "health Beauty",
    title: "Health and Beauty",
  },
];

const Opening_Offer = {
  id: 1,
  name: "iphone 14 Series",

  logo: Images.appleLogo,
  banner: Images.Opening_Phone,
};

const Todays_data = [
  {
    id: 1,
    img: Images.Hv_Gampad,
    name: "HAVIT HV-G92 Gamepad",
    price: "$120",
    star: 5,
  },
  {
    id: 2,
    img: Images.Ak_Keyboard,
    name: "AK-900 Wired Keyboard",
    price: "$960",
    star: 4,
  },
  {
    id: 3,
    img: Images.TV,
    name: "IPS LCD Gaming Monitor",
    price: "$370",
    star: 5,
  },
  {
    id: 4,
    img: Images.C_chair,
    name: "S-Series Comfort Chair ",
    price: "$375",
    star: 4,
  },
  {
    id: 5,
    img: Images.SmartWatch,
    name: "Noise ColorFit Vision 2",
    price: "$17",
    star: 4,
  },
  {
    id: 6,
    img: Images.Iphone_16,
    name: "iPhone 14 (6GB | 128 GB)",
    price: "$700",
    star: 5,
  },
];

const BestSell = [
  {
    id: 1,
    name: "The north coat",
    img: Images.Gucci_Coat,
    price: "$260",
    star: 5,
  },
  {
    id: 2,
    name: "Gucci duffle bag",
    img: Images.Gucci_Bag,
    price: "$960",
    star: 4,
  },
  {
    id: 3,
    name: "RGB liquid CPU Cooler",
    img: Images.gammaxx,
    price: "$160",
    star: 5,
  },
  {
    id: 4,
    name: "Small BookSelf ",
    img: Images.Sam_moghadam,
    price: "$360",
    star: 3,
  },
];

export default {
  navLinks,
  Opening_Offer,
  sideNavLink,
  NavLinksPhone,
  Todays_data,
  BestSell,
};
