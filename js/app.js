console.log("Tamagotchi");

const tamGame = {

  name : "",
  hunger : 1,

  onFeed() {
    console.log("num num");
    tamGame.hunger = tamGame.hunger - 1;
    console.log(tamGame.hunger);
  },
  onSleep() {
    console.log("Zzz...");
  },
  onPlay() {
    console.log("hehe");
  }
}


function start() {
  name = prompt("Name your Tamagotchi!", "name")
  tamGame.name = name
  const head = document.getElementById("head")
  const newDiv = document.createElement("DIV")
  newDiv.setAttribute("id", "tam_name")
  newDiv.innerHTML = name
  head.appendChild(newDiv)
  const start = document.getElementById("init")
  start.remove()
  // return tamagotchi
  const stats = document.getElementById("stats")
  let hungry = document.createElement("H2")
  hungry.innerHTML = tamGame.hunger
  stats.appendChild(hungry)




  document.getElementById("feed").addEventListener("click", tamGame.onFeed)
  document.getElementById("play").addEventListener("click", tamGame.onPlay)
  document.getElementById("sleep").addEventListener("click", tamGame.onSleep)

  setInterval( function() { hungry.innerhtml = tamGame.hunger += 1; console.log(tamGame.hunger); }, 2000)
}


function selector() {
  start()

  const bod = document.getElementById("interactive")
  const eggs = document.createElement("DIV")
  eggs.setAttribute("id", "egg-buttons")
  const egg1 = document.createElement("BUTTON")
  const egg2 = document.createElement("BUTTON")
  const egg3 = document.createElement("BUTTON")
  egg1.setAttribute("id", "egg1")
  egg2.setAttribute("id", "egg2")
  egg3.setAttribute("id", "egg3")
  egg1.innerHTML = '<img src="img/egg1.png" />';
  egg2.innerHTML = '<img src="img/egg2.png" />';
  egg3.innerHTML = '<img src="img/egg3.png" />';
  eggs.appendChild(egg1)
  eggs.appendChild(egg2)
  eggs.appendChild(egg3)
  alert("Choose an egg to hatch")
  bod.appendChild(eggs)

  document.getElementById("egg1").addEventListener("click", hatch1)
  document.getElementById("egg2").addEventListener("click", hatch2)
  document.getElementById("egg3").addEventListener("click", hatch3)

}

function hatch1() {
  const bod = document.getElementById("interactive")
  const eggs = document.getElementById("egg-buttons")
  eggs.remove()
  const tama = document.createElement("DIV")
  tama.setAttribute("id", "dragon")
  tama.innerHTML = '<img src="img/dragons.png" />';
  bod.appendChild(tama)

}

function hatch2() {
  const bod = document.getElementById("interactive")
  const eggs = document.getElementById("egg-buttons")
  eggs.remove()
  const tama = document.createElement("DIV")
  tama.setAttribute("id", "dragon")
  tama.innerHTML = '<img src="img/dragons2.png" />';
  bod.appendChild(tama)

}

function hatch3() {
  const bod = document.getElementById("interactive")
  const eggs = document.getElementById("egg-buttons")
  eggs.remove()
  const tama = document.createElement("DIV")
  tama.setAttribute("id", "dragon")
  tama.innerHTML = '<img src="img/dragons3.png" />';
  bod.appendChild(tama)

}








document.getElementById("init").addEventListener("click", selector)
