export default function Contact(){
  const [main] = document.getElementsByTagName("main");
  main.innerHTML = "";
  const [home, menu, contact] = document.getElementsByTagName('button');
  home.style.borderBottom = ""
  menu.style.borderBottom = "";
  contact.style.borderBottom = "1rem lightgreen solid"; 
}