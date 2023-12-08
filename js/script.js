   /*HERO CAROUSEL */
const words = ["Tech Enthusiast", "Drone Pilot", "Traveler", "Front End Web Developer"];
var counter = 0;
var word = document.getElementById("presentation");
function setPresentation(){
   word.innerHTML = words[counter];
   counter++;
   if(counter >= words.length){
      counter = 0;
   }
}
setInterval(setPresentation, 1500);


   /* SEND MAIL*/
function sendMail(){
   var params = {
      name: document.getElementById("name").ariaValueMax,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
   };

   const serviceID = "service_5o96eue";
const templateID = "template_tqqsrrj";

emailjs.send(serviceID, templateID, params)
.then(
   res => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("your message sent succesfully");
   }
)
.catch((err) => console.log(err));
}

