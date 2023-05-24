import Icon from "./images/tomato.png"; 
import home from "./home.js";
import Menu from "./menu";
import Contact from "./contact";

export function defaultPage(){
  header();
  nav();
  main();
  home();
  footer();
}

function footer(){
  const footer = document.createElement("footer");
  footer.innerHTML = `<a href="https://github.com/Riyan911" target="_blank">Github: Riyan911</a>`
  document.getElementById("root").appendChild(footer);
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
  makeElement("button", navigation, "Home", "Home", home);
  makeElement("button", navigation, "Menu", "Menu", Menu );
  makeElement("button", navigation, "Contact", "Contact", Contact);
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