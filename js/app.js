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

const tamagotchi = new Game(nick, type)
