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
    dir: "/dashboard",
    title: "Dashboard",
  },
  {
    id: 5,
    dir: "/register",
    title: "Signup",
  },
  {
    id: 6,
    dir: "/login",
    title: "SignIn",
  },
];

const UserNav = [
  {
    id: 1,
    icon: Images.iconMyAccount,
    text: "Manage My Account",
    dir: "/myAccount/profile",
  },
  {
    id: 2,
    icon: Images.iconMailBag,
    text: "My Order",
    dir: "/orders",
  },
  {
    id: 3,
    icon: Images.iconCancel,
    text: "My Cancellations",
    dir: "/cancellations",
  },
  {
    id: 4,
    icon: Images.iconReview,
    text: "My Reviews",
    dir: "/myReviews",
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

// const OurProudct = [
//   {
//     id: 1,

//   }
// ]

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

const Services = [
  {
    id: 1,
    icon: Images.Icon_delivery,
    title: "FREE AND FAST DELIVERY",
    note: "Free delivery for all orders over $140",
  },
  {
    id: 2,
    icon: Images.Icon_Customer_Service,
    title: "24/7 CUSTOMER SERVICE",
    note: "Friendly 24/7 customer support",
  },
  {
    id: 3,
    icon: Images.Icon_protection,
    title: "MONEY BACK GUARANTEE",
    note: "We reurn money within 30 days",
  },
];

const footerData = [
  {
    id: "Service",
    support: [
      {
        id: "address",
        value: "111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.",
      },
      {
        id: "email",
        value: "exclusive@gmail.com",
      },
      {
        id: "number",
        value: "+88015-88888-9999",
      },
    ],
  },
  {
    id: "Account",
    support: [
      {
        id: "myaccount",
        dir: "/account",
        title: "My Account",
      },
      {
        id: "login",
        dir: "/login",
        title: "Login/Register",
      },
      {
        id: "cart",
        dir: "/cart",
        title: "Cart",
      },
      {
        id: "wishlist",
        dir: "/wishlist",
        title: "Wishlist",
      },
      {
        id: "shop",
        dir: "/shop",
        title: "Sop",
      },
    ],
  },
  {
    id: "QuickLink",
    support: [
      {
        id: "privacyPolicy",
        dir: "",
        title: "Privacy Policy",
      },
      {
        id: "TermOfUse",
        dir: "",
        title: "Terms Of Use",
      },
      {
        id: "faq",
        dir: "",
        title: "FAQ",
      },
      {
        id: "contact",
        dir: "/contact",
        title: "Contact",
      },
    ],
  },
];

const About_Serivce = [
  {
    id: 1,
    img: Images.contact_Service1,
    value: "10.5k",
    text: "Sallers active our site",
  },
  {
    id: 2,
    img: Images.contact_Service5,
    value: "33k",
    text: "Mopnthly Produduct Sale",
  },
  {
    id: 3,
    img: Images.contact_Service2,
    value: "45.5k",
    text: "Customer active in our site",
  },
  {
    id: 4,
    img: Images.contact_Service3,
    value: "25k",
    text: "Anual gross sale in our site",
  },
];

const About_founder = [
  {
    id: 1,
    img: Images.Tom,
    name: "Tom Cruise",
    profession: "Founder & Chairman",
  },
  {
    id: 2,
    img: Images.Emma,
    name: "Emma Watson",
    profession: "Managing Director",
  },
  {
    id: 3,
    img: Images.Will,
    name: "Will Smith",
    profession: "Product Designer",
  },
];

export default {
  navLinks,
  Opening_Offer,
  sideNavLink,
  NavLinksPhone,
  Todays_data,
  BestSell,
  Services,
  footerData,
  About_Serivce,
  About_founder,
  UserNav,
};
