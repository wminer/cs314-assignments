'use strict';
// let submitbtn = document.getElementById("submit");
// function validateData() {
//   console.log("ENTERING VALIDATE DATA");
//   let inpContainer = document.getElementById("inputs-container");
//   let name = document.getElementById("fullname");
//   console.log(name);
//   let email = document.getElementById("email");
//   console.log(email);
//   let phone = document.getElementById("phone");
//   let message = document.getElementById("textbox");
//   let contactDiv = document.getElementById("contact-div");
//   if((email.innerHTML.includes("@") && email.innerHTML.includes(".com"))) {
//     contactDiv.innerHTML = "Please enter a valid email. You entered "+ email.innerHTML;
//   } else {
//     contactDiv.innerHTML = "Type your message below";
//     for(let i = 0;i < 4;i++) {
//       let p_elem = document.createElement("p");
//       if(i == 0) {
//         p_elem.innerHTML = "Name: "+name.value;
//         console.log(name.value);
//       } else if(i==1) {
//         p_elem.innerHTML = "Email: "+email.value;
//         console.log(email.value);
//       } else if(i==2) {
//         p_elem.innerHTML = "Phone: "+phone.value;
//         console.log(phone.value);
//       } else if(i==3) {
//         p_elem.innerHTML = "Message: "+message.value;
//         console.log(message.value);
//       }
//       inpContainer.appendChild(p_elem);
//     }
//   }
// }
//
// submitbtn.onclick = validateData;
