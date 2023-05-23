export default function Menu(){
  const [main] = document.getElementsByTagName("main");
  main.innerHTML = "";
  const [home, menu, contact] = document.getElementsByTagName('button');
  home.style.borderBottom = ""
  menu.style.borderBottom = "0.5rem lightgreen solid";
  contact.style.borderBottom = ""; 
}