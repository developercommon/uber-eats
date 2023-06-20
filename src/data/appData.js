import * as ROUTES from "../components/constants/routes";

export const allCategories = [
  {
    id: 0,
    title: "Mexican",
    imgUrl: require("../../assets/images/BrowseScreenImages/CategoryImage-7.png"),
  },
  {
    id: 1,
    title: "Fast Food",
    imgUrl: require("../../assets/images/BrowseScreenImages/CategoryImage-8.png"),
  },
  {
    id: 2,
    title: "Healthy",
    imgUrl: require("../../assets/images/BrowseScreenImages/CategoryImage-9.png"),
  },
  {
    id: 3,
    title: "Pizza",
    imgUrl: require("../../assets/images/BrowseScreenImages/CategoryImage-10.png"),
  },
  {
    id: 4,
    title: "Asian",
    imgUrl: require("../../assets/images/BrowseScreenImages/CategoryImage-11.png"),
  },
  {
    id: 5,
    title: "Bakery",
    imgUrl: require("../../assets/images/BrowseScreenImages/CategoryImage-12.png"),
  },
  {
    id: 6,
    title: "Sandwich",
    imgUrl: require("../../assets/images/BrowseScreenImages/CategoryImage-13.png"),
  },
  {
    id: 7,
    title: "Sushi",
    imgUrl: require("../../assets/images/BrowseScreenImages/CategoryImage-14.png"),
  },
  {
    id: 8,
    title: "Korean",
    imgUrl: require("../../assets/images/BrowseScreenImages/CategoryImage-15.png"),
  },
  {
    id: 9,
    title: "Vietnamese",
    imgUrl: require("../../assets/images/BrowseScreenImages/CategoryImage-16.png"),
  },
  {
    id: 10,
    title: "Vegan",
    imgUrl: require("../../assets/images/BrowseScreenImages/CategoryImage-17.png"),
  },
  {
    id: 11,
    title: "Bubble Tea",
    imgUrl: require("../../assets/images/BrowseScreenImages/CategoryImage-18.png"),
  },
  {
    id: 12,
    title: "Juice & Smoothies",
    imgUrl: require("../../assets/images/BrowseScreenImages/CategoryImage-19.png"),
  },
  {
    id: 13,
    title: "Burgers",
    imgUrl: require("../../assets/images/BrowseScreenImages/CategoryImage-20.png"),
  },
];
export const topCategories = [
  {
    id: 0,
    title: "Breakfast & brunch",
    imgUrl: require("../../assets/images/BrowseScreenImages/CategoryImage-1.png"),
  },
  {
    id: 1,
    title: "Coffe & tea",
    imgUrl: require("../../assets/images/BrowseScreenImages/CategoryImage-2.png"),
  },
  {
    id: 2,
    title: "Deals",
    imgUrl: require("../../assets/images/BrowseScreenImages/CategoryImage-3.png"),
    routeName: ROUTES.DEALS_SCREEN,
    type: 1,
  },
  {
    id: 3,
    title: "Restaurant Rewards",
    imgUrl: require("../../assets/images/BrowseScreenImages/CategoryImage-4.png"),
    routeName: ROUTES.DEALS_SCREEN,
    type: 2,
  },
  {
    id: 4,
    title: "Best overall",
    imgUrl: require("../../assets/images/BrowseScreenImages/CategoryImage-5.png"),
  },
  {
    id: 5,
    title: "Shipped free",
    imgUrl: require("../../assets/images/BrowseScreenImages/CategoryImage-6.png"),
  },
];

export const data = [
  {
    id: 0,
    title: "Orders",
    icon: require("../../assets/images/OrdersIcon.png"),
  },
  {
    id: 1,
    title: "Your favourites",
    icon: require("../../assets/images/icons/heart.png"),
  },
  {
    id: 2,
    title: "Restaurant Rewards",
    icon: require("../../assets/images/icons/starCircle.png"),
  },
  {
    id: 3,
    title: "Wallet",
    icon: require("../../assets/images/icons/Wallet.png"),
  },
  {
    id: 4,
    title: "Send a gift",
    icon: require("../../assets/images/icons/gift.png"),
  },
  {
    id: 5,
    title: "Business preferences",
    icon: require("../../assets/images/icons/union.png"),
  },
  {
    id: 6,
    title: "Help",
    icon: require("../../assets/images/icons/help.png"),
  },
  {
    id: 7,
    title: "Promotions",
    icon: require("../../assets/images/icons/promotion.png"),
  },
  {
    id: 8,
    title: "Deliver with Uber",
    icon: require("../../assets/images/icons/roundUnion.png"),
  },
  {
    id: 9,
    title: "Settings",
    value: ROUTES.SETTINGS_SCREEN,
    icon: require("../../assets/images/icons/settings.png"),
  },
];

export const basketData = [
  {
    id: 0,
    title: "Begs & Megs",
    subTitle: "1 item / US$43.00",
    desc: "Deliver to San Franciscao Bay Area",
    imageUrl: require("../../assets/images/begs.png"),
  },
  {
    id: 1,
    title: "Taco Bell",
    subTitle: "1 item / US$43.00",
    desc: "Deliver to San Franciscao Bay Area",
    imageUrl: require("../../assets/images/begs.png"),
  },
  {
    id: 2,
    title: "Begs & Megs",
    subTitle: "1 item / US$43.00",
    desc: "Deliver to San Franciscao Bay Area",
    imageUrl: require("../../assets/images/begs.png"),
  },
  {
    id: 3,
    title: "Taco Bell",
    subTitle: "1 item / US$43.00",
    desc: "Deliver to San Franciscao Bay Area",
    imageUrl: require("../../assets/images/begs.png"),
  },
];

export const OffersList = [
  {
    id: 0,
    imgUrl: require("../../assets/images/IceCreamBar.png"),
    title: "OFFERSSSS",
    price: "0.59",
    deliveryTime: "15-20",
    rating: 2.6,
    promQuantity: null,
    promPrice: null,
    promotion: false,
    distance: "1",
  },
  {
    id: 1,
    imgUrl: require("../../assets/images/mainCardImg.png"),
    title: "Cardinal Chips",
    price: "1.29",
    deliveryTime: "10-25",
    rating: 3.3,
    promQuantity: null,
    promPrice: null,
    promotion: false,
    distance: "1",
  },
  {
    id: 2,
    imgUrl: require("../../assets/images/AdenineKitchen.png"),
    title: "Adenine Kitchen",
    price: "0.65",
    deliveryTime: "5-15",
    rating: 4.1,
    promQuantity: "5",
    promPrice: "8",
    promotion: true,
    distance: "1",
  },
  {
    id: 3,
    imgUrl: require("../../assets/images/IceCreamBar.png"),
    title: "Ice Cream Bar",
    price: "0.59",
    deliveryTime: "15-20",
    rating: 2.6,
    promQuantity: null,
    promPrice: null,
    promotion: false,
    distance: "1",
  },
  {
    id: 4,
    imgUrl: require("../../assets/images/mainCardImg.png"),
    title: "Cardinal Chips",
    price: "1.29",
    deliveryTime: "10-25",
    rating: 3.3,
    promQuantity: null,
    promPrice: null,
    promotion: false,
    distance: "1",
  },
  {
    id: 5,
    imgUrl: require("../../assets/images/AdenineKitchen.png"),
    title: "Adenine Kitchen",
    price: "0.65",
    deliveryTime: "5-15",
    rating: 4.1,
    promQuantity: "5",
    promPrice: "8",
    promotion: true,
    distance: "1",
  },
  {
    id: 6,
    imgUrl: require("../../assets/images/AdenineKitchen.png"),
    title: "Adenine Kitchen",
    price: "0.65",
    deliveryTime: "5-15",
    rating: 4.1,
    promQuantity: "5",
    promPrice: "8",
    promotion: true,
    distance: "1",
  },
  {
    id: 7,
    imgUrl: require("../../assets/images/mainCardImg.png"),
    title: "Cardinal Chips",
    price: "1.29",
    deliveryTime: "10-25",
    rating: 3.3,
    promQuantity: null,
    promPrice: null,
    promotion: false,
    distance: "1",
  },
];
export const RewardsList = [
  {
    id: 0,
    imgUrl: require("../../assets/images/AdenineKitchen.png"),
    title: "REWARDSSSSS",
    price: "0.59",
    deliveryTime: "15-20",
    rating: 2.6,
    promQuantity: null,
    promPrice: null,
    promotion: false,
    distance: "1",
  },
  {
    id: 1,
    imgUrl: require("../../assets/images/mainCardImg.png"),
    title: "Cardinal Chips",
    price: "1.29",
    deliveryTime: "10-25",
    rating: 3.3,
    promQuantity: null,
    promPrice: null,
    promotion: false,
    distance: "1",
  },
  {
    id: 2,
    imgUrl: require("../../assets/images/AdenineKitchen.png"),
    title: "Adenine Kitchen",
    price: "0.65",
    deliveryTime: "5-15",
    rating: 4.1,
    promQuantity: "5",
    promPrice: "8",
    promotion: true,
    distance: "1",
  },
  {
    id: 3,
    imgUrl: require("../../assets/images/IceCreamBar.png"),
    title: "Ice Cream Bar",
    price: "0.59",
    deliveryTime: "15-20",
    rating: 2.6,
    promQuantity: null,
    promPrice: null,
    promotion: false,
    distance: "1",
  },
  {
    id: 4,
    imgUrl: require("../../assets/images/mainCardImg.png"),
    title: "Cardinal Chips",
    price: "1.29",
    deliveryTime: "10-25",
    rating: 3.3,
    promQuantity: null,
    promPrice: null,
    promotion: false,
    distance: "1",
  },
  {
    id: 5,
    imgUrl: require("../../assets/images/AdenineKitchen.png"),
    title: "Adenine Kitchen",
    price: "0.65",
    deliveryTime: "5-15",
    rating: 4.1,
    promQuantity: "5",
    promPrice: "8",
    promotion: true,
    distance: "1",
  },
  {
    id: 6,
    imgUrl: require("../../assets/images/AdenineKitchen.png"),
    title: "Adenine Kitchen",
    price: "0.65",
    deliveryTime: "5-15",
    rating: 4.1,
    promQuantity: "5",
    promPrice: "8",
    promotion: true,
    distance: "1",
  },
  {
    id: 7,
    imgUrl: require("../../assets/images/mainCardImg.png"),
    title: "Cardinal Chips",
    price: "1.29",
    deliveryTime: "10-25",
    rating: 3.3,
    promQuantity: null,
    promPrice: null,
    promotion: false,
    distance: "1",
  },
];

export const groceryData = [
  {
    id: 0,
    restaurant: "Safeway",
    title: "In 60 minutes",
    imgUrl: require("../../assets/images/groceryImages/safeway.png"),
    color: "#F60000",
  },
  {
    id: 1,
    restaurant: "Andronico's",
    title: "In 60 minutes",
    imgUrl: require("../../assets/images/groceryImages/andronico.png"),
    color: "#77A240",
  },
  {
    id: 2,
    restaurant: "5 Element",
    title: "In 60 minutes",
    imgUrl: require("../../assets/images/groceryImages/5element.png"),
    color: "#E4AE3C",
  },
  {
    id: 3,
    restaurant: "Grocery Outlet",
    title: "In 60 minutes",
    imgUrl: require("../../assets/images/groceryImages/groceryOutlet.png"),
    color: "#B71234",
  },
  {
    id: 4,
    restaurant: "Cardenas",
    title: "In 60 minutes",
    imgUrl: require("../../assets/images/groceryImages/cardenas.png"),
    color: "#AB0920",
  },
  {
    id: 5,
    restaurant: "Smart&Final",
    imgUrl: require("../../assets/images/groceryImages/smart.png"),
    title: "Currently unavailable",
    color: "#D2202F",
  },
];

///HOME SCREEN
export const deliveryList = [
  {
    id: 0,
    imgUrl: require("../../assets/images/IceCreamBar.png"),
    title: "Ice Cream Bar",
    price: "0.59",
    deliveryTime: "15-20",
    rating: 2.6,
    promQuantity: null,
    promPrice: null,
    promotion: false,
    distance: "1",
  },
  {
    id: 1,
    imgUrl: require("../../assets/images/mainCardImg.png"),
    title: "Cardinal Chips",
    price: "1.29",
    deliveryTime: "10-25",
    rating: 3.3,
    promQuantity: null,
    promPrice: null,
    promotion: false,
    distance: "1",
  },
  {
    id: 2,
    imgUrl: require("../../assets/images/AdenineKitchen.png"),
    title: "Adenine Kitchen",
    price: "0.65",
    deliveryTime: "5-15",
    rating: 4.1,
    promQuantity: "5",
    promPrice: "8",
    promotion: true,
    distance: "1",
  },
  {
    id: 3,
    imgUrl: require("../../assets/images/IceCreamBar.png"),
    title: "Ice Cream Bar",
    price: "0.59",
    deliveryTime: "15-20",
    rating: 2.6,
    promQuantity: null,
    promPrice: null,
    promotion: false,
    distance: "1",
  },
  {
    id: 4,
    imgUrl: require("../../assets/images/mainCardImg.png"),
    title: "Cardinal Chips",
    price: "1.29",
    deliveryTime: "10-25",
    rating: 3.3,
    promQuantity: null,
    promPrice: null,
    promotion: false,
    distance: "1",
  },
  {
    id: 5,
    imgUrl: require("../../assets/images/AdenineKitchen.png"),
    title: "Adenine Kitchen",
    price: "0.65",
    deliveryTime: "5-15",
    rating: 4.1,
    promQuantity: "5",
    promPrice: "8",
    promotion: true,
    distance: "1",
  },
  {
    id: 6,
    imgUrl: require("../../assets/images/AdenineKitchen.png"),
    title: "Adenine Kitchen",
    price: "0.65",
    deliveryTime: "5-15",
    rating: 4.1,
    promQuantity: "5",
    promPrice: "8",
    promotion: true,
    distance: "1",
  },
  {
    id: 7,
    imgUrl: require("../../assets/images/mainCardImg.png"),
    title: "Cardinal Chips",
    price: "1.29",
    deliveryTime: "10-25",
    rating: 3.3,
    promQuantity: null,
    promPrice: null,
    promotion: false,
    distance: "1",
  },
];
export const ctgrList = [
  {
    id: 0,
    title: "Convenience",
    imgUrl: require("../../assets/images/categoryImages/convenience.png"),
  },
  {
    id: 1,

    title: "Alcohol",
    imgUrl: require("../../assets/images/categoryImages/alcohol.png"),
  },
  {
    id: 2,

    title: "Pet Supplies",
    imgUrl: require("../../assets/images/categoryImages/pet-supplies.png"),
  },
  {
    id: 3,

    title: "Flowers",
    imgUrl: require("../../assets/images/categoryImages/flowers.png"),
  },
  {
    id: 4,

    title: "Grocery",
    imgUrl: require("../../assets/images/categoryImages/grocery.png"),
  },
  {
    id: 5,

    title: "American",
    imgUrl: require("../../assets/images/categoryImages/american.png"),
  },
  {
    id: 6,

    title: "Speciality",
    imgUrl: require("../../assets/images/categoryImages/speciality.png"),
  },
  {
    id: 7,

    title: "Takeout",
    imgUrl: require("../../assets/images/categoryImages/takeout.png"),
  },
  {
    id: 8,

    title: "Asian",
    imgUrl: require("../../assets/images/categoryImages/asian.png"),
  },
  {
    id: 9,

    title: "Ice Cream",
    imgUrl: require("../../assets/images/categoryImages/ice-cream.png"),
  },
  {
    id: 10,

    title: "Halal",
    imgUrl: require("../../assets/images/categoryImages/halal.png"),
  },
  {
    id: 11,

    title: "Retails",
    imgUrl: require("../../assets/images/categoryImages/retails.png"),
  },
  {
    id: 12,

    title: "Carribean",
    imgUrl: require("../../assets/images/categoryImages/carribean.png"),
  },
  {
    id: 13,

    title: "Indian",
    imgUrl: require("../../assets/images/categoryImages/indian.png"),
  },
  {
    id: 14,

    title: "French",
    imgUrl: require("../../assets/images/categoryImages/french.png"),
  },
  {
    id: 15,

    title: "Fast Foods",
    imgUrl: require("../../assets/images/categoryImages/fast-foods.png"),
  },
  {
    id: 16,

    title: "Burger",
    imgUrl: require("../../assets/images/categoryImages/burger.png"),
  },
  {
    id: 17,

    title: "Ride",
    imgUrl: require("../../assets/images/categoryImages/ride.png"),
  },
  {
    id: 18,

    title: "Chinese",
    imgUrl: require("../../assets/images/categoryImages/chinese.png"),
  },
  {
    id: 19,

    title: "Dessert",
    imgUrl: require("../../assets/images/categoryImages/dessert.png"),
  },
];
export const pickupList = [
  {
    id: 0,
    imgUrl: require("../../assets/images/IceCreamBar.png"),
    title: "PICK UPPPPPPPPPPP",
    price: "0.59",
    deliveryTime: "15-20",
    rating: 2.6,
    promQuantity: null,
    promPrice: null,
    promotion: false,
    distance: "2",
  },
  {
    id: 1,
    imgUrl: require("../../assets/images/mainCardImg.png"),
    title: "Cardinal Chips",
    price: "1.29",
    deliveryTime: "10-25",
    rating: 3.3,
    promQuantity: null,
    promPrice: null,
    promotion: false,
    distance: "2",
  },
  {
    id: 2,
    imgUrl: require("../../assets/images/AdenineKitchen.png"),
    title: "Adenine Kitchen",
    price: "0.65",
    deliveryTime: "5-15",
    rating: 4.1,
    promQuantity: "5",
    promPrice: "8",
    promotion: true,
    distance: "2",
  },
  {
    id: 3,
    imgUrl: require("../../assets/images/IceCreamBar.png"),
    title: "Ice Cream Bar",
    price: "0.59",
    deliveryTime: "15-20",
    rating: 2.6,
    promQuantity: null,
    promPrice: null,
    promotion: false,
    distance: "2",
  },
  {
    id: 4,
    imgUrl: require("../../assets/images/mainCardImg.png"),
    title: "Cardinal Chips",
    price: "1.29",
    deliveryTime: "10-25",
    rating: 3.3,
    promQuantity: null,
    promPrice: null,
    promotion: false,
    distance: "2",
  },
  {
    id: 5,
    imgUrl: require("../../assets/images/AdenineKitchen.png"),
    title: "Adenine Kitchen",
    price: "0.65",
    deliveryTime: "5-15",
    rating: 4.1,
    promQuantity: "5",
    promPrice: "8",
    promotion: true,
    distance: "2",
  },
];
export const dineinList = [
  {
    id: 0,
    imgUrl: require("../../assets/images/IceCreamBar.png"),
    title: "DINE INNNNNNNNNNNN",
    price: "0.59",
    deliveryTime: "15-20",
    rating: 2.6,
    promQuantity: null,
    promPrice: null,
    promotion: false,
    distance: "1.5",
  },
  {
    id: 1,
    imgUrl: require("../../assets/images/mainCardImg.png"),
    title: "Cardinal Chips",
    price: "1.29",
    deliveryTime: "10-25",
    rating: 3.3,
    promQuantity: null,
    promPrice: null,
    promotion: false,
    distance: "4.2",
  },
  {
    id: 2,
    imgUrl: require("../../assets/images/AdenineKitchen.png"),
    title: "Adenine Kitchen",
    price: "0.65",
    deliveryTime: "5-15",
    rating: 4.1,
    promQuantity: "5",
    promPrice: "8",
    promotion: true,
    distance: "0.4",
  },
  {
    id: 3,
    imgUrl: require("../../assets/images/IceCreamBar.png"),
    title: "Ice Cream Bar",
    price: "0.59",
    deliveryTime: "15-20",
    rating: 2.6,
    promQuantity: null,
    promPrice: null,
    promotion: false,
    distance: "1",
  },
  {
    id: 4,
    imgUrl: require("../../assets/images/mainCardImg.png"),
    title: "Cardinal Chips",
    price: "1.29",
    deliveryTime: "10-25",
    distance: "0.2",
    rating: 3.3,
    promQuantity: null,
    promPrice: null,
    promotion: false,
    distance: "5.2",
  },
  {
    id: 5,
    imgUrl: require("../../assets/images/AdenineKitchen.png"),
    title: "Adenine Kitchen",
    price: "0.65",
    deliveryTime: "5-15",
    rating: 4.1,
    promQuantity: "5",
    promPrice: "8",
    promotion: true,
    distance: "8.2",
  },
];
export const horizontalList = [
  {
    id: 0,
    imgUrl: require("../../assets/images/IceCreamBar.png"),
    title: "Ice Cream Bar",
    price: "0.59",
    deliveryTime: "15-20",
    rating: 2.6,
    promQuantity: null,
    promPrice: null,
    promotion: false,
    distance: "1",
  },
  {
    id: 1,
    imgUrl: require("../../assets/images/mainCardImg.png"),
    title: "Cardinal Chips",
    price: "1.29",
    deliveryTime: "10-25",
    rating: 3.3,
    promQuantity: null,
    promPrice: null,
    promotion: false,
    distance: "1",
  },
  {
    id: 2,
    imgUrl: require("../../assets/images/AdenineKitchen.png"),
    title: "Adenine Kitchen",
    price: "0.65",
    deliveryTime: "5-15",
    rating: 4.1,
    promQuantity: "5",
    promPrice: "8",
    promotion: true,
    distance: "1",
  },
  {
    id: 3,
    imgUrl: require("../../assets/images/IceCreamBar.png"),
    title: "Ice Cream Bar",
    price: "0.59",
    deliveryTime: "15-20",
    rating: 2.6,
    promQuantity: null,
    promPrice: null,
    promotion: false,
    distance: "1",
  },
];

///ORDER DETAILS SCREEN
export const sauces = [
  {
    id: 0,
    title: "Mariana sauce",
    isChecked: false,
  },
  {
    id: 1,
    title: "Garlicky sauce",
    isChecked: false,
  },
  {
    id: 2,
    title: "Pesto sauce",
    isChecked: false,
  },
  {
    id: 3,
    title: "BBQ sauce",
    isChecked: false,
  },
  {
    id: 4,
    title: "Buffalo sauce",
    isChecked: false,
  },
];
export const sizes = [
  {
    id: 0,
    title: "Small 10” (6 Slices)",
    isChecked: false,
  },
  {
    id: 1,
    title: "Medium 12” (8 Slices)",
    price: 4,
    isChecked: false,
  },
  {
    id: 2,
    title: "Large 14” (8 Slices)",
    price: 10,
    isChecked: false,
  },
  {
    id: 3,
    title: "Extra large 16” (12 Slices)",
    price: 15,
    isChecked: false,
  },
  {
    id: 4,
    title: "Super 20” (12 Slices)",
    price: 18,
    isChecked: false,
  },
  {
    id: 5,
    title: "24”",
    price: 25,
    isChecked: false,
  },
];
export const crusts = [
  {
    id: 0,
    title: "Regular Crust",
    isChecked: false,
  },
  {
    id: 1,
    title: "Corn Skinny Crust",
    price: 4,
    isChecked: false,
  },
  {
    id: 2,
    title: "Thick Pan Crust",
    price: 10,
    isChecked: false,
  },
];
export const addOns = [
  {
    id: 0,
    title: "1 Side of Ranch Dressing",
    price: 0.5,
    isChecked: false,
  },
  {
    id: 1,
    title: "2 Side of Ranch Dressing",
    price: 1.0,
    isChecked: false,
  },
  {
    id: 2,
    title: "Side of Marinara Sauce",
    price: 0.69,
    isChecked: false,
  },
];
export const frequently = [
  {
    id: 0,
    title: "Soda",
    subtitle: 1.69,
  },
  {
    id: 1,
    title: "Cheeze Pizza",
    subtitle: 12.99,
  },
  {
    id: 2,
    title: "Amigos Hawaiana Pizza",
    subtitle: 16.99,
  },
];

///RECOMMENDATIONS
export const recommended = [
  {
    id: 0,
    title: "Cantina Crispy Chicken",
  },
  {
    id: 1,
    title: "Spicy Cheesy Double",
  },
  {
    id: 2,
    title: "Mango Freeze",
  },
];

///RESTAURANT DETAILS SCREEN
export const restData = {
  restaurant: {
    name: "Lanespan Pizza & Pub (Emeryville)",
    category: "Pizza",
    rating: "4.6",
    ratingQuantity: 300,
    workingHours: "Open until 3:00 AM",
  },
  mostPopular: [
    {
      id: 0,
      title: "McMushroom Pizza",
      price: "US$21.00",
      desc: "Garlic, olive oil base, mozarella, cremini mushrooms, ricotta, thyme, white truffle oil. Add arugula for an extra charge",
      imgUrl: require("../../assets/images/pizzaOne.png"),
    },
    {
      id: 1,
      title: "Broken Mush Pizza",
      price: "US$18.00",
      desc: "Hot peppers, mozzarella, spicy marinara, spicy sporessata and picante infused olive oil",
      imgUrl: require("../../assets/images/pizzaTwo.png"),
    },
    {
      id: 2,
      title: "Margarita Pizza",
      price: "US$20.00",
      desc: "Whole milk mozarrela pearls, mozarrela, marinara, shaved Parmesan, fresh basil and extra virgin olive oil",
      imgUrl: require("../../assets/images/pizzaOne.png"),
    },
    {
      id: 3,
      title: '18" Round Pizza',
      price: "US$26.00",
      desc: "Starts as delicious cheese. Up to 4 additional toppings (no more than 2 meat toppings).",
      promo: true,
    },
  ],
  pickedForYou: [
    {
      id: 0,
      title: "Happy birthday Pizza",
      price: "US$27.00",
      desc: "Pepperoni, mariaara, mozzarella, garlic and extra virgin olive oil",
    },
    {
      id: 1,
      title: "Little Ceasar Salad (Vegan)",
      price: "US$18.00",
      desc: "Little Gems, House Made Vegan Dressing, Croutons, Nutrtional Yeast, Baked Capers",
    },
    {
      id: 2,
      title: "Rocket Salad",
      price: "US$10.00",
      desc: "Arugula, shaved fennel, vinegar and olive oil, percorino and spanish marcona almonds",
    },
  ],
  starters: [
    {
      id: 0,
      title: "Garlic knots",
      price: null,
      desc: "Priced by add-ons",
      popular: true,
      imgUrl: require("../../assets/images/garlicKnots.png"),
    },
  ],
  salads: [
    {
      id: 0,
      title: "Little Ceasar Salad (Vegan)",
      price: "US$18.00",
      desc: "Little Gems, House Made Vegan Dressing, Croutons, Nutrtional Yeast, Baked Capers",
      popular: true,
    },
    {
      id: 1,
      title: "Rocket Salad",
      price: "US$18.00",
      desc: "Arugula, shaved fennel, vinegar and olive oil, percorino and spanish marcona almonds",
      popular: false,
    },
  ],
  ourSpecialPizza: [
    {
      id: 0,
      title: "McMushroom Pizza",
      price: "US$21.00",
      desc: "Garlic, olive oil base, mozarella, cremini mushrooms, ricotta, thyme, white truffle oil. Add arugula for an extra charge",
      popular: false,
      imgUrl: require("../../assets/images/pizzaOne.png"),
    },
    {
      id: 1,
      title: "Broken Mush Pizza",
      price: "US$18.00",
      desc: "Hot peppers, mozzarella, spicy marinara, spicy sporessata and picante infused olive oil",
      popular: false,
      imgUrl: require("../../assets/images/pizzaFour.png"),
    },
    {
      id: 2,
      title: "Margarita Pizza",
      price: "US$20.00",
      desc: "Whole milk mozarrela pearls, mozarrela, marinara, shaved Parmesan, fresh basil and extra virgin olive oil",
      popular: false,
      imgUrl: require("../../assets/images/pizzaTwo.png"),
    },
    {
      id: 3,
      title: "Happy birthday Pizza",
      price: "US$27.00",
      desc: "Pepperoni, mariaara, mozzarella, garlic and extra virgin olive oil",
      popular: true,
    },
  ],
  miscellaneous: [
    {
      id: 0,
      title: "Garlic knots",
      price: "US$1.50",
      desc: null,
      popular: true,
    },
    {
      id: 1,
      title: "Marinara",
      price: "US$1.00",
      desc: null,
      popular: true,
    },
    {
      id: 2,
      title: "Balsamic Glaze",
      price: "US$1.50",
      desc: null,
      popular: false,
    },
  ],
  alcohol: [
    {
      id: 0,
      title: "Russian River Pliny Bottle",
      price: "US$8.00",
      desc: "Must be 21 to purchase",
      popular: false,
    },
  ],
};

///STORE
export const featured = {
  fruitsandvegetables: [
    {
      id: 0,
      imgUrl: require("../../assets/images/groceryImages/banana.png"),
      title: "Organic Banana",
      price: 0.27,
      subTitle: "1 banana",
    },
    {
      id: 1,
      imgUrl: require("../../assets/images/groceryImages/avocado.png"),
      title: "Medium Hass Avocado",
      price: 2.21,
      subTitle: "1 avocado",
    },
    {
      id: 2,
      imgUrl: require("../../assets/images/groceryImages/tomato.png"),
      title: "Large tomatoes Hot House",
      price: 2.21,
      subTitle: "1 tomato",
    },
  ],
  beverages: [
    {
      id: 0,
      imgUrl: require("../../assets/images/groceryImages/banana.png"),
      title: "Organic Banana",
      price: 0.27,
      subTitle: "1 banana",
    },
    {
      id: 1,
      imgUrl: require("../../assets/images/groceryImages/avocado.png"),
      title: "Medium Hass Avocado",
      price: 2.21,
      subTitle: "1 avocado",
    },
    {
      id: 2,
      imgUrl: require("../../assets/images/groceryImages/avocado.png"),
      title: "Medium Hass Avocado",
      price: 2.21,
      subTitle: "1 avocado",
    },
  ],
  frozenfoods: [
    {
      id: 0,
      imgUrl: require("../../assets/images/groceryImages/banana.png"),
      title: "Organic Banana",
      price: 0.27,
      subTitle: "1 banana",
    },
    {
      id: 1,
      imgUrl: require("../../assets/images/groceryImages/avocado.png"),
      title: "Medium Hass Avocado",
      price: 2.21,
      subTitle: "1 avocado",
    },
    {
      id: 2,
      imgUrl: require("../../assets/images/groceryImages/tomato.png"),
      title: "Large tomatoes Hot House",
      price: 2.21,
      subTitle: "1 tomato",
    },
  ],
  pantryandgroceries: [
    {
      id: 0,
      imgUrl: require("../../assets/images/groceryImages/banana.png"),
      title: "Organic Banana",
      price: 0.27,
      subTitle: "1 banana",
    },
    {
      id: 1,
      imgUrl: require("../../assets/images/groceryImages/avocado.png"),
      title: "Medium Hass Avocado",
      price: 2.21,
      subTitle: "1 avocado",
    },
    {
      id: 2,
      imgUrl: require("../../assets/images/groceryImages/avocado.png"),
      title: "Large tomatoes Hot House",
      price: 2.21,
      subTitle: "1 tomato",
    },
  ],
  meat: [
    {
      id: 0,
      imgUrl: require("../../assets/images/groceryImages/banana.png"),
      title: "Organic Banana",
      price: 0.27,
      subTitle: "1 banana",
    },
    {
      id: 1,
      imgUrl: require("../../assets/images/groceryImages/avocado.png"),
      title: "Medium Hass Avocado",
      price: 2.21,
      subTitle: "1 avocado",
    },
    {
      id: 2,
      imgUrl: require("../../assets/images/groceryImages/tomato.png"),
      title: "Large tomatoes Hot House",
      price: 2.21,
      subTitle: "1 tomato",
    },
  ],
  Cheese: [
    {
      id: 0,
      imgUrl: require("../../assets/images/groceryImages/banana.png"),
      title: "Organic Banana",
      price: 0.27,
      subTitle: "1 banana",
    },
    {
      id: 1,
      imgUrl: require("../../assets/images/groceryImages/avocado.png"),
      title: "Medium Hass Avocado",
      price: 2.21,
      subTitle: "1 avocado",
    },
    {
      id: 2,
      imgUrl: require("../../assets/images/groceryImages/tomato.png"),
      title: "Large tomatoes Hot House",
      price: 2.21,
      subTitle: "1 tomato",
    },
  ],
};