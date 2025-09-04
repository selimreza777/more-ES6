/**
 * class --> template
 * properties
 * method (a special type of function inside a class without the function keyword)
 * 
 * object 
 * 
 * 
 */
// ----------------class diye object banano ----------------
class Player {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.location = 'bangladesh'
    // console.log('calling the consstrucor method', name)
  }

  goal() {
    // console.log('player goal') 
  }
  getTeamName() {
    return 'Burcha'
  }
  // console.log('Team Name')
}


const Player1 = new Player('Tom Brady', 33) // new Player (ekta method create holo)
const player2 = new Player('O Shanto', 11)
console.log(Player1 instanceof Player)

console.log(player2 instanceof Player)

// Player1.goal()  //player1.goal [player1 er ekta method holo goal]
// Player1.getTeamName()
// console.log(Player1)