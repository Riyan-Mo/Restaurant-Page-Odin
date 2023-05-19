import { head } from "lodash";
import Icon from "./images/tomato.png"; 
import home from "./home.js";
import contact from "./contact.js";
import menu from "./menu.js";

export function defaultPage(){
  header();
  nav();
  main();
  home();
}

function header(){
  const root = document.createElement("div");
  document.body.appendChild(root);
  root.id = "root";
  const header = document.createElement("header");
  const hero = document.createElement('div')
  hero.className = "hero";
  hero.innerHTML = `<h1 class="hero-title">Friends Corner</h1>`
  const icon = new Image();
  icon.src = Icon;
  icon.className = "hero-img"
  hero.appendChild(icon);
  header.appendChild(hero);
  root.appendChild(header);
}

function nav(){
  const [header] = document.getElementsByTagName("header");
  makeElement("div", header, "navigation", "navigation");
  const navigation = document.getElementById("navigation");
  makeElement("button", navigation, "Home", "home", home);
  makeElement("button", navigation, "Menu", "menu", menu );
  makeElement("button", navigation, "Contact", "contact", contact);
}

export function makeElement(element, parentElement="", eId="", eClass="", Event=""){
  const hElement = document.createElement(element);
  hElement.id = eId;
  hElement.className = eClass;
  hElement.onclick=Event;
  if(element!="div"){
  hElement.textContent= eId;
  }
  parentElement.appendChild(hElement);
}
function main(){
  const root = document.getElementById('root');
  const main = document.createElement('main');
  root.appendChild(main);
}