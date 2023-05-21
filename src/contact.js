import { makeElement } from "./defaultPage";

export default function contact(){
  const [main] = document.getElementsByTagName("main");
  main.textContent = "";
  const [home, menu, contact] = document.getElementsByTagName('button');
  home.style.borderBottom = ""
  menu.style.borderBottom = "";
  contact.style.borderBottom = "1rem lightgreen solid";
}