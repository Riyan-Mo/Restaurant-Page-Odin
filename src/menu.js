import Chickencaf from "./images/chickencaf.jpeg";
import Chickenxav from "./images/chickenxac.jpeg";
import Mojito from "./images/mojito.jpeg";
import Paneer from "./images/panner.jpeg";

export default function Menu(){
  const [main] = document.getElementsByTagName("main");
  main.innerHTML = "";
  const [home, menu, contact] = document.getElementsByTagName('button');
  home.style.borderBottom = ""
  menu.style.borderBottom = "0.5rem lightgreen solid";
  contact.style.borderBottom = ""; 
  const section = document.createElement("section");
  const heading = document.createElement('h2');
  heading.textContent = "Menu";
  const heading3 = document.createElement("h3")
  heading3.textContent = "We take pride in presenting a tantalizing array of dishes that will transport your taste buds on a delightful journey. Our culinary experts have curated a menu inspired by global flavors, carefully crafted to satisfy even the most discerning palate. Prepare yourself for a gastronomic adventure like no other."
  section.appendChild(heading);
  section.appendChild(heading3);
  main.appendChild(section);
  showDishes();
}

const dishArr = [
  {
    name:"Chicken Cafrael",
    img: Chickencaf,
    description: "A Goan delight. Tender chicken marinated in fresh coriander, green chilies, and spices, pan-fried to perfection. A true taste of Goa.",
    price: "$2.5",
  },
  {
    name:"Paneer Tikka Masala",
    img: Paneer,
    description: "A vegetarian delight. Grilled paneer cubes in a rich, creamy tomato sauce. A taste of India that will leave you wanting more.",
    price: "$3.5",
  },
  {
    name:"Chicken Xacuti",
    img: Chickenxav,
    description: "A flavorful delight. Tender chicken cooked in a fragrant blend of roasted spices and coconut. Experience the taste of Goa.",
    price: "$3.0",
  },
  {
    name:"Lime Mojito",
    img: Mojito,
    description: "Refreshingly zesty. A classic blend of lime, mint, and a hint of sweetness. Your perfect thirst-quencher.",
    price: "$1.0",
  }
]

const showDishes = () => {
  const [section] = document.getElementsByTagName('section');
  dishArr.forEach(dish => {
    const dishDiv = document.createElement("div");
    dishDiv.classList.add('dishContainer');
    const dishName = document.createElement("p");
    dishName.textContent = dish.name;
    dishName.classList.add('dishName')
    dishDiv.appendChild(dishName);
    const dishImg = new Image();
    dishImg.src = dish.img;
    dishImg.classList.add('dishImg');
    dishDiv.appendChild(dishImg);
    const dishDescription = document.createElement('p');
    dishDescription.textContent = dish.description;
    dishDescription.classList.add('dishDescription');
    dishDiv.appendChild(dishDescription);
    const dishPrice = document.createElement('p');
    dishPrice.textContent = `Price: ${dish.price}`;
    dishPrice.classList.add('dishPrice');
    dishDiv.appendChild(dishPrice);
    section.appendChild(dishDiv)
  })
}