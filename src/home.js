import { head } from "lodash";
import { makeElement } from "./defaultPage";

export default function home(){
  const [main] = document.getElementsByTagName("main");
  main.textContent = "";
  const [home, menu, contact] = document.getElementsByTagName('button');
  home.style.borderBottom = "1rem lightgreen solid"
  menu.style.borderBottom = "";
  contact.style.borderBottom = "";
  const heading = document.createElement("h2");
  heading.textContent = "About Us";
  const para1 = document.createElement("p");
  para1.textContent = "Welcome to Friends Corner, where delightful flavors and warm camaraderie intertwine. From savory appetizers to mouthwatering entrees, our chefs carefully craft each dish using the freshest ingredients sourced locally."
  const para2 = document.createElement("p");
  para2.textContent = "Our cozy restaurant in Goa offers a friendly atmosphere and a menu filled with culinary delights."
  const para3 = document.createElement("p");
  para3.textContent = "Whether you're joining us for a romantic dinner or a casual gathering, our dedicated staff is here to provide exceptional service and create unforgettable dining experiences. Step into Friend's Corner and savor the taste of friendship."
  const section = document.createElement("section");
  section.appendChild(heading);
  section.appendChild(para1);
  section.appendChild(para2);
  section.appendChild(para3);
  section.classList.add("home");
  main.appendChild(section);
}