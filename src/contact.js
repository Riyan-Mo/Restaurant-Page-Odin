import { head } from "lodash";

export default function Contact(){
  const [main] = document.getElementsByTagName("main");
  main.innerHTML = "";
  const [home, menu, contact] = document.getElementsByTagName('button');
  home.style.borderBottom = ""
  menu.style.borderBottom = "";
  contact.style.borderBottom = "0.5rem lightgreen solid"; 
  const section = document.createElement("section");
  const heading = document.createElement('h2');
  heading.textContent = "Contact Us";
  const para1 = document.createElement("p")
  para1.textContent = "We'd love to hear from you! Whether you have a question, feedback, or would like to make a reservation, please feel free to get in touch with us. Our team is here to assist you."
  const para2 = document.createElement("p")
  para2.innerHTML = "Phone: 0832-0832-0832 <br> Email: definetlynotfake@gmail.com"
  const para3 = document.createElement("p")
  para3.innerHTML = `Opening Hours:<br>
  Weekdays: 10:00 a.m to 10:00pm<br>
  Sunday: Closed<br>
  <br>
  Location:Goa<br>`
  section.appendChild(heading);
  section.appendChild(para1);
  section.appendChild(para2);
  section.appendChild(para3);
  main.appendChild(section);
}