console.log("Tamagotchi");

class Game {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;

  }

  onFeed() {
    console.log("num num");
  }
  onSleep() {
    console.log("Zzz...");
  }
  onPlay() {
    console.log("hehe");
  }
}

// const tamagotchi = new Game(nick, type)

function selector() {
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
  bod.appendChild(eggs)
}








document.getElementById("init").addEventListener("click", selector)
