// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
 let appendCat = cats.push("Ralph");
 return appendCat
}
function destructivelyPrependCat(name){
  let prependCat = cats.unshift("Bob");
  return prependCat
}
function destructivelyRemoveLastCat(){
  let popCat = cats.pop();
  return popCat
}
function destructivelyRemoveFirstCat(){
  let shiftCat = cats.shift();
  return shiftCat
}
function appendCat(name){
 let addCat = [...cats, name]
 return addCat
}
function prependCat(name){
  let prependCats = [name, ...cats]
  return prependCats
}
function removeLastCat(){
  return cats.slice(0, cats.length - 1)
}
function removeFirstCat() {
  return cats.slice(1)
}