let stage = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")
let step = 1
let space = stage - 1
let spacing = " "
let steping = "#"

while (true) {
  if (step <= stage) {
    console.log(`${spacing.repeat(space)}${steping.repeat(step)}`);
    step += 1;
    space -= 1;
  } else {
    break;
  }
}