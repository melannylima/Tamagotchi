console.log("Tamagotchi");

const tamGame = {

  name: "",
  age: 0,
  hunger: 0,
  tired: 0,
  bored: 0,
  type: 0,

  onFeed() {
    console.log("num num");
    // console.log(tamGame.hunger);
    document.getElementById("growl").innerHTML = tamGame.hunger -= 1;
  },
  onSleep() {
    console.log("Zzz...");
    document.getElementById("yawn").innerHTML = tamGame.tired -= 1;
    const sky = document.getElementById("main")
  sky.classList.toggle("night");
  },
  onPlay() {
    console.log("hehe");
    document.getElementById("whine").innerHTML = tamGame.bored -= 1;
  },
  toHeaven() {
    if (tamGame.hunger >= 10 || tamGame.tired >= 10 || tamGame.bored >= 10) {
      heaven()
      alert(`${name} has gone to Heaven!`)
    }
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

  const stat1 = document.getElementById("hunger")
  const stat2 = document.getElementById("tired")
  const stat3 = document.getElementById("bored")
  const stat4 = document.getElementById("age")

  let hungry = document.createElement("H2")
  hungry.setAttribute("id", "growl")
  hungry.innerHTML = tamGame.hunger
  stat1.appendChild(hungry)

  let tired = document.createElement("H2")
  tired.setAttribute("id", "yawn")
  tired.innerHTML = tamGame.tired
  stat2.appendChild(tired)

  let bored = document.createElement("H2")
  bored.setAttribute("id", "whine")
  bored.innerHTML = tamGame.bored
  stat3.appendChild(bored)

  let age = document.createElement("H2")
  age.setAttribute("id", "ooh")
  age.innerHTML = tamGame.age
  stat4.appendChild(age)

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
  tamGame.type = 1;
  intervals()
}

function hatch2() {
  const bod = document.getElementById("interactive")
  const eggs = document.getElementById("egg-buttons")
  eggs.remove()
  const tama = document.createElement("DIV")
  tama.setAttribute("id", "dragon")
  tama.innerHTML = '<img src="img/dragons2.png" />';
  bod.appendChild(tama)
  tamGame.type = 2;
  intervals()
}

function hatch3() {
  const bod = document.getElementById("interactive")
  const eggs = document.getElementById("egg-buttons")
  eggs.remove()
  const tama = document.createElement("DIV")
  tama.setAttribute("id", "dragon")
  tama.innerHTML = '<img src="img/dragons3.png" />';
  bod.appendChild(tama)
  tamGame.type = 3;
  intervals()
}


function heaven() {
  const tama = document.getElementById("dragon");
  const bod = document.getElementById("interactive");
  bod.innerHTML = '<img src="img/rip.png" />';
  tama.remove();
  console.log("Game Over");

}


function intervals() {
  setInterval(() => {
    document.getElementById("growl").innerHTML = tamGame.hunger += 1;
    console.log(tamGame.hunger); }, 2500)
  setInterval(() => {
    document.getElementById("yawn").innerHTML = tamGame.tired += 1;
    console.log(tamGame.tired); }, 2500)
  setInterval(() => {
    document.getElementById("whine").innerHTML = tamGame.bored += 1;
    console.log(tamGame.bored); }, 2500)
  setInterval(() => {
    document.getElementById("ooh").innerHTML = tamGame.age += 1;
    console.log(tamGame.age); }, 4500)
  setInterval(() => {tamGame.toHeaven() }, 500)
}



document.getElementById("init").addEventListener("click", selector)


document.getElementById("feed").addEventListener("click", tamGame.onFeed)
document.getElementById("play").addEventListener("click", tamGame.onPlay)
document.getElementById("sleep").addEventListener("click", tamGame.onSleep)
