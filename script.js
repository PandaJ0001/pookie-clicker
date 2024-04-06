//Pookie Clicker UwU <3
//Hi friends, especially made for sad pookies (we hope this is not you), this cookie clicker game is what our team thinks to be a lovely mood booster and work motivator. Hopefully, this will be able to cheer you up. :) When I am sad, I like to look at this lil guy (his name is Pookie) and his funny little stature brightens my day, if only marginally!
const pookie = document.getElementById("clicker");

const count = document.getElementById("count");

let pookies = 0;
let level = 1;

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

window.onload = () => {
  pookies = getCookie("counter");
  level = getCookie("level");

  if (pookies == undefined || levels == undefined) {
    pookies = 0;
    level = 1;
  }

  count.innerHTML = "You have " + pookies + " Pookies!";

  

  console.log("hello");
};

pookie.addEventListener("click", () => {
  pookies = pookies + level;
  count.innerHTML = "You have " + pookies + " Pookies!";
});
