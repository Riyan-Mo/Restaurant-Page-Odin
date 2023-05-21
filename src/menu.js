import { makeElement } from "./defaultPage";
import dishArr from "./dishes.js";

export default function menu(){
  const [main] = document.getElementsByTagName("main");
  main.textContent = "";
  const [home, menu, contact] = document.getElementsByTagName('button');
  home.style.borderBottom = ""
  menu.style.borderBottom = "1rem lightgreen solid";
  contact.style.borderBottom = "";
  const section = document.createElement('section');
  section.classList.add('Contact');  
  main.appendChild(section);
  const menuDiv = document.createElement('div');
  menuDiv.classList.add("menuDiv");
  section.appendChild(menuDiv);
  showDishes(menuDiv);
}

function showDishes(pElement){
  const dishes = getDishes()
  pElement.innerHTMl = dishes.map(element => element);
}

function getDishes(){
  let dishData = dishArr.map(element =>{ 
    return `<div class="dishElement">
    <h3>${element.name}</h3>
    <p>${element.description}</p>
    <p>${element.price}</p>
    <img src="${element.image}">
    </div>`;
  })
  return dishData;
}