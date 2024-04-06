const pookie = document.getElementById("clicker");
const upgradeElement = document.getElementById("upgrade");
const count = document.getElementById("count");
const lvl = document.getElementById("lvl");

const pookieAudio = new Audio("pookieeeeeee.mp3");

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

  let cost = 10 ** level / 2;

  let upgradeMessage = `Upgrade your pookie! Costs ${cost} pookies.`;

  console.log(upgradeMessage);

  count.innerHTML = "You have " + pookies + " Pookies!";
  upgradeElement.value = upgradeMessage;
  lvl.innerHTML = "Pookie level: " + level;

  console.log("hello");
};

const upgrade = () => {
  let cost = 10 ** level / 2;

  if (pookies >= cost) {
    pookies -= cost;
    level += 1;
    cost = 10 ** level / 2;
    lvl.innerHTML = "Pookie level: " + level;

    count.innerHTML = "You have " + pookies + " Pookies!";
    upgradeElement.value = `Upgrade your pookie! Costs ${cost} pookies.`;

    console.log("upgrade");
  }
};

upgradeElement.addEventListener("click", upgrade);

pookie.addEventListener("click", () => {
  pookieAudio.play();

  pookies = pookies + level;
  count.innerHTML = "You have " + pookies + " Pookies!";
});
